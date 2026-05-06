import type { ComponentPropsWithoutRef } from "react";

export function Card({
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`rounded-2xl border border-[rgb(var(--ink-muted)/0.12)] bg-surface-elevated/60 p-6 backdrop-blur-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
