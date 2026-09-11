export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: { about: "About", aiFocus: "AI Focus", projects: "Projects", experience: "Experience", contact: "Contact" },
    hero: {
      badge: "Enterprise engineering → AI systems",
      titlePrefix: "Building enterprise software for the",
      titleHighlight: "AI era.",
      subtitle:
        "Senior Software Engineer with 10+ years of enterprise delivery experience, now focused on Enterprise AI, RAG, Agentic AI and intelligent workflow systems.",
      viewProjects: "View projects",
      downloadCv: "Download CV",
      location: "UAE",
      linkedin: "LinkedIn",
      email: "Email",
    },
    snapshot: {
      label: "Profile snapshot",
      stats: [
        ["10+", "Years engineering"],
        ["3+", "Years UAE gov. delivery"],
        ["10+", "Production apps"],
        ["30%", "Perf. improvement"],
      ] as [string, string][],
      currentDirection: "Current direction",
      directionTags: ["Enterprise AI", "Agentic AI", "Full-Stack AI", "AI Integration", "Azure AI"],
    },
    about: {
      eyebrow: "About",
      title: "Enterprise depth, modern AI direction.",
      copy: "I combine long-term software engineering experience with a practical transition into production-oriented AI systems. The goal is not to replace my engineering foundation, but to use it to build reliable AI-enabled enterprise applications.",
      cards: [
        { title: "Enterprise systems", copy: "Government, banking, healthcare, aviation, ERP and e-commerce domains." },
        { title: "Integration & architecture", copy: "REST APIs, secure integrations, workflow design, databases and production delivery." },
        { title: "AI engineering", copy: "RAG, agents, tool use, evaluation, guardrails and human-approved workflows." },
      ],
    },
    aiFocus: {
      eyebrow: "Current AI focus",
      title: "Technologies I am actively learning and building with.",
      copy: "These are intentionally presented as current focus areas—not as ten years of production experience. As projects are completed, they move into demonstrated capabilities and case studies.",
      positioningTitle: "Positioning principle",
      positioningCopy:
        "Proven enterprise experience stays separate from technologies currently being learned. This keeps the portfolio credible while clearly showing the direction toward Enterprise AI and Agentic AI roles.",
    },
    projects: {
      eyebrow: "Selected projects",
      title: "From enterprise platforms to AI-native workflows.",
      viewLive: "View live",
      items: [
        {
          title: "Enterprise AI Document & Workflow Assistant",
          badge: "Building now",
          description:
            "Portfolio project evolving from structured document extraction into retrieval, tool-using agents, human approval, evaluation and production deployment patterns.",
        },
        {
          title: "Digital Document Management & Attestation Platform",
          badge: "Enterprise experience",
          description:
            "Secure enterprise workflows for document processing, integrations, operational administration and production-scale service delivery in the UAE government sector.",
        },
        {
          title: "Core Banking Platform",
          badge: "Enterprise experience",
          description: "Banking application engineering using modern web technologies, backend APIs and relational data systems.",
        },
        {
          title: "More projects coming soon",
          badge: "In progress",
          description: "This slot is a placeholder — reach out if you'd like to see work in progress, or check back as new case studies are published here.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "10+ years across enterprise software delivery.",
      items: [
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
          points: ["Enterprise mobile, HR, GIS, ERP, airline, property, accounting and e-commerce systems"],
        },
      ],
    },
    foundationSection: {
      eyebrow: "Engineering foundation",
      title: "The stack behind the AI transition.",
      copy: "The AI layer sits on top of a production engineering foundation in full-stack development, APIs, databases, integration, architecture and delivery.",
    },
    connect: {
      eyebrow: "Let's connect",
      title: "Looking for senior engineering roles where enterprise software meets practical AI.",
      copy: "Open to Enterprise AI, Agentic AI, Full-Stack AI, AI Integration, Azure AI and Applied AI opportunities.",
      emailMe: "Email me",
      linkedin: "LinkedIn",
    },
    footer: { copyright: "© 2026 Navod PM" },
  },
  ar: {
    nav: { about: "نبذة", aiFocus: "تركيز الذكاء الاصطناعي", projects: "المشاريع", experience: "الخبرة", contact: "تواصل" },
    hero: {
      badge: "هندسة المؤسسات ← أنظمة الذكاء الاصطناعي",
      titlePrefix: "نبني برمجيات المؤسسات من أجل",
      titleHighlight: "عصر الذكاء الاصطناعي.",
      subtitle:
        "مهندس برمجيات أول يتمتع بخبرة تزيد عن 10 سنوات في تسليم حلول المؤسسات، ويركّز حالياً على الذكاء الاصطناعي للمؤسسات، وRAG، والذكاء الاصطناعي الوكيل، وأنظمة سير العمل الذكية.",
      viewProjects: "عرض المشاريع",
      downloadCv: "تحميل السيرة الذاتية",
      location: "الإمارات",
      linkedin: "LinkedIn",
      email: "البريد الإلكتروني",
    },
    snapshot: {
      label: "لمحة عن الملف الشخصي",
      stats: [
        ["10+", "سنوات الخبرة الهندسية"],
        ["3+", "سنوات العمل مع الحكومة الإماراتية"],
        ["10+", "تطبيقات إنتاجية"],
        ["30%", "تحسين الأداء"],
      ] as [string, string][],
      currentDirection: "التوجه الحالي",
      directionTags: ["الذكاء الاصطناعي للمؤسسات", "الذكاء الاصطناعي الوكيل", "Full-Stack AI", "دمج الذكاء الاصطناعي", "Azure AI"],
    },
    about: {
      eyebrow: "نبذة عني",
      title: "خبرة عميقة في المؤسسات، وتوجه حديث نحو الذكاء الاصطناعي.",
      copy: "أجمع بين خبرة طويلة في هندسة البرمجيات وانتقال عملي نحو أنظمة الذكاء الاصطناعي الجاهزة للإنتاج. الهدف ليس استبدال أساسي الهندسي، بل الاستفادة منه لبناء تطبيقات مؤسسية موثوقة مدعومة بالذكاء الاصطناعي.",
      cards: [
        { title: "أنظمة المؤسسات", copy: "قطاعات الحكومة، والبنوك، والرعاية الصحية، والطيران، وتخطيط موارد المؤسسات (ERP)، والتجارة الإلكترونية." },
        { title: "التكامل والهندسة المعمارية", copy: "واجهات REST البرمجية، والتكاملات الآمنة، وتصميم سير العمل، وقواعد البيانات، والتسليم الإنتاجي." },
        { title: "هندسة الذكاء الاصطناعي", copy: "أنظمة RAG، والوكلاء الذكيون، واستخدام الأدوات، والتقييم، والضوابط الآمنة، وسير العمل المعتمد على موافقة بشرية." },
      ],
    },
    aiFocus: {
      eyebrow: "التركيز الحالي على الذكاء الاصطناعي",
      title: "تقنيات أتعلمها وأبني بها حالياً.",
      copy: "يتم عرض هذه التقنيات بشكل متعمد كمجالات تركيز حالية، وليست كخبرة إنتاجية تمتد لعشر سنوات. ومع اكتمال المشاريع، تنتقل هذه التقنيات إلى قدرات مثبتة ودراسات حالة فعلية.",
      positioningTitle: "مبدأ التموضع",
      positioningCopy:
        "تبقى الخبرة المؤسسية المثبتة منفصلة عن التقنيات التي يتم تعلمها حالياً. هذا يحافظ على مصداقية الملف الشخصي، مع إظهار التوجه بوضوح نحو أدوار الذكاء الاصطناعي للمؤسسات والذكاء الاصطناعي الوكيل.",
    },
    projects: {
      eyebrow: "مشاريع مختارة",
      title: "من منصات المؤسسات إلى أنظمة سير عمل قائمة على الذكاء الاصطناعي.",
      viewLive: "عرض النسخة المباشرة",
      items: [
        {
          title: "مساعد ذكاء اصطناعي لإدارة المستندات وسير العمل",
          badge: "قيد التطوير حالياً",
          description:
            "مشروع ضمن الملف الشخصي يتطور من استخلاص البيانات المهيكلة من المستندات إلى أنظمة الاسترجاع، والوكلاء المستخدمين للأدوات، والموافقة البشرية، والتقييم، وأنماط النشر الإنتاجي.",
        },
        {
          title: "منصة رقمية لإدارة المستندات والتصديق",
          badge: "خبرة مؤسسية",
          description:
            "أنظمة سير عمل مؤسسية آمنة لمعالجة المستندات والتكاملات والإدارة التشغيلية وتقديم الخدمات على نطاق إنتاجي في القطاع الحكومي الإماراتي.",
        },
        {
          title: "منصة الخدمات المصرفية الأساسية",
          badge: "خبرة مؤسسية",
          description: "هندسة تطبيقات مصرفية باستخدام تقنيات الويب الحديثة، وواجهات برمجية خلفية، وأنظمة قواعد بيانات علائقية.",
        },
        {
          title: "المزيد من المشاريع قريباً",
          badge: "قيد الإعداد",
          description: "هذا العنصر هو مكان مؤقت — تواصل معي إذا كنت ترغب في الاطلاع على أعمال قيد التنفيذ، أو تابع هذه الصفحة مع إضافة دراسات حالة جديدة.",
        },
      ],
    },
    experience: {
      eyebrow: "الخبرة العملية",
      title: "أكثر من 10 سنوات في تسليم برمجيات المؤسسات.",
      items: [
        {
          role: "مهندس برمجيات أول",
          company: "Ducont Technologies · عميل حكومي إماراتي",
          period: "سبتمبر 2023 – حتى الآن",
          points: [
            "حلول إدارة المستندات المؤسسية وسير العمل الرقمي",
            "تكاملات الخدمات الحكومية والجهات الخارجية",
            "أكثر من 10 تطبيقات إنتاجية عبر مختلف القطاعات المؤسسية",
            "تحسين أداء التطبيقات بنسبة 30% من خلال تحسين البنية والكود",
            "التعاون التقني وتوجيه فرق تضم أكثر من 10 مطورين",
          ],
        },
        {
          role: "مهندس برمجيات",
          company: "Josh Software · بنغالور",
          period: "مايو 2022 – أغسطس 2023",
          points: ["حلول مصرفية باستخدام Angular وNET. وSQL Server"],
        },
        {
          role: "أدوار هندسية سابقة",
          company: "دبي · أبوظبي · العين · البحرين · الهند",
          period: "2013 – 2022",
          points: ["أنظمة مؤسسية للأجهزة المحمولة، والموارد البشرية، ونظم المعلومات الجغرافية، وتخطيط موارد المؤسسات، والطيران، والعقارات، والمحاسبة، والتجارة الإلكترونية"],
        },
      ],
    },
    foundationSection: {
      eyebrow: "الأساس الهندسي",
      title: "الحزمة التقنية وراء التحول نحو الذكاء الاصطناعي.",
      copy: "تُبنى طبقة الذكاء الاصطناعي فوق أساس هندسي إنتاجي يشمل التطوير الشامل، وواجهات البرمجة، وقواعد البيانات، والتكامل، والهندسة المعمارية، والتسليم.",
    },
    connect: {
      eyebrow: "لنتواصل",
      title: "أبحث عن أدوار هندسية أولى حيث تلتقي برمجيات المؤسسات بالذكاء الاصطناعي العملي.",
      copy: "منفتح على فرص في الذكاء الاصطناعي للمؤسسات، والذكاء الاصطناعي الوكيل، وFull-Stack AI، ودمج الذكاء الاصطناعي، وAzure AI، والذكاء الاصطناعي التطبيقي.",
      emailMe: "راسلني",
      linkedin: "LinkedIn",
    },
    footer: { copyright: "© 2026 Navod PM" },
  },
} as const;

