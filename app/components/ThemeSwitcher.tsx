"use client";

import { Check, ChevronDown, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const themes = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
  { value: "gradient", label: "Gradient" },
  { value: "nature", label: "Nature" },
  { value: "minimal", label: "Minimal" },
  { value: "creative", label: "Creative" },
] as const;

type Theme = (typeof themes)[number]["value"];

const isTheme = (value: string): value is Theme =>
  themes.some((theme) => theme.value === value);

const STORAGE_KEY = "navod-theme-v2";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("gradient");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initial = saved && isTheme(saved) ? saved : "gradient";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setOpen(false);
  };

  const activeLabel = themes.find((item) => item.value === theme)?.label ?? "Theme";

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="card inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-sky-400/25"
      >
        <Palette size={14} aria-hidden="true" />
        {activeLabel}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Choose website theme"
          className="card absolute bottom-full right-0 z-20 mb-2 w-40 overflow-hidden rounded-xl p-1 shadow-glow"
        >
          {themes.map((item) => (
            <li key={item.value}>
              <button
                type="button"
                role="option"
                aria-selected={theme === item.value}
                onClick={() => changeTheme(item.value)}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                  theme === item.value
                    ? "bg-sky-400/10 text-sky-200"
                    : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
                {theme === item.value && <Check size={14} aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
