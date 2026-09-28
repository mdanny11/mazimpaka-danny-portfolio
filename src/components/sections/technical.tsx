import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { gitWorkflowSteps, problemSolvingSteps, technicalSections } from "@/lib/content";

export function TechnicalSection() {
  return (
    <section id="technical" className="page-section">
      <div className="page-container">
        <SectionHeading
          eyebrow="Technical practice"
          title="How the work actually gets done"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {technicalSections.map((section, index) => (
            <Reveal key={section.id} delay={index * 0.04}>
              <article className="h-full rounded-xl bg-white p-5 shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card dark:ring-gold/15">
                <h3 className="font-heading text-xl">{section.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{section.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h3 className="mb-4 text-center font-heading text-2xl">Problem-solving methodology</h3>
          <ol className="flex flex-wrap justify-center gap-2">
            {problemSolvingSteps.map((step, index) => (
              <li key={step} className="flex max-w-full items-center gap-2">
                <span className="rounded-full border border-gold bg-navy px-3 py-1.5 text-sm text-ivory">
                  {index + 1}. {step}
                </span>
                {index < problemSolvingSteps.length - 1 ? (
                  <span aria-hidden="true" className="hidden text-gold sm:inline">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-12 rounded-xl bg-white p-5 shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card dark:ring-gold/15">
          <h3 className="font-heading text-2xl">Git & GitHub workflow</h3>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {gitWorkflowSteps.map((step, index) => (
              <li key={step.title} className="rounded-md border border-navy/10 p-3 dark:border-gold/20">
                <p className="text-xs text-gold">0{index + 1}</p>
                <p className="mt-1 font-medium">{step.title}</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