export const focusTags = [
  "Generative AI", "RAG", "Agentic AI", "AI Agents", "LangGraph", "MCP",
  "Tool Calling", "Structured Outputs", "Embeddings", "Vector Search", "pgvector",
  "Reranking", "AI Evals", "Guardrails", "Human-in-the-Loop", "FastAPI",
  "Azure AI", "Redis", "Docker", "Kubernetes", "AI Observability",
];

export const foundationTags = [
  "C# / .NET", "ASP.NET Core", "Angular 11–17", "React", "TypeScript", "Node.js",
  "Oracle", "SQL Server", "REST APIs", "System Integration", "Solution Architecture",
  "CI/CD", "AWS", "Enterprise Workflows",
];

export const projectTech = [
  ["Python", "FastAPI", "RAG", "LangGraph", "pgvector", "Evals"],
  ["Angular", "ASP.NET Core", "Oracle", "REST APIs", "Enterprise Integration"],
  ["Angular", ".NET", "SQL Server"],
  [],
];

// Set each project's live subdomain here once it's deployed; leave null until then
// (the "View live" link only renders when this is non-null).
// TEMPORARY: first three use a placeholder URL for testing — swap in real subdomains later.
// 4th slot has no URL (it's a placeholder card, not a real project yet).
export const projectDemoUrls: (string | null)[] = ["https://navodpm.com", "https://navodpm.com", "https://navodpm.com", null];
