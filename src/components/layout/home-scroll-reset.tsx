"use client";

import { useLayoutEffect } from "react";

export function HomeScrollReset() {
  useLayoutEffect(() => {
    if (window.location.hash) return;

    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previous;
  }, []);

  return null;
}
