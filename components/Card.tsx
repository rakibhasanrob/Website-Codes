import type { ComponentPropsWithoutRef } from "react";

export function Card({
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-surface-elevated/60 p-6 shadow-xl shadow-black/20 backdrop-blur-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
