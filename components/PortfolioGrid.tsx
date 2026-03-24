import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/lib/portfolio";
import { Card } from "./Card";

type PortfolioGridProps = {
  items: PortfolioItem[];
  basePath: "/research" | "/work";
};

export function PortfolioGrid({ items, basePath }: PortfolioGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
      {items.map((item) => (
        <li key={item.slug}>
          <Link href={`${basePath}/${item.slug}`} className="group block h-full">
            <Card className="flex h-full flex-col transition group-hover:border-accent/25 group-hover:bg-surface-elevated/80">
              <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-accent/20 to-surface-elevated ring-1 ring-white/5">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : null}
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                {item.year ? (
                  <span className="rounded-md bg-white/5 px-2 py-0.5">{item.year}</span>
                ) : null}
                {item.role ? (
                  <span className="rounded-md bg-white/5 px-2 py-0.5">{item.role}</span>
                ) : null}
              </div>
              <h2 className="mt-3 font-display text-xl font-semibold text-ink group-hover:text-accent">
                {item.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                {item.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-surface/80 px-2.5 py-0.5 text-xs text-ink-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-4 text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100">
                View details →
              </span>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
