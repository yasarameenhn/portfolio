"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionBackdrop from "@/components/ui/SectionBackdrop";
import { skills, skillsContent } from "@/lib/data";

const categoryOrder = [
  "Languages",
  "AI Frameworks",
  "Generative AI",
  "Frontend & Backend",
  "Data & Vector DBs",
  "Cloud & DevOps",
  "Hardware & IoT",
  "AI Safety",
];

export default function Skills() {
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      items: skills.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackdrop variant="skills" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          label={skillsContent.label}
          heading={skillsContent.heading}
          subtitle={skillsContent.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {grouped.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-cyan">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-text-primary transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                    >
                      {skill.name}
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
