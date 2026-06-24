"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionBackdrop from "@/components/ui/SectionBackdrop";
import { experience, experienceContent } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackdrop variant="experience" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          label={experienceContent.label}
          heading={experienceContent.heading}
          subtitle={experienceContent.subtitle}
        />

        <div className="mt-12 max-w-3xl">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 0.1}>
              <div className="relative mb-12 border-l border-white/10 pb-8 pl-8 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent-cyan ring-4 ring-bg-base" />

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-text-secondary">
                    {job.period}
                  </span>
                </div>

                <p className="mt-1 font-mono text-sm text-accent-cyan">
                  {job.company}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-text-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
