export const siteConfig = {
  name: "Mazimpaka Danny",
  shortName: "Danny",
  logoName: "Nkusi M. Danny",
  role: "Software Engineer",
  headline: "Software Engineer | Backend Developer | Full-Stack Developer",
  location: "Kigali, Rwanda",
  currentRole: "Software Developer Intern @ VONSUNG",
  focus: "Backend • APIs • Databases • Cloud • DevOps",
  title: "Mazimpaka Danny — Software Engineer in Rwanda",
  description:
    "Mazimpaka Danny is a Software Engineer in Rwanda specializing in backend development, Java, Spring Boot, REST APIs, and full-stack software. Backend Developer Rwanda, Java Developer Rwanda, Spring Boot Developer, Flutter Developer, Full Stack Developer, and Software Developer Kigali.",
  keywords: [
    "Software Engineer Rwanda",
    "Backend Developer Rwanda",
    "Java Developer Rwanda",
    "Spring Boot Developer",
    "Flutter Developer",
    "Full Stack Developer",
    "Software Developer Kigali",
    "Mazimpaka Danny",
  ],
  introduction:
    "I’m Mazimpaka Danny, a Software Engineer passionate about building reliable, scalable, and secure software solutions. I specialize in backend development, REST APIs, databases, and modern application development using Java, Spring Boot, Python, JavaScript, TypeScript, React, and Flutter.",
  recruiterSummary: [
    "Java",
    "Spring Boot",
    "Python",
    "React",
    "Flutter",
    "SQL",
    "Docker",
    "Linux",
  ],
  rotatingTitles: [
    "Backend Developer",
    "Java & Spring Boot Developer",
    "Full-Stack Developer",
    "API & Database Developer",
    "Software Engineer",
    "DevOps & Linux Enthusiast",
  ],
  assets: {
    logo: "/images/danny-logo.png",
    portrait: "/images/My_cutout_mazimpaka_danny.png",
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "mdanny892@gmail.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "+250 786 280 873",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ||
      "https://www.linkedin.com/in/mazimpaka-danny-ab71b3369/",
    githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim() || "mdanny11",
  },
  cvUrl: process.env.NEXT_PUBLIC_CV_URL ?? "",
} as const;

export const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#github", label: "GitHub" },
  { href: "/#contact", label: "Contact" },
] as const;

export function githubProfileUrl(username = siteConfig.contact.githubUsername) {
  return username ? `https://github.com/${username}` : "";
}

export function hasValue(value: string | undefined | null) {
  return Boolean(value && value.trim().length > 0);
}
