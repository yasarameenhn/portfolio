import { type ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  label,
  heading,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}