"use client";

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import ScrollPortrait from "./components/ScrollPortrait";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ProjectsCarousel from "./components/ProjectsCarousel";
import { useLanguage } from "./lib/LanguageProvider";
import { translations, focusTags, foundationTags, projectTech, projectDemoUrls } from "./lib/translations";

const aboutIcons = [Building2, Network, BrainCircuit];
const projectIcons = [BrainCircuit, Workflow, ShieldCheck, Rocket];

function SectionTitle({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <Reveal className="mb-10 max-w-3xl">
      <p className="eyebrow">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {copy && <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{copy}</p>}
    </Reveal>
  );
}

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main>
      <header className="shell sticky top-0 z-50 pt-4">
        <nav className="card flex items-center justify-between gap-3 px-4 py-3 shadow-glow sm:px-5">
          <a href="#top" className="shrink-0 font-semibold tracking-tight text-white">NAVOD PM</a>
          <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            <a href="#about" className="hover:text-white">{t.nav.about}</a>
            <a href="#ai" className="hover:text-white">{t.nav.aiFocus}</a>
            <a href="#projects" className="hover:text-white">{t.nav.projects}</a>
            <a href="#experience" className="hover:text-white">{t.nav.experience}</a>
          </div>
          <a href="mailto:navodthalassery@gmail.com" className="hidden rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-100 sm:inline-flex">
            {t.nav.contact}
          </a>
        </nav>
      </header>

      <section id="top" className="shell relative flex min-h-[88vh] items-center overflow-hidden py-20 sm:py-28">
        <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-sm text-sky-200">
              <Sparkles size={15} /> {t.hero.badge}
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              {t.hero.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-sky-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-sky-300 px-5 py-3 font-medium text-slate-950 transition hover:bg-sky-200">
                {t.hero.viewProjects} <ArrowRight size={18} />
              </a>
              <a href="/NAVOD_PM_CV_UAE.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-medium text-white transition hover:bg-white/[0.08]">
                <Download size={18} /> {t.hero.downloadCv}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2"><MapPin size={15} /> {t.hero.location}</span>
              <a className="flex items-center gap-2 hover:text-slate-300" href="https://www.linkedin.com/in/navod-p-m-50451754/" target="_blank" rel="noreferrer"><Linkedin size={15} /> {t.hero.linkedin}</a>
              <a className="flex items-center gap-2 hover:text-slate-300" href="mailto:navodthalassery@gmail.com"><Mail size={15} /> {t.hero.email}</a>
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-4">
            <ScrollPortrait />
            <div className="card relative w-full overflow-hidden p-6 sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl" />
              <p className="eyebrow">{t.snapshot.label}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {t.snapshot.stats.map(([value, label]) => (
                  <div
                    key={label}
                    className="flex min-h-[108px] flex-col justify-between rounded-2xl border border-white/10 bg-black/15 p-5 transition hover:border-sky-400/25 hover:bg-black/25"
                  >
                    <div className="text-3xl font-semibold tabular-nums text-white"><CountUp value={value} /></div>
                    <div className="mt-2 text-sm leading-5 text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-sky-400/15 bg-sky-400/[0.07] p-5">
                <div className="flex items-center gap-3 text-sky-200"><Bot size={20} /><span className="font-medium">{t.snapshot.currentDirection}</span></div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.snapshot.directionTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="shell py-24">
        <SectionTitle label={t.about.eyebrow} title={t.about.title} copy={t.about.copy} />
        <div className="grid gap-5 md:grid-cols-3">
          {t.about.cards.map((card, i) => {
            const Icon = aboutIcons[i];
            return (
              <Reveal delay={i * 0.1} key={card.title}>
                <div className="card p-6 transition hover:border-sky-400/25 hover:bg-white/[0.05]"><Icon className="text-sky-300" /><h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3><p className="mt-3 leading-7 text-slate-400">{card.copy}</p></div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="ai" className="border-y border-white/5 bg-white/[0.015] py-24">
        <div className="shell">
          <SectionTitle label={t.aiFocus.eyebrow} title={t.aiFocus.title} copy={t.aiFocus.copy} />
          <Reveal className="flex flex-wrap gap-2.5">{focusTags.map((item) => <span className="tag" key={item}>{item}</span>)}</Reveal>
          <Reveal className="mt-10 card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 shrink-0 text-emerald-300" />
              <div>
                <h3 className="text-lg font-semibold text-white">{t.aiFocus.positioningTitle}</h3>
                <p className="mt-2 leading-7 text-slate-400">{t.aiFocus.positioningCopy}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="shell py-24">
        <SectionTitle label={t.projects.eyebrow} title={t.projects.title} />
        <ProjectsCarousel
          items={t.projects.items}
          tech={projectTech}
          icons={projectIcons}
          demoUrls={projectDemoUrls}
          viewLiveLabel={t.projects.viewLive}
        />
      </section>

      <section id="experience" className="border-y border-white/5 bg-white/[0.015] py-24">
        <div className="shell">
          <SectionTitle label={t.experience.eyebrow} title={t.experience.title} />
          <div className="space-y-5">
            {t.experience.items.map((item, i) => (
              <Reveal delay={i * 0.1} key={item.role}>
                <article className="card grid gap-5 p-6 transition hover:border-sky-400/25 hover:bg-white/[0.05] md:grid-cols-[220px_1fr] md:p-8">
                  <div><p className="text-sm text-sky-300">{item.period}</p><h3 className="mt-2 text-lg font-semibold text-white">{item.role}</h3><p className="mt-1 text-sm text-slate-500">{item.company}</p></div>
                  <ul className="space-y-3 text-slate-400">{item.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" /> <span className="leading-7">{p}</span></li>)}</ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-24">
        <SectionTitle label={t.foundationSection.eyebrow} title={t.foundationSection.title} copy={t.foundationSection.copy} />
        <Reveal className="flex flex-wrap gap-2.5">{foundationTags.map((item) => <span className="tag" key={item}>{item}</span>)}</Reveal>
      </section>

      <section className="shell pb-24">
        <Reveal className="card overflow-hidden p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">{t.connect.eyebrow}</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t.connect.title}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">{t.connect.copy}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:navodthalassery@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-950"><Mail size={18}/> {t.connect.emailMe}</a>
              <a href="https://www.linkedin.com/in/navod-p-m-50451754/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium text-white"><Linkedin size={18}/> {t.connect.linkedin} <ExternalLink size={15}/></a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/5 py-8">
        <div className="shell flex flex-col items-start gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>{t.footer.copyright}</span>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </footer>
    </main>
  );
}
