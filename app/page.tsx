"use client";

import { motion } from "framer-motion";
import { HomeHero } from "@/components/home/HomeHero";
import { TwoPathGateway } from "@/components/home/TwoPathGateway";
import { QuickSnapshot } from "@/components/home/QuickSnapshot";
import { TopResearch } from "@/components/home/TopResearch";
import { RecentWork } from "@/components/home/RecentWork";
import { SkillsDock } from "@/components/home/SkillsDock";
import { HomeSkills } from "@/components/home/HomeSkills";
import { HomeCertifications } from "@/components/home/HomeCertifications";
import { HomeResearchInterests } from "@/components/home/HomeResearchInterests";
import { HomeActivities } from "@/components/home/HomeActivities";
import { HomeCollaboration } from "@/components/home/HomeCollaboration";
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
      <HomeSkills />
      <HomeCertifications />
      <HomeResearchInterests />
      <HomeActivities />
      <HomeCollaboration />
      <CallToAction />
    </>
  );
}
