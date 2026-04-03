"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ui/Button";
import {
  categories,
  videoSections,
  dashboardProjects,
  gallerySections,
  type CategoryKey,
} from "@/lib/projects";

/* ─── Lightbox ──────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated border border-white/10 text-ink-muted hover:text-ink transition-colors"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain shadow-2xl" />
      </motion.div>
    </motion.div>
  );
}

/* ─── Action Buttons ────────────────────────────────────── */
function ActionButtons({
  hasMore,
  showAll,
  onToggleShow,
  totalCount,
}: {
  hasMore?: boolean;
  showAll?: boolean;
  onToggleShow?: () => void;
  totalCount?: number;
}) {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      {hasMore && onToggleShow && (
        <button
          onClick={onToggleShow}
          className="inline-flex items-center gap-2 rounded-xl bg-surface-elevated/60 px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-surface-elevated hover:-translate-y-0.5 border border-white/10 hover:border-accent/40 shadow-lg shadow-black/10 hover:shadow-accent/10 hover:text-accent"
        >
          {showAll ? "Collapse" : `View All (${totalCount})`}
        </button>
      )}
      <ButtonLink href="/contact" variant="outline" className="gap-2.5 px-6 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 hover:bg-surface-elevated/20">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
        Discuss a Similar Project
      </ButtonLink>
    </div>
  );
}

/* ─── Section Title ─────────────────────────────────────── */
function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-ink-muted">{subtitle}</p>}
    </div>
  );
}

/* ─── Video Card ────────────────────────────────────────── */
function VideoCard({ title, video, description }: { title: string; video: string; description?: string }) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-surface-elevated/60 shadow-xl shadow-black/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-accent/20 hover:shadow-accent/5 hover:-translate-y-1">
      <div className="relative aspect-video bg-black">
        <video
          src={video}
          className="h-full w-full object-cover"
          controls
          preload="metadata"
          playsInline
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
        {description && <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>}
      </div>
    </div>
  );
}

