"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { education } from "@/lib/content";

export function EducationSection() {
  return (
    <section id="education" className="page-section">
      <div className="page-container max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic foundation" />
        <Reveal className="mt-10">
          <article className="rounded-xl bg-white p-5 shadow-[var(--card-shadow)] ring-1 ring-navy/10 sm:p-6 dark:bg-card dark:ring-gold/15">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-heading text-2xl">{education.institution}</h3>
                <p className="mt-1 text-muted-foreground">{education.faculty}</p>
              </div>
              <Badge variant="outline" className="border-gold text-gold">
                {education.status}
              </Badge>
            </div>
            <p className="mt-4 text-lg">{education.degree}</p>
            <p className="text-sm text-muted-foreground">{education.period}</p>
            <Accordion className="mt-6">
              <AccordionItem value="coursework">
                <AccordionTrigger>Selected coursework</AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <li
                        key={course}
                        className="rounded-md border border-navy/10 bg-ivory px-3 py-1.5 text-sm dark:border-gold/20 dark:bg-navy-secondary"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
