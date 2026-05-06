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
      "bg-accent text-surface shadow-sm hover:bg-accent-dim",
    secondary:
      "bg-surface-elevated text-ink border border-[rgb(var(--ink-muted)/0.15)] hover:bg-[rgb(var(--ink-muted)/0.08)]",
    ghost: "text-ink-muted hover:bg-surface-elevated hover:text-ink",
    outline:
      "border border-[rgb(var(--ink-muted)/0.15)] bg-surface-elevated/50 text-ink hover:border-accent/40 hover:bg-surface-elevated",
  };

  return (
    <motion.button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
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
      "bg-accent text-surface shadow-sm hover:bg-accent-dim",
    secondary:
      "bg-surface-elevated text-ink border border-[rgb(var(--ink-muted)/0.15)] hover:bg-[rgb(var(--ink-muted)/0.08)]",
    ghost: "text-ink-muted hover:bg-surface-elevated hover:text-ink",
    outline:
      "border border-[rgb(var(--ink-muted)/0.15)] bg-surface-elevated/50 text-ink hover:border-accent/40 hover:bg-surface-elevated",
  };

  return (
    <MotionLink
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      {...(props as Record<string, unknown>)}
    />
  );
}
