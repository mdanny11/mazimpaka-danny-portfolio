"use client";

import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { timeline } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const [active, setActive] = useState(timeline[timeline.length - 1].id);

  return (
    <section id="experience" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="A vertical path from study to practice"
        />
        <Reveal className="relative mt-12 pl-6">
          <div aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-gold/70" />
          <ol className="space-y-6">
            {timeline.map((item) => {
              const selected = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActive(item.id)}
                    className="flex w-full items-start gap-4 text-left"
                    aria-expanded={selected}
                  >
                    <span
                      className={cn(
                        "mt-1.5 size-3.5 shrink-0 rounded-full border-2 border-gold bg-ivory dark:bg-background",
                        selected && "bg-gold"
                      )}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="text-xs font-semibold tracking-wide text-gold uppercase">
                        {item.year}
                      </span>
                      <span className="mt-1 block font-heading text-xl">{item.title}</span>
                    </span>
                  </button>
                  {selected ? (
                    <div className="mt-3 ml-8 rounded-lg bg-white p-4 text-sm leading-6 shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card dark:ring-gold/15">
                      <p>{item.detail}</p>
                      {"bullets" in item && item.bullets ? (
                        <ul className="mt-3 list-disc space-y-1 pl-5">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
