import { Navbar } from "@/components/layout/Navbar";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { FlowOsSection } from "@/components/sections/FlowOsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ScoreSection } from "@/components/sections/ScoreSection";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      
      <div className="flex flex-col relative z-10">
        <Hero />
        <ProblemSection />
        <TimelineSection />
        <FlowOsSection />
        <ProductsSection />
        <ScoreSection />
        <FooterCTA />
      </div>
    </main>
  );
}
