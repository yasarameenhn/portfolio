"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import SectionBackdrop from "@/components/ui/SectionBackdrop";
import { contactContent, siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackdrop variant="contact" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="glass-panel rounded-3xl p-10 text-center sm:p-16">
            <SectionHeading
              label={contactContent.label}
              heading={contactContent.heading}
              subtitle={contactContent.subtitle}
              align="center"
            />

            <div className="relative mx-auto mt-10 grid max-w-2xl gap-3 text-left">
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass-chip rounded-lg px-4 py-3 text-sm text-text-primary transition-colors hover:text-accent-cyan"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="glass-chip rounded-lg px-4 py-3 text-sm text-text-primary transition-colors hover:text-accent-cyan"
              >
                {siteConfig.phone}
              </a>
              <p className="glass-chip rounded-lg px-4 py-3 text-sm text-text-primary">
                {siteConfig.location}
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={`mailto:${siteConfig.email}`} variant="primary">
                Email Me
              </Button>
              <Button href={siteConfig.github} variant="secondary" external>
                GitHub
              </Button>
              <Button href={siteConfig.linkedin} variant="secondary" external>
                LinkedIn
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
