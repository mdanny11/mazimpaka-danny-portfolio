export const projectFilters = [
  "All",
  "Backend",
  "Frontend",
  "Mobile",
  "AI/ML",
  "DevOps",
  "Security",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  slug: string;
  title: string;
  featured?: boolean;
  summary: string;
  partner?: string;
  role?: string;
  categories: Exclude<ProjectFilter, "All">[];
  stack: string[];
  highlights: string[];
  links: {
    github: string;
    live: string;
    docs: string;
  };
  caseStudy: {
    problem: string;
    objective: string;
    role: string;
    technologies: string[];
    architecture: string;
    challenges: string;
    solution: string;
    result: string;
    lessons: string;
  };
};

export const projects: Project[] = [
  {
    slug: "hr-analytics",
    title: "HR Analytics & Employee Attrition Prediction",
    featured: true,
    partner: "ISON Experiences / ISON BPO Rwanda Limited",
    summary:
      "An HR analytics platform that supports employee management, reporting, and attrition prediction with machine learning models.",
    categories: ["AI/ML", "Backend", "Frontend"],
    stack: ["Python", "Java", "JavaScript", "SQL Server", "Machine Learning"],
    highlights: [
      "Random Forest, XGBoost, and Neural Network models",
      "Employee management, analytics, dashboards, and reporting",
      "Authentication and role-based authorization",
      "Roles: HR Manager, HR Analyst, Department Head, Administrator",
    ],
    links: { github: "", live: "", docs: "" },
    caseStudy: {
      problem:
        "HR teams needed a clearer view of workforce data and a structured way to identify attrition risk without relying only on spreadsheets and disconnected reports.",
      objective:
        "Build an analytics-backed employee system that combines operational HR records with predictive models and role-aware dashboards.",
      role: "Software engineer responsible for backend services, data workflows, machine learning integration, and role-based application features.",
      technologies: [
        "Python",
        "Java",
        "JavaScript",
        "SQL Server",
        "Random Forest",
        "XGBoost",
        "Neural Network",
      ],
      architecture:
        "A database-backed application stores employee and organizational records in SQL Server. Analytical and prediction services consume that data, produce attrition scores, and feed dashboards. Access is gated by authentication and role-based authorization for HR Manager, HR Analyst, Department Head, and Administrator personas.",
      challenges:
        "Connecting operational HR data to predictive models required careful feature preparation, role separation, and reporting views that remained useful to non-technical stakeholders.",
      solution:
        "Implemented employee management and analytics flows, trained and compared Random Forest, XGBoost, and neural network approaches, and exposed results through authenticated dashboards and reports.",
      result:
        "Delivered a working HR analytics system for ISON Experiences / ISON BPO Rwanda Limited that unifies employee records, attrition prediction, and role-based reporting. Public repository, live demo, documentation, and screenshots are placeholders until links are added in configuration.",
      lessons:
        "Prediction is only useful when the surrounding application—data quality, authorization, and reporting—makes the output actionable for the people who own the process.",
    },
  },
  {
    slug: "sports-league",
    title: "Sports League Management System",
    role: "Backend Developer / System Designer",
    summary:
      "Backend system for managing teams, players, matches, and league operations through REST APIs.",
    categories: ["Backend"],
    stack: ["Java", "Spring Boot", "Maven", "SQL", "REST APIs"],
    highlights: [
      "Team, player, match, and league management",
      "REST API design",
      "Relational data modeling",
    ],
    links: { github: "", live: "", docs: "" },
    caseStudy: {
      problem:
        "League operations needed a structured backend for teams, players, matches, and standings instead of ad hoc records.",
      objective:
        "Design and implement a Spring Boot API that models league domain data and exposes reliable REST endpoints.",
      role: "Backend Developer / System Designer",
      technologies: ["Java", "Spring Boot", "Maven", "SQL", "REST APIs"],
      architecture:
        "A Spring Boot service exposes REST resources for teams, players, matches, and league administration. SQL persistence stores domain entities and relationships. Maven manages the build.",
      challenges:
        "The domain has many relationships—rosters, fixtures, and results—so the data model and API boundaries had to stay consistent.",
      solution:
        "Designed entities and endpoints around league operations, implemented CRUD-style management flows, and kept business rules on the server.",
      result:
        "A backend suitable for league administration clients. Source, demo, and screenshots can be attached in project configuration when available.",
      lessons:
        "Clear resource modeling up front reduces messy joins and one-off endpoints later.",
    },
  },
  {
    slug: "kigali-drive",
    title: "KigaliDrive",
    summary:
      "ASP.NET Core API with authentication, authorization, and database persistence for a driving-related service.",
    categories: ["Backend", "Security"],
    stack: [
      "ASP.NET Core 8",
      "C# 12",
      "Entity Framework Core",
      "JWT",
      "SQLite/SQL Server",
    ],
    highlights: [
      "Authentication and authorization",
      "API-first design",
      "EF Core persistence",
    ],
    links: { github: "", live: "", docs: "" },
    caseStudy: {
      problem:
        "The project needed a secure .NET API with identity, authorization, and durable persistence.",
      objective:
        "Implement an ASP.NET Core 8 service using JWT, EF Core, and SQL storage.",
      role: "Backend developer implementing APIs, identity, and data access.",
      technologies: [
        "ASP.NET Core 8",
        "C# 12",
        "Entity Framework Core",
        "JWT",
        "SQLite/SQL Server",
      ],
      architecture:
        "ASP.NET Core hosts REST endpoints. JWT authenticates callers. EF Core maps entities to SQLite or SQL Server. Authorization policies restrict protected routes.",
      challenges:
        "Keeping authentication, authorization, and persistence aligned across environments (SQLite for local work, SQL Server where required).",
      solution:
        "Used ASP.NET Core identity patterns with JWT, EF Core for persistence, and endpoint-level authorization.",
      result:
        "An API foundation for KigaliDrive with authenticated access and database-backed records. External links remain configuration placeholders.",
      lessons:
        "JWT only helps when claims, policies, and data access checks tell the same story.",
    },
  },
  {
    slug: "nurai-connect",
    title: "Nurai Connect Mobile",
    summary:
      "Flutter mobile application with authentication, dashboard, maps, and API integration, developed during the VONSUNG internship.",
    categories: ["Mobile", "Frontend"],
    stack: ["Flutter", "Dart", "Firebase", "REST APIs", "Git/GitHub"],
    highlights: [
      "Login and signup",
      "Dashboard",
      "Maps and location/proximity",
      "API integration",
    ],
    links: { github: "", live: "", docs: "" },
    caseStudy: {
      problem:
        "Users needed a mobile client that could authenticate, present a dashboard, and work with location-aware features connected to backend APIs.",
      objective:
        "Deliver Flutter screens and integrations for login, signup, dashboard, maps, and proximity-related workflows.",
      role: "Software Developer Intern contributing features, API integration, debugging, and GitHub-based collaboration at VONSUNG LLC.",
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Git/GitHub"],
      architecture:
        "A Flutter client talks to REST APIs and Firebase services. Authentication gates the dashboard. Maps and location features consume device and API data. Git branches and reviews coordinate team changes.",
      challenges:
        "Mobile work required coordinating UI state, API contracts, location permissions, and shared Git history with the team.",
      solution:
        "Implemented authentication and dashboard flows, integrated APIs, and added map/location behavior while following branch-based collaboration.",
      result:
        "Nurai Connect Mobile progressed as a team-built Flutter application. Repository and store links can be added when they are cleared for public sharing.",
      lessons:
        "Internship delivery depends as much on Git discipline and API contracts as on widget implementation.",
    },
  },
  {
    slug: "flutter-simple-app",
    title: "Flutter Simple App",
    summary:
      "A Flutter application covering Firebase authentication, dashboard navigation, and a calculator feature.",
    categories: ["Mobile"],
    stack: ["Flutter", "Firebase Authentication"],
    highlights: ["Login", "Signup", "Dashboard", "Calculator"],
    links: { github: "", live: "", docs: "" },
    caseStudy: {
      problem:
        "Needed a compact Flutter project to practice authentication, navigation, and a self-contained interactive feature.",
      objective:
        "Ship login, signup, a dashboard, and a calculator on top of Firebase Authentication.",
      role: "Sole developer for the application screens and Firebase auth integration.",
      technologies: ["Flutter", "Dart", "Firebase Authentication"],
      architecture:
        "Flutter screens route between auth and authenticated dashboard content. Firebase Authentication handles identity. The calculator is a local feature inside the signed-in experience.",
      challenges:
        "Keeping auth state and navigation consistent while adding a distinct utility screen.",
      solution:
        "Wired Firebase Authentication to login/signup, then exposed dashboard and calculator destinations after sign-in.",
      result:
        "A complete small Flutter app demonstrating auth and in-app navigation. Public links are optional configuration.",
      lessons:
        "Auth state should drive navigation explicitly; mixing guest and signed-in UI without a gate creates edge cases.",
    },
  },
  {
    slug: "docker-traefik",
    title: "Docker & Traefik Project",
    summary:
      "Containerized web services placed behind Traefik for routing and load balancing.",
    categories: ["DevOps"],
    stack: ["Docker", "Traefik"],
    highlights: ["Containers", "Load balancing", "Web services"],
    links: { github: "", live: "", docs: "" },
    caseStudy: {
      problem:
        "Multiple web services needed a repeatable way to run in containers and receive traffic without manual host-by-host proxy edits.",
      objective:
        "Run applications in Docker and route them through Traefik with load balancing.",
      role: "Implemented the compose/stack layout, Traefik routing, and service isolation.",
      technologies: ["Docker", "Traefik"],
      architecture:
        "Internet traffic reaches Traefik, which routes to App 1 / App 2 / App 3 containers. A database stays on the private network.",
      challenges:
        "Service discovery, routing labels, and keeping stateful data off the public edge.",
      solution:
        "Containerized the web services and used Traefik as the reverse proxy and load balancer.",
      result:
        "A practical lab for multi-app container routing. Compose files and diagrams can be linked from configuration when published.",
      lessons:
        "Edge routing belongs in the proxy; application containers should not each invent their own public exposure story.",
    },
  },
  {
    slug: "linux-server-admin",
    title: "Linux & Server Administration",
    summary:
      "Hands-on Linux server work across Ubuntu, Kali, and CentOS, including web stacks, DNS/DHCP, and host firewalls.",
    categories: ["DevOps", "Security"],
    stack: [
      "Ubuntu",
      "Kali Linux",
      "CentOS",
      "Apache2",
      "Nginx",
      "PHP-FPM",
      "MariaDB",
      "DNS",
      "DHCP",
      "UFW",
      "IPTables",
    ],
    highlights: [
      "Multi-distribution server practice",
      "Web runtime stack",
      "Network services and host firewalls",
    ],
    links: { github: "", live: "", docs: "" },
    caseStudy: {
      problem:
        "Server and networking coursework required operating real Linux environments, not only application code.",
      objective:
        "Configure Linux servers, web runtimes, name/address services, and host-level firewalls.",
      role: "Configured and troubleshot services across Ubuntu, Kali Linux, and CentOS labs.",
      technologies: [
        "Ubuntu",
        "Kali Linux",
        "CentOS",
        "Apache2",
        "Nginx",
        "PHP-FPM",
        "MariaDB",
        "DNS",
        "DHCP",
        "UFW",
        "IPTables",
      ],
      architecture:
        "Browser traffic hits Nginx or Apache2, PHP-FPM runs application code, and MariaDB/MySQL stores data. DNS and DHCP support the lab network. UFW and IPTables restrict inbound access.",
      challenges:
        "Service dependencies (web, PHP, database, DNS) fail in combination; firewall rules can silently drop the wrong traffic.",
      solution:
        "Built and verified stacks step by step, using logs and connectivity checks before opening or tightening ports.",
      result:
        "Working knowledge of Linux administration and network service troubleshooting that now supports backend and DevOps work.",
      lessons:
        "Reproduce the failure on the host before changing application code; many ‘app bugs’ are DNS, permissions, or firewall rules.",
    },
  },
  {
    slug: "web-portfolio-projects",
    title: "Web / Portfolio Projects",
    summary:
      "Earlier web applications built with HTML, CSS, PHP, JavaScript, and MySQL/MariaDB behind Nginx and PHP-FPM.",
    categories: ["Frontend", "Backend"],
    stack: [
      "HTML",
      "CSS",
      "PHP",
      "JavaScript",
      "MySQL/MariaDB",
      "Nginx",
      "PHP-FPM",
    ],
    highlights: ["Server-rendered web apps", "LAMP-style runtime", "Foundational full-stack work"],
    links: { github: "", live: "", docs: "" },
    caseStudy: {
      problem:
        "Needed practical web applications to learn request/response flow, persistence, and deployment on a Linux web stack.",
      objective:
        "Build and host PHP/JavaScript sites with MySQL/MariaDB behind Nginx and PHP-FPM.",
      role: "Designed pages, server-side logic, and database interactions.",
      technologies: [
        "HTML",
        "CSS",
        "PHP",
        "JavaScript",
        "MySQL/MariaDB",
        "Nginx",
        "PHP-FPM",
      ],
      architecture:
        "The browser talks to Nginx. Dynamic routes go to PHP-FPM and application code, which reads and writes MariaDB/MySQL.",
      challenges:
        "Separating presentation, server logic, and SQL while deploying on a real web server rather than only a local preview.",
      solution:
        "Implemented site features in PHP/JavaScript with relational storage and a standard Nginx/PHP-FPM deployment path.",
      result:
        "A foundation in full-stack web delivery that later informed Spring Boot, React, and Flutter work. Specific live URLs can be added in configuration.",
      lessons:
        "Hosting and PHP-FPM/Nginx configuration are part of the product, not an afterthought.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
