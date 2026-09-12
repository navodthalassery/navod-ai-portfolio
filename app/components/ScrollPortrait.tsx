"use client";

import Image from "next/image";
import HeroVideo from "./HeroVideo";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";

export default function ScrollPortrait() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, (v) => (reduced ? 0 : -16 + v * 40));
  const scrollRotate = useTransform(scrollYProgress, (v) => (reduced ? 0 : -4 + v * 10));

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tiltX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 18,
  });
  const tiltY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 18,
  });
  const glowX = useTransform(pointerX, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(pointerY, [-0.5, 0.5], ["20%", "80%"]);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div ref={sectionRef} className="relative w-full">
      <motion.div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-sky-400/25 via-indigo-400/15 to-transparent blur-2xl"
        style={{ rotate: scrollRotate }}
      />
      <motion.div style={{ y: scrollY, perspective: 900 }}>
        <motion.div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
          className="group relative h-[280px] w-full overflow-hidden rounded-[28px] border border-white/10 shadow-glow sm:h-[320px]"
        >
          <Image
            src="/navod-portrait.png"
            alt="Navod PM"
            fill
            priority
            sizes="(min-width: 1024px) 30vw, 240px"
            className="object-cover"
            style={{ objectPosition: "50% 24%" }}
          />
          <HeroVideo variant="portrait" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 32%, transparent 26%, rgba(7,11,18,0.55) 62%, rgba(7,11,18,0.88) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(7,11,18,0.9))",
            }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([x, y]) => `radial-gradient(180px circle at ${x} ${y}, rgba(125,211,252,0.22), transparent 70%)`
              ),
            }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />
        </motion.div>
      </motion.div>
    </div>
  );
}
