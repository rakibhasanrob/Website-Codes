import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — send a message, connect on social media, or collaborate on Fiverr.`,
};

export default function ContactPage() {
  return (
    <Section>
      <PageHeader
        title="Get In Touch"
        description="Have a project in mind, a question, or just want to say hello? I'd love to hear from you."
      />

      <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
        {/* ── Left: Contact Form (wider) ── */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-white/[0.08] bg-surface-elevated/60 p-6 shadow-xl shadow-black/20 backdrop-blur-md sm:p-8">
            <div className="mb-6">
              <h2 className="font-display text-xl font-semibold text-ink flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </span>
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>

        {/* ── Right: Contact Info ── */}
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
      </div>
    </Section>
  );
}
