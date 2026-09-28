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
    <section id="home" className="relative overflow-x-clip px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16 lg:px-8 lg:pt-16 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,130,46,0.12),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(7,26,58,0.08),transparent_32%)]"
      />
      <div className="relative mx-auto grid max-w-6xl min-w-0 items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:items-stretch">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase sm:tracking-[0.24em]">
            {siteConfig.location}
          </p>
          <h1 className="mt-3 font-heading text-3xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-base text-navy/80 sm:text-lg dark:text-ivory/80">{siteConfig.headline}</p>
          <div className="mt-4 h-8 overflow-hidden text-gold">
            <AnimatePresence mode="wait">
              <motion.p
                key={siteConfig.rotatingTitles[index]}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="font-heading text-lg sm:text-xl"
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button render={<Link href="/#projects" />} variant="navy" className="h-11 min-h-11 w-full px-5 sm:w-auto">
              View My Projects
              <ArrowRight />
            </Button>
            <Button variant="gold" className="h-11 min-h-11 w-full px-5 sm:w-auto" onClick={onDownloadCv}>
              <Download />
              Download CV
            </Button>
            {hasValue(github) ? (
              <Button
                variant="outline"
                className="h-11 min-h-11 w-full px-5 sm:w-auto"
                render={<a href={github} target="_blank" rel="noreferrer" />}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </Button>
            ) : (
              <Button variant="outline" className="h-11 min-h-11 w-full px-5 sm:w-auto" render={<Link href="/#github" />}>
                <GitHubIcon className="size-4" />
                GitHub
              </Button>
            )}
            <Button variant="outline" className="h-11 min-h-11 w-full px-5 sm:w-auto" render={<Link href="/#contact" />}>
              <Mail />
              Contact Me
            </Button>
          </div>
        </div>
        <div className="order-1 h-[min(22rem,75vw)] w-full min-w-0 sm:h-[26rem] md:h-[28rem] lg:order-2 lg:h-auto lg:min-h-full">
          <PortraitFrame priority variant="hero" />
        </div>
      </div>
      <div className="relative mx-auto mt-8 w-full min-w-0 max-w-6xl sm:mt-10">
        <HeroTerminal />
      </div>
    </section>
  );
}

function HeroTerminal() {
  return (
    <aside className="mt-8 overflow-x-auto rounded-lg border border-navy/20 bg-navy font-mono text-xs text-[#F8F5EE] shadow-[var(--card-shadow)] sm:text-sm">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
        <span className="size-2.5 rounded-full bg-[#B9822E]" />
        <span className="size-2.5 rounded-full bg-[#D5AA55]" />
        <span className="size-2.5 rounded-full bg-white/30" />
        <span className="ml-2 min-w-0 truncate text-xs tracking-wide text-white/60">danny@kigali:~</span>
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
