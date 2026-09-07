import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/lib/projects";
import { hasValue } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

const sections = [
  ["Problem", "problem"],
  ["Objective", "objective"],
  ["My Role", "role"],
  ["Architecture", "architecture"],
  ["Challenges", "challenges"],
  ["Solution", "solution"],
  ["Result", "result"],
  ["Lessons Learned", "lessons"],
] as const;

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const links = [
    { href: project.links.github, label: "GitHub" },
    { href: project.links.live, label: "Live Demo" },
    { href: project.links.docs, label: "Documentation" },
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs tracking-[0.2em] text-gold uppercase">Case study</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold">{project.title}</h1>
      {project.partner ? (
        <p className="mt-2 text-muted-foreground">Partner: {project.partner}</p>
      ) : null}
      <p className="mt-6 text-lg leading-8">{project.summary}</p>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">Technologies</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.caseStudy.technologies.map((item) => (
            <li
              key={item}
              className="rounded-md border border-navy/10 bg-white px-3 py-1.5 text-sm dark:border-gold/20 dark:bg-card"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {sections.map(([title, key]) => (
        <section key={key} className="mt-8">
          <h2 className="font-heading text-2xl">{title}</h2>
          <p className="mt-3 leading-7">{project.caseStudy[key]}</p>
        </section>
      ))}

      <section className="mt-10">
        <h2 className="font-heading text-2xl">Links</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              {hasValue(link.href) ? (
                <a href={link.href} className="text-gold hover:underline" target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ) : (
                <span className="text-muted-foreground">
                  {link.label}: add a URL in <code>src/lib/projects.ts</code>
                </span>
              )}
            </li>
          ))}
          <li className="text-muted-foreground">
            Screenshots: add image paths in project configuration when they are available.
            Do not use generated stand-ins.
          </li>
        </ul>
      </section>

      <div className="mt-12">
        <Button render={<Link href="/#projects" />} variant="outline" className="h-10 px-4">
          Back to projects
        </Button>
      </div>
    </article>
  );
}
