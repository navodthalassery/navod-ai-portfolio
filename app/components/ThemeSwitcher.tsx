"use client";

import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

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

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("navod-theme");
    const initial = saved && isTheme(saved) ? saved : "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const changeTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("navod-theme", nextTheme);
  };

  return (
    <label className="theme-switcher" title="Change theme">
      <Palette size={16} aria-hidden="true" />
      <span className="sr-only">Theme</span>
      <select
        aria-label="Choose website theme"
        value={theme}
        onChange={(event) => changeTheme(event.target.value as Theme)}
      >
        {themes.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
