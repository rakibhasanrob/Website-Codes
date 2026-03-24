import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "ghost" | "outline";
};

export function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const variants = {
    primary:
      "bg-accent text-surface shadow-lg shadow-accent/20 hover:bg-accent-dim hover:shadow-accent/30",
    ghost: "text-ink-muted hover:bg-surface-elevated hover:text-ink",
    outline:
      "border border-white/10 bg-surface-elevated/50 text-ink hover:border-accent/40 hover:bg-surface-elevated",
  };
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "ghost" | "outline";
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const variants = {
    primary:
      "bg-accent text-surface shadow-lg shadow-accent/20 hover:bg-accent-dim hover:shadow-accent/30",
    ghost: "text-ink-muted hover:bg-surface-elevated hover:text-ink",
    outline:
      "border border-white/10 bg-surface-elevated/50 text-ink hover:border-accent/40 hover:bg-surface-elevated",
  };
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
