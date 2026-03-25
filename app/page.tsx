"use client";

import { motion } from "framer-motion";
import { HomeHero } from "@/components/home/HomeHero";
import { TwoPathGateway } from "@/components/home/TwoPathGateway";
import { QuickSnapshot } from "@/components/home/QuickSnapshot";
import { TopResearch } from "@/components/home/TopResearch";
import { RecentWork } from "@/components/home/RecentWork";
import { SkillsDock } from "@/components/home/SkillsDock";
import { CallToAction } from "@/components/home/CallToAction";

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
      <TwoPathGateway />
      <QuickSnapshot />
      <TopResearch />
      <RecentWork />
      <SkillsDock />
      <CallToAction />
    </>
  );
}
