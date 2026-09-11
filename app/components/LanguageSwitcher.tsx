"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "../lib/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="card inline-flex items-center gap-1 rounded-xl p-1 text-xs font-medium">
      <Languages size={14} className="mx-1.5 text-slate-400" aria-hidden="true" />
      {(["en", "ar"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`rounded-lg px-2.5 py-1.5 transition ${
            lang === option ? "bg-sky-400/10 text-sky-200" : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
          }`}
        >
          {option === "en" ? "EN" : "AR"}
        </button>
      ))}
    </div>
  );
}
