"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  /* Load Pageclip script once */
  useEffect(() => {
    if (document.querySelector('script[src*="pageclip"]')) return;
    const s = document.createElement("script");
    s.src = "https://s.pageclip.co/v1/pageclip.js";
    s.charset = "utf-8";
    s.async = true;
    document.body.appendChild(s);

    /* Pageclip CSS */
    if (!document.querySelector('link[href*="pageclip"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://s.pageclip.co/v1/pageclip.css";
      link.media = "screen";
      document.head.appendChild(link);
    }
  }, []);

  /* Listen for Pageclip's custom "done" event */
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleDone = () => {
      setStatus("success");
      form.reset();
    };

    form.addEventListener("pageclip-form:success", handleDone);
    return () => form.removeEventListener("pageclip-form:success", handleDone);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    /* Don't prevent default — let Pageclip handle submission */
    setStatus("submitting");
  }

  const inputClasses =
    "mt-2 w-full rounded-xl border border-white/10 bg-surface-elevated/80 px-4 py-3 text-ink placeholder:text-ink-muted/50 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all duration-200";

  const labelClasses = "block text-sm font-medium text-ink";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            {/* Checkmark circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 ring-2 ring-emerald-400/40"
            >
              <svg
                className="h-10 w-10 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </motion.div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Message Sent!
            </h3>
            <p className="mt-2 max-w-xs text-sm text-ink-muted">
              Thank you! Your message has been sent. I&apos;ll get back to you as soon as
              possible.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-medium text-accent hover:text-accent-dim transition-colors"
            >
              Send another message →
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <form
              ref={formRef}
              action="https://send.pageclip.co/bvVY7Azc3l2uhRzaNCJr0ENeqxAhsIM9/contact_form"
              method="POST"
              className="pageclip-form space-y-5"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              {/* Name & Email row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <label htmlFor="contact-name" className={labelClasses}>
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClasses}
                    placeholder="Your full name"
                    disabled={status === "submitting"}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="contact-email" className={labelClasses}>
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClasses}
                    placeholder="you@example.com"
                    disabled={status === "submitting"}
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <label htmlFor="contact-subject" className={labelClasses}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  autoComplete="off"
                  className={inputClasses}
                  placeholder="What is this about?"
                  disabled={status === "submitting"}
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="contact-message" className={labelClasses}>
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className={`${inputClasses} resize-y`}
                  placeholder="Tell me about your project, idea, or opportunity…"
                  disabled={status === "submitting"}
                />
              </motion.div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button
                  type="submit"
                  className="pageclip-form__submit group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-accent px-7 py-3 text-sm font-semibold text-surface shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-dim hover:shadow-accent/30 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={status === "submitting"}
                >
                  {/* Animated background shine */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative flex items-center gap-2.5">
                    {status === "submitting" ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                          />
                        </svg>
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </motion.div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
