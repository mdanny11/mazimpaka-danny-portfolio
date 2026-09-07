"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { type ProjectFilter, projectFilters, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter =
        filter === "All" || project.categories.includes(filter);
      const haystack = [
        project.title,
        project.summary,
        project.partner,
        project.role,
        ...project.stack,
        ...project.highlights,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return matchesFilter && haystack.includes(needle);
    });
  }, [filter, query]);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected engineering work"
          description="Filter by domain. Case study pages include architecture, challenges, and honest placeholders for unpublished links."
        />
        <div className="mt-8 flex flex-col gap-4">
          <label className="relative block max-w-md">
            <span className="sr-only">Search projects</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, stack, or keyword"
              className="h-10 pl-9"
            />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Project filters">
            {projectFilters.map((item) => (
              <Button
                key={item}
                type="button"
                size="sm"
                variant={filter === item ? "gold" : "outline"}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {visible.map((project) => (
            <Reveal key={project.slug}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-xl bg-white p-5 shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card dark:ring-gold/15",
                  project.featured && "md:col-span-2 md:grid md:grid-cols-2 md:gap-6"
                )}
              >
                <div>
                  {project.featured ? (
                    <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                      Featured project
                    </p>
                  ) : null}
                  <h3 className="mt-1 font-heading text-2xl">{project.title}</h3>
                  {project.partner ? (
                    <p className="mt-1 text-sm text-muted-foreground">
                      Partner: {project.partner}
                    </p>
                  ) : null}
                  {project.role ? (
                    <p className="mt-1 text-sm text-muted-foreground">Role: {project.role}</p>
                  ) : null}
                  <p className="mt-3 text-sm leading-6">{project.summary}</p>
                </div>
                <div className="mt-4 flex flex-1 flex-col">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li key={item}>
                        <Badge variant="outline">{item}</Badge>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <Button render={<Link href={`/projects/${project.slug}`} />} className="h-9 px-4">
                      Read case study
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="mt-8 text-center text-muted-foreground">
            No projects match that search. Try another keyword or filter.
          </p>
        ) : null}
      </div>
    </section>
  );
}
