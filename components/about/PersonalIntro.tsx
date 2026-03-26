"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PersonalIntro() {
  return (
    <section id="who-i-am" className="mb-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Who I Am
        </h2>
      </motion.div>

      {/* Content Grid */}
      <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:items-start">
        {/* Photo Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[340px] lg:mx-0"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-accent/10 transition-shadow duration-300 hover:shadow-accent/25 hover:border-accent/20">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
              {/* Accent glow behind image */}
              <div className="absolute -inset-4 z-0 rounded-3xl bg-accent/10 blur-2xl" />
              <Image
                src="/my_pic1.jpeg"
                alt="Rakib Hasan"
                width={340}
                height={425}
                className="relative z-[1] aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                priority
              />
            </div>
            {/* Name tag below photo */}
            <div className="mt-4 text-center lg:text-left">
              <p className="font-display text-lg font-semibold text-ink">
                Rakib Hasan
              </p>
              <p className="text-sm text-ink-muted">
                Geography & Data Enthusiast
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/[0.08] bg-surface-elevated/60 p-6 sm:p-8 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-accent/20 hover:shadow-accent/10"
        >
          <div className="space-y-5 text-[0.95rem] leading-relaxed text-ink-muted">
            <p>
              I am an undergraduate student of Geography and Environment with a
              growing interest in understanding real-world problems through data
              and spatial analysis. My journey started with a simple curiosity
              about how data can explain patterns, support decisions, and reveal
              insights that are not immediately visible.
            </p>
            <p>
              I began working with data using tools like{" "}
              <span className="text-ink font-medium">Excel</span> and{" "}
              <span className="text-ink font-medium">Power BI</span>, where I
              focused on building clear and interactive dashboards. Over time, I
              became more interested in going beyond numbers—understanding the{" "}
              <em className="text-accent/90 not-italic font-medium">where</em>{" "}
              and{" "}
              <em className="text-accent/90 not-italic font-medium">why</em>{" "}
              behind the data.
            </p>
            <p>
              This led me to explore geospatial analysis. I started working with
              tools such as{" "}
              <span className="text-ink font-medium">ArcGIS Pro</span>,{" "}
              <span className="text-ink font-medium">QGIS</span>, and{" "}
              <span className="text-ink font-medium">Google Earth Engine</span>{" "}
              to analyze spatial patterns and environmental data. Along the way,
              I also learned{" "}
              <span className="text-ink font-medium">Python</span> to support
              data analysis and expand my ability to work with more complex
              problems.
            </p>
            <p>
              What drives me is the ability to connect data, geography, and
              research to better understand real-world challenges and contribute
              to more informed decision-making.
            </p>
          </div>

          {/* Decorative bottom accent bar */}
          <div className="mt-6 flex gap-1.5">
            <span className="h-1 w-12 rounded-full bg-accent/60" />
            <span className="h-1 w-6 rounded-full bg-accent/30" />
            <span className="h-1 w-3 rounded-full bg-accent/15" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
