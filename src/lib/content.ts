export const aboutParagraphs = [
  "Mazimpaka Danny is a Software Engineer based in Kigali, Rwanda, with hands-on experience building backend systems, REST APIs, database-driven applications, mobile applications, and infrastructure environments. He recently completed a Bachelor’s Degree in Software Engineering at the Adventist University of Central Africa (AUCA), Faculty of Information Technology (2022–2026).",
  "He currently works as a Software Developer Intern at VONSUNG LLC, contributing to mobile application development with Flutter and Dart, including work on Nurai Connect Mobile. His day-to-day practice includes Git/GitHub workflows, feature development, API integration, debugging, collaborative development, and code maintenance.",
  "Danny’s core strength is backend and full-stack development—especially Java, Spring Boot, REST APIs, and relational databases—supported by practical mobile development with Flutter. He also brings systems, networking, Linux, and server administration knowledge, with a growing focus on Cloud and DevOps. Security foundations from coursework and labs (cryptography, network security, JWT, and defensive tooling) inform how he designs and troubleshoots software.",
  "He approaches engineering as structured problem-solving: identify the issue, reproduce it, investigate causes, test hypotheses, fix with care, verify the result, and document what was learned. That mindset, combined with Linux, container, and networking experience, is how he aims to deliver software that is reliable, scalable, and secure.",
];

export const education = {
  institution: "Adventist University of Central Africa — AUCA",
  faculty: "Faculty of Information Technology",
  degree: "Bachelor’s Degree in Software Engineering",
  period: "2022–2026",
  status: "Graduate",
  coursework: [
    "Operating Systems",
    "Database Management",
    "Cryptography & Network Security",
    "IT Troubleshooting",
    "Data Structures & Algorithms",
    "Web Development",
    "Java Programming",
    "Python Programming",
    "Machine Learning",
    "Networking",
    "Software Engineering",
  ],
};

export const timeline = [
  {
    id: "started",
    year: "2022",
    title: "Started Software Engineering",
    detail:
      "Began undergraduate studies in Software Engineering at AUCA, building foundations in programming, databases, networking, and software design.",
  },
  {
    id: "training",
    year: "2025",
    title: "Linux, Kubernetes, Cloud, and Security training",
    detail:
      "Completed Linux Foundation introductory courses in Linux, Kubernetes, and cloud infrastructure, alongside security-focused academic work. Kubernetes study is foundational training, not advanced production expertise.",
  },
  {
    id: "graduate",
    year: "2026",
    title: "Completed university studies",
    detail:
      "Graduated with a Bachelor’s Degree in Software Engineering from AUCA, Faculty of Information Technology.",
  },
  {
    id: "vonsung",
    year: "August 2026–Present",
    title: "Software Developer Intern, VONSUNG LLC",
    detail:
      "Contributing to production-oriented mobile development, API integration, and collaborative Git workflows.",
    bullets: [
      "Mobile application development with Flutter and Dart",
      "Nurai Connect Mobile",
      "Git/GitHub workflows and branch management",
      "Feature development",
      "API integration",
      "Debugging and troubleshooting",
      "Collaborative development",
      "Code maintenance",
    ],
  },
] as const;

export const skillLevels = {
  strong: [
    "Java",
    "Spring Boot",
    "SQL",
    "Git/GitHub",
    "REST APIs",
    "Backend Development",
  ],
  proficient: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Docker",
    "Linux",
    "PostgreSQL",
    "MySQL",
  ],
  working: [
    "Flutter",
    "Dart",
    "Node.js",
    "Express.js",
    "C#",
    "ASP.NET Core",
    "Kubernetes",
    "Networking",
    "Security",
  ],
} as const;

export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "Dart", "C", "C#", "SQL", "PHP"],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "REST APIs",
      "JWT",
      "OOP",
      "Backend architecture",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["Flutter", "Dart", "Firebase", "Android Studio"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MariaDB", "SQL Server", "SQLite"],
  },
  {
    id: "devops",
    label: "DevOps",
    items: [
      "Docker",
      "Traefik",
      "Nginx",
      "Apache2",
      "Linux",
      "Maven",
      "Gradle",
      "WSL",
      "VirtualBox",
    ],
  },
  {
    id: "networking",
    label: "Networking",
    items: ["IP", "DHCP", "DNS", "UFW", "IPTables", "pfSense"],
  },
  {
    id: "security",
    label: "Security",
    items: ["Cryptography", "Suricata IDS", "ModSecurity", "DVWA", "JWT", "MFA concepts"],
  },
  {
    id: "tools",
    label: "Tools",
    items: ["VS Code", "IntelliJ IDEA", "Android Studio", "Postman", "GitHub"],
  },
] as const;

export const certifications = [
  {
    id: "lfs101",
    issuer: "Linux Foundation",
    name: "Introduction to Linux (LFS101)",
    summary:
      "Foundational Linux training covering the command line, filesystem, users and permissions, and essential system administration concepts used in server and development environments.",
    level: "Introductory",
    file: "",
  },
  {
    id: "lfs158",
    issuer: "Linux Foundation",
    name: "Introduction to Kubernetes (LFS158)",
    summary:
      "Foundational Kubernetes training covering containers, pods, deployments, and cluster concepts. This is introductory training, not a claim of advanced production Kubernetes expertise.",
    level: "Foundational training",
    file: "",
  },
  {
    id: "lfs151",
    issuer: "Linux Foundation",
    name: "Cloud Infrastructure (LFS151)",
    summary:
      "Introductory cloud infrastructure training covering core cloud building blocks, virtualization concepts, and how infrastructure services support application deployment.",
    level: "Introductory",
    file: "",
  },
] as const;

