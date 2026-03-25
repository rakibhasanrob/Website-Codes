"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

export function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const variants = {
    primary:
      "bg-accent text-surface shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:bg-accent-dim hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]",
    secondary:
      "bg-surface-elevated text-ink shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:bg-[rgb(var(--ink-muted)/0.15)] border border-white/10",
    ghost: "text-ink-muted hover:bg-surface-elevated hover:text-ink",
    outline:
      "border border-white/10 bg-surface-elevated/50 text-ink hover:border-accent/40 hover:bg-surface-elevated",
  };

  return (
    <motion.button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...props}
    />
  );
}

const MotionLinkWrapper = React.forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<typeof Link>>((props, ref) => (
  <Link ref={ref} {...props} />
));
MotionLinkWrapper.displayName = "MotionLinkWrapper";

// Some framer-motion versions use motion.create
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionLink = (motion as any).create ? (motion as any).create(MotionLinkWrapper) : motion(MotionLinkWrapper);

type ActionProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ActionProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const variants = {
    primary:
      "bg-accent text-surface shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:bg-accent-dim hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]",
    secondary:
      "bg-surface-elevated text-ink shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:bg-[rgb(var(--ink-muted)/0.15)] border border-white/10",
    ghost: "text-ink-muted hover:bg-surface-elevated hover:text-ink",
    outline:
      "border border-white/10 bg-surface-elevated/50 text-ink hover:border-accent/40 hover:bg-surface-elevated",
  };

  return (
    <MotionLink
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...(props as Record<string, unknown>)}
    />
  );
}
