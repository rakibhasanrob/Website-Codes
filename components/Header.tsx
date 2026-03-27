"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import { effectButtons, type EffectMode } from "@/components/BackgroundEffects";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/work", label: "Project" },
  { href: "/collaboration", label: "Collaboration" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLinks({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {nav.map(({ href, label }) => {
        const active =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition sm:py-1.5 ${
                active
                  ? "bg-accent/15 text-accent"
                  : "text-ink-muted hover:bg-[rgb(var(--ink)/0.06)] hover:text-ink"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [effectDropdownOpen, setEffectDropdownOpen] = useState(false);
  const [currentEffect, setCurrentEffect] = useState<EffectMode>("galaxy");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const next =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  }

  function handleEffectSelect(mode: EffectMode) {
    setCurrentEffect(mode);
    window.localStorage.setItem("hero-effect", mode);
    window.dispatchEvent(new CustomEvent("effect-changed", { detail: mode }));
    setEffectDropdownOpen(false);
  }

  useEffect(() => {
    const saved = window.localStorage.getItem("hero-effect") as EffectMode;
    if (saved && effectButtons.some((item) => item.mode === saved)) {
      setCurrentEffect(saved);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--ink-muted)/0.2)] bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink"
        >
          <Image src="/favicon.png" alt="Rakib Hasan logo" width={24} height={24} className="h-6 w-6 rounded-sm" />
          {site.name}
          <span className="ml-1.5 text-ink-muted font-sans text-sm font-normal">
            · {site.title}
          </span>
        </Link>
        <nav className="hidden md:block" aria-label="Main">
          <NavLinks className="flex items-center gap-1" />
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="group inline-flex h-10 items-center gap-2 rounded-full border border-[rgb(var(--ink-muted)/0.25)] bg-surface-elevated/70 px-2 text-sm font-medium text-ink transition hover:border-accent/40"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="relative inline-flex h-6 w-11 items-center rounded-full bg-[rgb(var(--ink-muted)/0.35)] transition-colors group-hover:bg-[rgb(var(--accent)/0.35)]">
              <span
                className={`absolute top-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-surface text-ink shadow transition-transform ${
                  theme === "dark" ? "translate-x-0.5" : "translate-x-5"
                }`}
              >
                {theme === "dark" ? (
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.41-1.41M7.05 7.05 5.64 5.64m12.72 0-1.41 1.41M7.05 16.95l-1.41 1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </span>
            <span className="hidden pr-1 sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          {/* Background Effects Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setEffectDropdownOpen(!effectDropdownOpen)}
              className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-[rgb(var(--ink-muted)/0.25)] bg-surface-elevated/70 px-3 text-sm font-medium text-ink transition hover:border-accent/40"
              aria-label="Change Background Effect"
              title="Change Background Effect"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                {effectButtons.find((e) => e.mode === currentEffect)?.icon || effectButtons[2].icon}
              </svg>
              <span className="hidden pr-1.5 sm:inline">
                {effectButtons.find((e) => e.mode === currentEffect)?.label || "Galaxy"}
              </span>
              <svg className={`h-3.5 w-3.5 text-ink-muted transition-transform duration-200 ${effectDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <AnimatePresence>
              {effectDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setEffectDropdownOpen(false)} 
                    aria-label="Close background effects dropdown"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 top-[120%] z-50 w-44 overflow-hidden rounded-xl border border-[rgb(var(--ink-muted)/0.2)] bg-surface-elevated/95 p-1.5 shadow-2xl backdrop-blur-xl"
                  >
                    {effectButtons.map((item) => {
                      const active = item.mode === currentEffect;
                      return (
                        <button
                          key={item.mode}
                          onClick={() => handleEffectSelect(item.mode)}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                            active 
                              ? "bg-accent/15 text-accent font-semibold" 
                              : "text-ink-muted hover:bg-[rgb(var(--ink)/0.06)] hover:text-ink"
                          }`}
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" fill="none">
                            {item.icon}
                          </svg>
                          {item.label}
                        </button>
                      );
                    })}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgb(var(--ink-muted)/0.25)] bg-surface-elevated/60 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              {open ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[rgb(var(--ink-muted)/0.2)] bg-surface/95 backdrop-blur-md md:hidden"
          >
            <NavLinks
              onNavigate={() => setOpen(false)}
              className="flex flex-col gap-1 p-4"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
