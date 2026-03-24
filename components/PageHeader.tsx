type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-12 sm:mb-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg text-ink-muted text-balance">
          {description}
        </p>
      ) : null}
    </header>
  );
}
