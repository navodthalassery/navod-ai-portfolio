import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const focus = [
  "Generative AI", "RAG", "Agentic AI", "AI Agents", "LangGraph", "MCP",
  "Tool Calling", "Structured Outputs", "Embeddings", "Vector Search", "pgvector",
  "Reranking", "AI Evals", "Guardrails", "Human-in-the-Loop", "FastAPI",
  "Azure AI", "Redis", "Docker", "Kubernetes", "AI Observability"
];

const foundation = [
  "C# / .NET", "ASP.NET Core", "Angular 11–17", "React", "TypeScript", "Node.js",
  "Oracle", "SQL Server", "REST APIs", "System Integration", "Solution Architecture",
  "CI/CD", "AWS", "Enterprise Workflows"
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Ducont Technologies · UAE Government client",
    period: "Sep 2023 – Present",
    points: [
      "Enterprise document management and digital workflow solutions",
      "Government and third-party service integrations",
      "10+ production-grade applications across enterprise domains",
      "30% application performance improvement through architecture and code optimization",
      "Technical collaboration and mentoring across teams of 10+ developers",
    ],
  },
  {
    role: "Software Engineer",
    company: "Josh Software · Bangalore",
    period: "May 2022 – Aug 2023",
    points: ["Banking solutions using Angular, .NET and SQL Server"],
  },
  {
    role: "Earlier Engineering Roles",
    company: "Dubai · Abu Dhabi · Al Ain · Bahrain · India",
    period: "2013 – 2022",
    points: [
      "Enterprise mobile, HR, GIS, ERP, airline, property, accounting and e-commerce systems",
    ],
  },
];

const projects = [
  {
    title: "Enterprise AI Document & Workflow Assistant",
    badge: "Building now",
    icon: BrainCircuit,
    description:
      "Portfolio project evolving from structured document extraction into retrieval, tool-using agents, human approval, evaluation and production deployment patterns.",
    tech: ["Python", "FastAPI", "RAG", "LangGraph", "pgvector", "Evals"],
  },
  {
    title: "Digital Document Management & Attestation Platform",
    badge: "Enterprise experience",
    icon: Workflow,
    description:
      "Secure enterprise workflows for document processing, integrations, operational administration and production-scale service delivery in the UAE government sector.",
    tech: ["Angular", "ASP.NET Core", "Oracle", "REST APIs", "Enterprise Integration"],
  },
  {
    title: "Core Banking Platform",
    badge: "Enterprise experience",
    icon: ShieldCheck,
    description:
      "Banking application engineering using modern web technologies, backend APIs and relational data systems.",
    tech: ["Angular", ".NET", "SQL Server"],
  },
];

