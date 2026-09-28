"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-ivory/90 pt-[env(safe-area-inset-top)] backdrop-blur-md dark:border-gold/15 dark:bg-[#06142C]/90">
      <div className="page-container flex h-16 items-center justify-between gap-3 px-4 sm:h-20 sm:gap-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 max-w-[calc(100%-5.75rem)] items-center sm:max-w-none">
          <BrandLogo height={56} className="max-h-12 w-auto sm:max-h-14" priority />
        </div>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 items-center gap-1 xl:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-navy/80 transition-colors hover:text-gold dark:text-ivory/80 dark:hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-11 xl:hidden"
                  aria-label={open ? "Close menu" : "Open menu"}
                />
              }
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </SheetTrigger>
            <SheetContent
              side="right"
              className="max-h-dvh w-[min(100%,20rem)] max-w-[100vw] overflow-y-auto overscroll-contain bg-ivory pb-[env(safe-area-inset-bottom)] dark:bg-card"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Site navigation</SheetTitle>
                <BrandLogo height={56} href={null} />
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="min-h-11 rounded-md px-3 py-3 text-base hover:bg-muted hover:text-gold"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