/* ─── Dashboard Card ────────────────────────────────────── */
function DashboardCard({
  project,
  onImageClick,
}: {
  project: (typeof dashboardProjects)[0];
  onImageClick: (src: string, alt: string) => void;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-surface-elevated/60 shadow-xl shadow-black/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-accent/20 hover:shadow-accent/5">
      {/* Image carousel or single image */}
      <div
        className="relative aspect-[16/10] bg-surface cursor-pointer overflow-hidden"
        onClick={() => onImageClick(project.images[0], project.title)}
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {project.images.length > 1 && (
          <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
            +{project.images.length - 1} more
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.dashboardUrl && (
            <Link
              href={project.dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live Dashboard
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-accent/30 hover:text-ink"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4a8 8 0 0 0-2.53 15.59c.4.08.55-.17.55-.38v-1.33c-2.23.48-2.7-.95-2.7-.95-.36-.92-.9-1.17-.9-1.17-.73-.5.06-.49.06-.49.82.06 1.24.84 1.24.84.7 1.2 1.83.85 2.28.65.07-.52.28-.86.5-1.06-1.78-.2-3.66-.9-3.66-3.96 0-.88.32-1.59.83-2.15-.08-.2-.36-1.02.08-2.13 0 0 .68-.22 2.2.82A7.43 7.43 0 0 1 12 7.8c.68 0 1.36.1 2 .28 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.93.08 2.13.52.56.83 1.27.83 2.15 0 3.07-1.88 3.76-3.67 3.96.29.24.54.73.54 1.48v2.2c0 .21.15.47.56.38A8 8 0 0 0 12 4Z" />
              </svg>
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard Grid ────────────────────────────────────── */
function DashboardGrid({
  projects,
  onImageClick,
}: {
  projects: typeof dashboardProjects;
  onImageClick: (src: string, alt: string) => void;
}) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 6);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map((p) => (
          <DashboardCard key={p.title} project={p} onImageClick={onImageClick} />
        ))}
      </div>
      <ActionButtons
        hasMore={projects.length > 6}
        showAll={showAll}
        onToggleShow={() => setShowAll(!showAll)}
        totalCount={projects.length}
      />
    </>
  );
}

/* ─── Gallery Grid ──────────────────────────────────────── */
function GalleryGrid({
  images,
  folder,
  category,
  onImageClick,
}: {
  images: string[];
  folder: string;
  category: string;
  onImageClick: (src: string, alt: string) => void;
}) {
  const [showAll, setShowAll] = useState(false);
  const defaultCount = (category === "business-visuals" || category === "research-visuals") ? 8 : 6;
  const displayedImages = showAll ? images : images.slice(0, defaultCount);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {displayedImages.map((img) => {
          const src = `${folder}/${img}`;
          const alt = img.replace(/\.(png|jpg|jpeg)$/i, "").replace(/[-_]/g, " ");
          return (
            <div
              key={img}
              className="group mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-white/[0.06] bg-surface-elevated/40 shadow-md transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
              onClick={() => onImageClick(src, alt)}
            >
              <div className="relative">
                <Image
                  src={src}
                  alt={alt}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ActionButtons
        hasMore={images.length > defaultCount}
        showAll={showAll}
        onToggleShow={() => setShowAll(!showAll)}
        totalCount={images.length}
      />
    </>
  );
}

/* ─── Main Component ────────────────────────────────────── */

function ProjectsContentInner() {
  const searchParams = useSearchParams();
  const initCategory = (searchParams.get("category") as CategoryKey) || "all";
  const [active, setActive] = useState<CategoryKey>(initCategory);

  useEffect(() => {
    const cat = searchParams.get("category") as CategoryKey;
    if (cat) setActive(cat);
  }, [searchParams]);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  const isVisible = (cat: CategoryKey) => active === "all" || active === cat;

  return (
    <>
      {/* ═══ FILTER BAR ═══ */}
      <Section className="mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat.key
                  ? "bg-accent text-surface shadow-lg shadow-accent/20"
                  : "border border-white/10 bg-surface-elevated/50 text-ink-muted hover:border-accent/30 hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </Section>

      {/* ═══ VIDEO SECTIONS (Data Animation & Map Animation) ═══ */}
      <AnimatePresence mode="popLayout">
        {videoSections.map(
          (section) =>
            isVisible(section.category) && (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Section className="mt-16 sm:mt-20">
                  <SectionTitle title={section.title} />

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <VideoCard 
                      title={`${section.title} Overview`} 
                      video={section.promoVideo} 
                      description={`Watch an overview of my ${section.title.toLowerCase()} work`} 
                    />
                    {section.projects.map((p) => (
                      <VideoCard key={p.title} {...p} />
                    ))}
                  </div>

                  <ActionButtons />
                </Section>
              </motion.div>
            )
        )}

        {/* ═══ DASHBOARDS ═══ */}
        {isVisible("dashboards") && (
          <motion.div
            key="dashboards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Section className="mt-16 sm:mt-20">
              <SectionTitle
                title="Interactive Dashboards"
                subtitle="Power BI and web dashboards built for real-world business intelligence."
              />
              <DashboardGrid projects={dashboardProjects} onImageClick={openLightbox} />
            </Section>
          </motion.div>
        )}

        {/* ═══ GALLERY SECTIONS ═══ */}
        {gallerySections.map(
          (section) =>
            isVisible(section.category) && (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Section className="mt-16 sm:mt-20">
                  <SectionTitle title={section.title} subtitle={section.subtitle} />
                  <GalleryGrid images={section.images} folder={section.folder} category={section.category} onImageClick={openLightbox} />
                </Section>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* ═══ BOTTOM CTA ═══ */}
      <Section className="mt-20 mb-20 sm:mt-28 sm:mb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-surface-elevated via-surface-elevated/80 to-[rgb(var(--accent)/0.15)] px-6 py-16 text-center shadow-2xl backdrop-blur-md sm:px-12 sm:py-20"
        >
          <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[rgb(var(--accent)/0.25)] blur-3xl pointer-events-none" aria-hidden />
          <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[rgb(var(--accent)/0.15)] blur-3xl pointer-events-none" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Like what you see?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
              Explore my full skill set, certifications, and professional background.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/about#education" variant="primary" className="px-8 py-3.5 text-base">
                View My Skills &amp; Certifications
              </ButtonLink>
              <ButtonLink href="/collaboration" variant="outline" className="px-8 py-3.5 text-base">
                Collaboration
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ═══ LIGHTBOX ═══ */}
      <AnimatePresence>
        {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </>
  );
}

export function ProjectsContent() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ProjectsContentInner />
    </Suspense>
  );
}
