"use client";

import { motion } from "framer-motion";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeSpotlights } from "@/components/home/HomeSpotlights";
import { researchItems, workItems } from "@/lib/portfolio";

export default function HomePage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <HomeHero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <HomeSpotlights
          featuredResearch={researchItems[0]}
          featuredWork={workItems[0]}
        />
      </motion.div>
    </>
  );
}
