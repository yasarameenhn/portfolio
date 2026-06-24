"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionBackdrop from "@/components/ui/SectionBackdrop";
import { aboutContent } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <SectionBackdrop variant="about" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          label={aboutContent.label}
          heading={aboutContent.heading}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-7">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-text-secondary">
                {aboutContent.bio}
              </p>

              <div>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-cyan">
                  Certifications
                </h3>
                <ul className="space-y-3">
                  {aboutContent.certifications.map((certification) => (
                    <li
                      key={certification}
                      className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                      {certification}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5" delay={0.15}>
            <div className="glass rounded-2xl p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-cyan">
                Focus Areas
              </h3>
              <ul className="space-y-3">
                {aboutContent.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 text-text-primary"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-cyan/10 font-mono text-xs text-accent-cyan">
                      +
                    </span>
                    <span className="text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
