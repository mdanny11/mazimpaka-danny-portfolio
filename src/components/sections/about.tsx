import { PortraitFrame } from "@/components/brand/portrait-frame";
import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { aboutParagraphs } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Software Engineer with a backend-first craft"
          description="Building reliable systems from APIs and databases through to mobile clients and Linux environments."
        />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[240px_1fr]">
          <Reveal className="mx-auto w-full max-w-[240px]">
            <PortraitFrame sizes="240px" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 rounded-xl bg-white p-6 text-base leading-7 shadow-[var(--card-shadow)] ring-1 ring-navy/10 dark:bg-card dark:ring-gold/15">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
