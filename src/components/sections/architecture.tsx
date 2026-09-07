"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { architectureDiagrams } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ArchitectureSection() {
  const [selected, setSelected] = useState("spring");

  const active = architectureDiagrams
    .flatMap((diagram) => diagram.nodes)
    .find((node) => node.id === selected);

  return (
    <section id="architecture" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Architecture playground"
          title="Click a component to inspect the design"
          description="Navy-and-gold diagrams for stacks Danny actually uses. Explanations stay specific and recruiter-readable."
        />
        <div className="mt-10 space-y-8">
          {architectureDiagrams.map((diagram) => (
            <Reveal key={diagram.id}>
              <article className="rounded-xl bg-white p-5 shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card dark:ring-gold/15">
                <h3 className="font-heading text-xl">{diagram.title}</h3>
                <ol className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:flex-wrap">
                  {diagram.nodes.map((node, index) => (
                    <li key={node.id} className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelected(node.id)}
                        className={cn(
                          "min-w-[9rem] rounded-md border px-3 py-3 text-left text-sm font-medium transition-colors",
                          selected === node.id
                            ? "border-gold bg-navy text-ivory dark:bg-gold dark:text-navy"
                            : "border-navy/20 bg-ivory hover:border-gold dark:bg-navy-secondary"
                        )}
                      >
                        {node.label}
                      </button>
                      {index < diagram.nodes.length - 1 ? (
                        <ArrowRight className="hidden size-4 text-gold lg:block" />
                      ) : null}
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
        </div>
        {active ? (
          <aside className="mt-6 rounded-xl border border-gold/50 bg-navy p-5 text-[#F8F5EE]">
            <p className="text-xs tracking-[0.18em] text-gold uppercase">Selected component</p>
            <h3 className="mt-2 font-heading text-2xl">{active.label}</h3>
            <p className="mt-3 leading-7">{active.explanation}</p>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