export const problemSolvingSteps = [
  "Identify",
  "Reproduce",
  "Investigate",
  "Test",
  "Fix",
  "Verify",
  "Document",
] as const;

export const gitWorkflowSteps = [
  { title: "Branch", detail: "Create a focused branch from the latest main line." },
  { title: "Commit", detail: "Make small, reviewable commits with clear messages." },
  { title: "Push", detail: "Publish the branch and keep it up to date with main." },
  { title: "Review", detail: "Open a pull request, discuss changes, and address feedback." },
  { title: "Merge", detail: "Integrate reviewed work and clean up the branch." },
] as const;

export const technicalSections = [
  {
    id: "api",
    title: "API Development & Integration",
    body: "Design and implement REST APIs with clear resources, status codes, and authentication. Integrate mobile and web clients through documented endpoints, JWT-aware authorization, and structured error handling.",
  },
  {
    id: "database",
    title: "Database Engineering",
    body: "Model relational schemas, write SQL, and persist application data with PostgreSQL, MySQL/MariaDB, SQL Server, and SQLite. Focus on integrity, query clarity, and practical reporting needs.",
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    body: "Package services with Docker, place them behind Traefik or Nginx, and operate Linux servers. Cloud and Kubernetes knowledge is grounded in Linux Foundation introductory training and hands-on lab work.",
  },
  {
    id: "ml",
    title: "Machine Learning",
    body: "Applied supervised learning to HR analytics and attrition prediction using Random Forest, XGBoost, and neural network models, then connected predictions to dashboards and reporting workflows.",
  },
  {
    id: "security",
    title: "Cybersecurity",
    body: "Apply security foundations from cryptography and network security coursework, JWT and MFA concepts, and defensive tooling such as Suricata, ModSecurity, UFW, and IPTables. Practice is oriented toward secure defaults, not offensive work.",
  },
  {
    id: "git",
    title: "Git & GitHub Workflow",
    body: "Use branches, pull requests, and code review as the default collaboration path. Keep history readable, isolate features, and maintain shared repositories with care.",
  },
  {
    id: "testing",
    title: "Testing and Debugging",
    body: "Reproduce issues before changing code. Use logs, breakpoints, Postman, and targeted test cases to isolate faults in APIs, databases, and client integrations, then verify the fix in context.",
  },
] as const;

export type ArchitectureNode = {
  id: string;
  label: string;
  explanation: string;
};

export type ArchitectureDiagram = {
  id: string;
  title: string;
  nodes: ArchitectureNode[];
};

export const architectureDiagrams: ArchitectureDiagram[] = [
  {
    id: "spring-stack",
    title: "Application stack",
    nodes: [
      {
        id: "client",
        label: "React / Flutter",
        explanation:
          "Web and mobile clients consume JSON over HTTPS. The UI stays thin: screens collect input, display results, and attach credentials after login.",
      },
      {
        id: "api",
        label: "REST API",
        explanation:
          "A versioned REST API exposes resources such as users, records, and reports. Requests are validated, authenticated, and mapped to service methods.",
      },
      {
        id: "spring",
        label: "Spring Boot",
        explanation:
          "Spring Boot hosts business logic, security filters, and data access. JWT-based authentication and role-based authorization protect application endpoints and restrict access according to user permissions.",
      },
      {
        id: "db",
        label: "PostgreSQL / SQL Server",
        explanation:
          "Relational databases persist entities, relationships, and audit-friendly records. SQL and migrations keep the schema explicit and reviewable.",
      },
    ],
  },
  {
    id: "traefik",
    title: "Container edge routing",
    nodes: [
      {
        id: "internet",
        label: "Internet",
        explanation:
          "Public traffic arrives over HTTP/HTTPS. TLS termination and routing rules decide which service should handle each host or path.",
      },
      {
        id: "traefik",
        label: "Traefik",
        explanation:
          "Traefik reverse-proxies containerized services, applying load balancing and routing without hard-coding a static Nginx map for every app.",
      },
      {
        id: "apps",
        label: "App 1 / App 2 / App 3",
        explanation:
          "Independent application containers can be deployed, scaled, or replaced behind the same edge. Each app remains isolated at the process and network layer.",
      },
      {
        id: "data",
        label: "Database",
        explanation:
          "Stateful data stays in a dedicated database service. Applications talk to it privately rather than exposing the database to the internet.",
      },
    ],
  },
  {
    id: "lamp",
    title: "Classic web runtime",
    nodes: [
      {
        id: "browser",
        label: "Browser",
        explanation:
          "The browser requests pages and APIs. Static assets and dynamic responses share the same public origin.",
      },
      {
        id: "nginx",
        label: "Nginx",
        explanation:
          "Nginx serves static files and forwards PHP requests to PHP-FPM. It is also the place for TLS, gzip, and basic request filtering.",
      },
      {
        id: "php",
        label: "PHP-FPM",
        explanation:
          "PHP-FPM executes application code in worker processes. This split keeps the web server focused on connections while the runtime handles business logic.",
      },
      {
        id: "app",
        label: "Application",
        explanation:
          "Application code implements routes, forms, authentication, and domain rules before reading or writing data.",
      },
      {
        id: "maria",
        label: "MariaDB / MySQL",
        explanation:
          "MariaDB or MySQL stores relational data for the site, including users, content, and operational records.",
      },
    ],
  },
];
