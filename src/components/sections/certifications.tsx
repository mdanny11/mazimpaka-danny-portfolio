"use client";

import { useState } from "react";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "@/components/brand/chrome";
import { certifications } from "@/lib/content";

export function CertificationsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = certifications.find((item) => item.id === activeId);

  return (
    <section id="certifications" className="page-section">
      <div className="page-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Certificate wall"
          description="Linux Foundation introductory credentials. Kubernetes is foundational training, not advanced production expertise."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert) => (
            <Reveal key={cert.id}>
              <button
                type="button"
                onClick={() => setActiveId(cert.id)}
                className="flex h-full w-full flex-col rounded-xl bg-white p-5 text-left shadow-[var(--card-shadow)] ring-1 ring-navy/10 transition-transform hover:-translate-y-0.5 dark:bg-card dark:ring-gold/15"
              >
                <Award className="size-6 text-gold" />
                <p className="mt-4 text-xs tracking-[0.16em] text-gold uppercase">
                  {cert.issuer}
                </p>
                <h3 className="mt-2 font-heading text-xl">{cert.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{cert.level}</p>
                <span className="mt-4 text-sm font-medium text-gold">View details</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActiveId(null)}>
        <DialogContent className="max-h-[min(90dvh,40rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{active?.name}</DialogTitle>
            <DialogDescription>
              {active?.issuer} · {active?.level}
            </DialogDescription>
          </DialogHeader>
          <p className="leading-6">{active?.summary}</p>
          {active?.file ? (
            <Button render={<a href={active.file} target="_blank" rel="noreferrer" />}>
              Open certificate file
            </Button>
          ) : (
            <p className="text-sm text-muted-foreground">
              Certificate file placeholder: add a PDF path on this credential in{" "}
              <code>src/lib/content.ts</code> when the document is available.
            </p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
