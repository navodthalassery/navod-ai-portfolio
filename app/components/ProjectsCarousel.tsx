"use client";

import { ChevronLeft, ChevronRight, ExternalLink, type LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";

type Project = { title: string; badge: string; description: string };

const AUTO_SPEED_PX_PER_SEC = 28;
const DRAG_CLICK_THRESHOLD = 6;
const NUDGE_DURATION_MS = 450;

function mod(n: number, m: number) {
  return m <= 0 ? 0 : ((n % m) + m) % m;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function ProjectsCarousel({
  items,
  tech,
  icons,
  demoUrls,
  viewLiveLabel,
}: {
  items: readonly Project[];
  tech: readonly (readonly string[])[];
  icons: readonly LucideIcon[];
  demoUrls: readonly (string | null)[];
  viewLiveLabel: string;
}) {
  const reduced = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const cardStepRef = useRef(0);
  const draggingRef = useRef(false);
  const hoveringRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const movedRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);
  const nudgeRef = useRef<{ from: number; to: number; start: number } | null>(null);

  const doubled = [...items, ...items];

  function applyTransform() {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }
  }

  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      if (!track) return;
      halfWidthRef.current = track.scrollWidth / 2;
      const firstCard = track.firstElementChild as HTMLElement | null;
      if (firstCard) {
        const gap = parseFloat(getComputedStyle(track).columnGap || "0");
        cardStepRef.current = firstCard.offsetWidth + gap;
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  useEffect(() => {
    let rafId: number;
    function frame(ts: number) {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (nudgeRef.current) {
        const { from, to, start } = nudgeRef.current;
        const progress = Math.min(1, (ts - start) / NUDGE_DURATION_MS);
        offsetRef.current = mod(from + (to - from) * easeInOutCubic(progress), halfWidthRef.current);
        applyTransform();
        if (progress >= 1) nudgeRef.current = null;
      } else if (!reduced && !draggingRef.current && !hoveringRef.current && halfWidthRef.current > 0) {
        offsetRef.current = mod(offsetRef.current + AUTO_SPEED_PX_PER_SEC * dt, halfWidthRef.current);
        applyTransform();
      }
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [reduced]);

  function nudge(dir: 1 | -1) {
    if (!cardStepRef.current) return;
    nudgeRef.current = { from: offsetRef.current, to: offsetRef.current + dir * cardStepRef.current, start: performance.now() };
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    nudgeRef.current = null;
    draggingRef.current = true;
    pointerStartXRef.current = e.clientX;
    startOffsetRef.current = offsetRef.current;
    movedRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    const delta = e.clientX - pointerStartXRef.current;
    movedRef.current = Math.max(movedRef.current, Math.abs(delta));
    if (halfWidthRef.current > 0) {
      offsetRef.current = mod(startOffsetRef.current - delta, halfWidthRef.current);
      applyTransform();
    }
  }

  function handlePointerUp() {
    draggingRef.current = false;
  }

  function handleClickCapture(e: React.MouseEvent<HTMLDivElement>) {
    if (movedRef.current > DRAG_CLICK_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        onMouseEnter={() => (hoveringRef.current = true)}
        onMouseLeave={() => (hoveringRef.current = false)}
      >
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClickCapture={handleClickCapture}
          className="flex w-max select-none gap-5 [touch-action:pan-y]"
          style={{ cursor: "grab" }}
        >
          {doubled.map((project, idx) => {
            const i = idx % items.length;
            const Icon = icons[i];
            const demoUrl = demoUrls[i];
            return (
              <div key={`${project.title}-${idx}`} className="w-[280px] shrink-0 sm:w-[320px]">
                <article className="card flex h-full flex-col p-6 transition hover:border-sky-400/25 hover:bg-white/[0.05]">
                  <div className="flex items-center justify-between gap-3">
                    <Icon className="text-sky-300" />
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">{project.badge}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tech[i].map((item) => (
                      <span key={item} className="rounded-lg bg-white/[0.05] px-2.5 py-1 text-xs text-slate-400">{item}</span>
                    ))}
                  </div>
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 transition hover:text-sky-200"
                    >
                      {viewLiveLabel} <ExternalLink size={14} />
                    </a>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => nudge(-1)}
          className="card flex h-10 w-10 items-center justify-center rounded-full transition hover:border-sky-400/25"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => nudge(1)}
          className="card flex h-10 w-10 items-center justify-center rounded-full transition hover:border-sky-400/25"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
