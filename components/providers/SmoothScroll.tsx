"use client";

import { useEffect, type ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let scrollTimer: number | undefined;

    function onScroll() {
      document.documentElement.classList.add("is-scrolling");
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        document.documentElement.classList.remove("is-scrolling");
      }, 140);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(scrollTimer);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.classList.remove("is-scrolling");
    };
  }, []);

  return <>{children}</>;
}
