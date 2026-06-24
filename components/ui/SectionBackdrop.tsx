"use client";

import { useEffect, useRef, useState } from "react";

type SectionBackdropVariant =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "contact";

type SectionBackdropProps = {
  variant: SectionBackdropVariant;
};

export default function SectionBackdrop({ variant }: SectionBackdropProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setActive(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "220px 0px", threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`section-backdrop section-backdrop-${variant} ${
        active ? "is-active" : ""
      }`}
      aria-hidden
    >
      {variant === "about" && (
        <div className="about-hologram">
          <span />
          <span />
          <span />
          <i />
        </div>
      )}

      {variant === "skills" && (
        <div className="skills-cube-field">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
      )}

      {variant === "experience" && (
        <div className="experience-depth-rails">
          <span />
          <span />
          <span />
          <i />
          <i />
        </div>
      )}

      {variant === "projects" && (
        <div className="projects-card-stack">
          <span />
          <span />
          <span />
          <i />
        </div>
      )}

      {variant === "contact" && (
        <div className="contact-signal-gate">
          <span />
          <span />
          <span />
          <i />
          <i />
        </div>
      )}
    </div>
  );
}
