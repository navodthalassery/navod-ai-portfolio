"use client";

import { ExternalLink, type LucideIcon } from "lucide-react";
import { useState } from "react";

type Project = { title: string; badge: string; description: string };

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
  const [paused, setPaused] = useState(false);
  const durationSeconds = items.length * 8;
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`marquee-track flex w-max gap-5${paused ? " marquee-paused" : ""}`}
        style={{ animationDuration: `${durationSeconds}s` }}
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
  );
}
