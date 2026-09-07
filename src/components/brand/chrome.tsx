"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-3xl font-semibold text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </div>
  );
}

export function DiamondDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3", className)}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gold/80" />
      <span className="size-1.5 rotate-45 bg-gold" />
      <span className="h-px w-16 bg-gold/80" />
    </div>
  );
}
