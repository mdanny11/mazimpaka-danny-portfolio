import Link from "next/link";
import { BrandLogo } from "@/components/brand/logo";
import { DiamondDivider } from "@/components/brand/chrome";
import { githubProfileUrl, hasValue, navItems, siteConfig } from "@/lib/site";

export function Footer() {
  const github = githubProfileUrl();

  return (
    <footer className="border-t border-navy/10 bg-white dark:border-gold/15 dark:bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6">
        <BrandLogo height={80} />
        <DiamondDivider />
        <p className="font-heading text-xl text-navy dark:text-ivory">
          {siteConfig.name}
        </p>
        <p className="text-sm text-muted-foreground">
          Software Engineer · {siteConfig.location}
        </p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {hasValue(siteConfig.contact.email) ? (
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold">
              {siteConfig.contact.email}
            </a>
          ) : null}
          {hasValue(github) ? (
            <a href={github} className="hover:text-gold" rel="noreferrer" target="_blank">
              GitHub
            </a>
          ) : null}
          {hasValue(siteConfig.contact.linkedin) ? (
            <a
              href={siteConfig.contact.linkedin}
              className="hover:text-gold"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
