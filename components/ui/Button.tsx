import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "icon";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-medium shadow-neon-glow hover:shadow-[0_0_32px_rgba(34,211,238,0.5)] hover:scale-[1.03]",
  secondary:
    "glass text-accent-cyan border border-accent-cyan/30 hover:border-accent-cyan/60 hover:bg-accent-cyan/5 hover:text-white",
  icon: "text-text-secondary hover:text-accent-cyan hover:bg-white/5",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base";

const sizeStyles: Record<ButtonVariant, string> = {
  primary: "px-7 py-3 text-sm",
  secondary: "px-7 py-3 text-sm",
  icon: "p-2.5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  ariaLabel,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}