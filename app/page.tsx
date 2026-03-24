import { HomeHero } from "@/components/home/HomeHero";
import { HomeSpotlights } from "@/components/home/HomeSpotlights";
import { researchItems, workItems } from "@/lib/portfolio";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeSpotlights
        featuredResearch={researchItems[0]}
        featuredWork={workItems[0]}
      />
    </>
  );
}
