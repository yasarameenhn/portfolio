"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionBackdrop from "@/components/ui/SectionBackdrop";
import { projects, projectsContent } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackdrop variant="projects" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          label={projectsContent.label}
          heading={projectsContent.heading}
          subtitle={projectsContent.subtitle}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-panel flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/30"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-accent-cyan">
                        0{i + 1}
                  </span>
                  <svg
                    className="h-4 w-4 text-text-secondary transition-colors group-hover:text-accent-cyan"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-accent-cyan">
                  {project.subtitle}
                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-chip rounded-md px-2.5 py-1 font-mono text-[10px] text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