function SectionTitle({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {copy && <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{copy}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="shell sticky top-0 z-50 pt-4">
        <nav className="card flex items-center justify-between px-4 py-3 shadow-glow sm:px-5">
          <a href="#top" className="font-semibold tracking-tight text-white">NAVOD PM</a>
          <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#ai" className="hover:text-white">AI Focus</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
          </div>
          <a href="mailto:navodthalassery@gmail.com" className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-100">
            Contact
          </a>
        </nav>
      </header>

      <section id="top" className="shell flex min-h-[88vh] items-center py-20 sm:py-28">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-sm text-sky-200">
              <Sparkles size={15} /> Enterprise engineering → AI systems
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Building enterprise software for the{" "}
              <span className="bg-gradient-to-r from-sky-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                AI era.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              Senior Software Engineer with 10+ years of enterprise delivery experience, now focused on Enterprise AI, RAG, Agentic AI and intelligent workflow systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-sky-300 px-5 py-3 font-medium text-slate-950 transition hover:bg-sky-200">
                View projects <ArrowRight size={18} />
              </a>
              <a href="/NAVOD_PM_CV_UAE.pdf" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-medium text-white transition hover:bg-white/[0.08]">
                <Download size={18} /> Download CV
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2"><MapPin size={15} /> UAE</span>
              <a className="flex items-center gap-2 hover:text-slate-300" href="https://www.linkedin.com/in/navod-p-m-50451754/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a className="flex items-center gap-2 hover:text-slate-300" href="mailto:navodthalassery@gmail.com"><Mail size={15} /> Email</a>
            </div>
          </div>

          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl" />
            <p className="eyebrow">Profile snapshot</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["10+", "Years engineering"],
                ["3+", "Years UAE gov. delivery"],
                ["10+", "Production apps"],
                ["30%", "Perf. improvement"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="flex min-h-[108px] flex-col justify-between rounded-2xl border border-white/10 bg-black/15 p-5 transition hover:border-sky-400/25 hover:bg-black/25"
                >
                  <div className="text-3xl font-semibold tabular-nums text-white">{value}</div>
                  <div className="mt-2 text-sm leading-5 text-slate-500">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-sky-400/15 bg-sky-400/[0.07] p-5">
              <div className="flex items-center gap-3 text-sky-200"><Bot size={20} /><span className="font-medium">Current direction</span></div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Enterprise AI", "Agentic AI", "Full-Stack AI", "AI Integration", "Azure AI"].map((t) => (
                  <span key={t} className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="shell py-24">
        <SectionTitle label="About" title="Enterprise depth, modern AI direction." copy="I combine long-term software engineering experience with a practical transition into production-oriented AI systems. The goal is not to replace my engineering foundation, but to use it to build reliable AI-enabled enterprise applications." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [Building2, "Enterprise systems", "Government, banking, healthcare, aviation, ERP and e-commerce domains."],
            [Network, "Integration & architecture", "REST APIs, secure integrations, workflow design, databases and production delivery."],
            [BrainCircuit, "AI engineering", "RAG, agents, tool use, evaluation, guardrails and human-approved workflows."],
          ].map(([Icon, title, copy]) => {
            const C = Icon as typeof Building2;
            return <div className="card p-6 transition hover:border-sky-400/25 hover:bg-white/[0.05]" key={title as string}><C className="text-sky-300" /><h3 className="mt-5 text-xl font-semibold text-white">{title as string}</h3><p className="mt-3 leading-7 text-slate-400">{copy as string}</p></div>;
          })}
        </div>
      </section>

      <section id="ai" className="border-y border-white/5 bg-white/[0.015] py-24">
        <div className="shell">
          <SectionTitle label="Current AI focus" title="Technologies I am actively learning and building with." copy="These are intentionally presented as current focus areas—not as ten years of production experience. As projects are completed, they move into demonstrated capabilities and case studies." />
          <div className="flex flex-wrap gap-2.5">{focus.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
          <div className="mt-10 card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 shrink-0 text-emerald-300" />
              <div>
                <h3 className="text-lg font-semibold text-white">Positioning principle</h3>
                <p className="mt-2 leading-7 text-slate-400">Proven enterprise experience stays separate from technologies currently being learned. This keeps the portfolio credible while clearly showing the direction toward Enterprise AI and Agentic AI roles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="shell py-24">
        <SectionTitle label="Selected projects" title="From enterprise platforms to AI-native workflows." />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="card flex flex-col p-6 transition hover:border-sky-400/25 hover:bg-white/[0.05]" key={project.title}>
                <div className="flex items-center justify-between gap-3"><Icon className="text-sky-300" /><span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">{project.badge}</span></div>
                <h3 className="mt-6 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.tech.map((t) => <span key={t} className="rounded-lg bg-white/[0.05] px-2.5 py-1 text-xs text-slate-400">{t}</span>)}</div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="border-y border-white/5 bg-white/[0.015] py-24">
        <div className="shell">
          <SectionTitle label="Experience" title="10+ years across enterprise software delivery." />
          <div className="space-y-5">
            {experience.map((item) => (
              <article key={item.role} className="card grid gap-5 p-6 transition hover:border-sky-400/25 hover:bg-white/[0.05] md:grid-cols-[220px_1fr] md:p-8">
                <div><p className="text-sm text-sky-300">{item.period}</p><h3 className="mt-2 text-lg font-semibold text-white">{item.role}</h3><p className="mt-1 text-sm text-slate-500">{item.company}</p></div>
                <ul className="space-y-3 text-slate-400">{item.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" /> <span className="leading-7">{p}</span></li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-24">
        <SectionTitle label="Engineering foundation" title="The stack behind the AI transition." copy="The AI layer sits on top of a production engineering foundation in full-stack development, APIs, databases, integration, architecture and delivery." />
        <div className="flex flex-wrap gap-2.5">{foundation.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
      </section>

      <section className="shell pb-24">
        <div className="card overflow-hidden p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Let’s connect</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Looking for senior engineering roles where enterprise software meets practical AI.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">Open to Enterprise AI, Agentic AI, Full-Stack AI, AI Integration, Azure AI and Applied AI opportunities.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:navodthalassery@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-950"><Mail size={18}/> Email me</a>
              <a href="https://www.linkedin.com/in/navod-p-m-50451754/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium text-white"><Linkedin size={18}/> LinkedIn <ExternalLink size={15}/></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8">
        <div className="shell flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Navod PM</span>
          <span>Next.js · TypeScript · Tailwind CSS · Database-free V1</span>
        </div>
      </footer>
    </main>
  );
}
