"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export function ContactActions() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") || "Hello"));
    const body = encodeURIComponent(String(data.get("message") || ""));
    setStatus("Opening your email app…");
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-5"
      aria-label="Compose email"
    >
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          autoComplete="off"
          className="mt-2 w-full rounded-xl border border-white/10 bg-surface-elevated/80 px-4 py-3 text-ink placeholder:text-ink-muted/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
          placeholder="Project inquiry, talk, collaboration…"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-surface-elevated/80 px-4 py-3 text-ink placeholder:text-ink-muted/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
          placeholder="Tell me a bit about what you have in mind."
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">Send via email</Button>
        {status ? <p className="text-sm text-ink-muted">{status}</p> : null}
      </div>
      <p className="text-xs text-ink-muted">
        Uses your default mail client (mailto). For a hosted form, wire this to Formspree or a
        server action later.
      </p>
    </form>
  );
}
