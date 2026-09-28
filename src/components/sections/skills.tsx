"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { skillCategories, skillLevels } from "@/lib/content";

const levels = [
  { key: "strong", label: "Strong", items: skillLevels.strong },
  { key: "proficient", label: "Proficient", items: skillLevels.proficient },
  { key: "working", label: "Working knowledge", items: skillLevels.working },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="page-section">
      <div className="page-container">
        <SectionHeading
          eyebrow="Skills"
          title="A credible engineering dashboard"
          description="No percentage bars. Strength is grouped by demonstrated practice."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {levels.map((level, index) => (
            <Reveal key={level.key} delay={index * 0.05}>
              <article className="h-full rounded-xl bg-white p-5 shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card dark:ring-gold/15">
                <h3 className="font-heading text-xl text-gold">{level.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {level.items.map((item) => (
                    <li key={item}>
                      <Badge variant="outline" className="border-navy/20 dark:border-gold/30">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-xl bg-white p-5 shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card dark:ring-gold/15">
          <h3 className="mb-4 font-heading text-xl">Skill categories</h3>
          <Tabs defaultValue={skillCategories[0].id}>
            <TabsList variant="line" className="flex h-auto w-full flex-wrap justify-start gap-1 overflow-x-auto bg-transparent p-0">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="min-h-11 px-3">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-4">
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-gold/40 bg-ivory px-3 py-1.5 text-sm dark:bg-navy-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
