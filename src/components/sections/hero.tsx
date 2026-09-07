"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GitHubIcon } from "@/components/brand/social-icons";
import { toast } from "sonner";
import { PortraitFrame } from "@/components/brand/portrait-frame";
import { DiamondDivider } from "@/components/brand/chrome";
import { Button } from "@/components/ui/button";
import { githubProfileUrl, hasValue, siteConfig } from "@/lib/site";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const github = githubProfileUrl();

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % siteConfig.rotatingTitles.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  function onDownloadCv() {
    if (!hasValue(siteConfig.cvUrl)) {
      toast.message("CV file is not configured yet.", {
        description: "Add NEXT_PUBLIC_CV_URL or place a PDF and update the environment variable.",
      });
      return;
    }
    window.open(siteConfig.cvUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="home" className="relative overflow-hidden px-4 pt-10 pb-20 sm:px-6 lg:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,130,46,0.12),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(7,26,58,0.08),transparent_32%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:items-stretch">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold tracking-[0.24em] text-gold uppercase">
            {siteConfig.location}
          </p>
          <h1 className="mt-3 font-heading text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-lg text-navy/80 dark:text-ivory/80">{siteConfig.headline}</p>
          <div className="mt-4 h-8 overflow-hidden text-gold">
            <AnimatePresence mode="wait">
              <motion.p
                key={siteConfig.rotatingTitles[index]}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="font-heading text-xl"
              >
                {siteConfig.rotatingTitles[index]}
              </motion.p>
            </AnimatePresence>
          </div>
          <DiamondDivider className="mt-6 justify-start" />
          <p className="mt-6 max-w-2xl text-base leading-7 text-pretty">
            {siteConfig.introduction}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {siteConfig.recruiterSummary.map((item) => (
              <li
                key={item}
                className="rounded-full border border-navy/15 bg-white px-3 py-1 text-xs font-medium dark:border-gold/25 dark:bg-card"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button render={<Link href="/#projects" />} variant="navy" className="h-11 px-5">
              View My Projects
              <ArrowRight />
            </Button>
            <Button variant="gold" className="h-11 px-5" onClick={onDownloadCv}>
              <Download />
              Download CV
            </Button>
            {hasValue(github) ? (
              <Button
                variant="outline"
                className="h-11 px-5"
                render={<a href={github} target="_blank" rel="noreferrer" />}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </Button>
            ) : (
              <Button variant="outline" className="h-11 px-5" render={<Link href="/#github" />}>
                <GitHubIcon className="size-4" />
                GitHub
              </Button>
            )}
            <Button variant="outline" className="h-11 px-5" render={<Link href="/#contact" />}>
              <Mail />
              Contact Me
            </Button>
          </div>
        </div>
        <div className="order-1 h-[28rem] w-full lg:order-2 lg:h-auto lg:min-h-full">
          <PortraitFrame priority variant="hero" />
        </div>
      </div>
      <div className="relative mx-auto mt-10 max-w-6xl">
        <HeroTerminal />
      </div>
    </section>
  );
}

function HeroTerminal() {
  return (
    <aside className="mt-8 overflow-hidden rounded-lg border border-navy/20 bg-navy font-mono text-sm text-[#F8F5EE] shadow-[var(--card-shadow)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
        <span className="size-2.5 rounded-full bg-[#B9822E]" />
        <span className="size-2.5 rounded-full bg-[#D5AA55]" />
        <span className="size-2.5 rounded-full bg-white/30" />
        <span className="ml-2 text-xs tracking-wide text-white/60">danny@kigali:~</span>
      </div>
      <div className="space-y-3 px-4 py-4">
        <p>
          <span className="text-gold">$</span> whoami
        </p>
        <p className="pl-4">{siteConfig.name}</p>
        <p>
          <span className="text-gold">$</span> role
        </p>
        <p className="pl-4">{siteConfig.role}</p>
        <p>
          <span className="text-gold">$</span> currently
        </p>
        <p className="pl-4">{siteConfig.currentRole}</p>
        <p>
          <span className="text-gold">$</span> focus
        </p>
        <p className="pl-4">{siteConfig.focus}</p>
      </div>
    </aside>
  );
}
