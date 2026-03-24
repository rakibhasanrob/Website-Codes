import Link from "next/link";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <Section className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact
        </ButtonLink>
      </div>
      <Link href="/research" className="mt-8 text-sm text-ink-muted hover:text-accent">
        Browse research →
      </Link>
    </Section>
  );
}
