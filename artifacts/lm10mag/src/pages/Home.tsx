import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { LegacyTimeline } from "@/components/LegacyTimeline";
import { WorldCupChaos } from "@/components/WorldCupChaos";
import { MemeMuseum } from "@/components/MemeMuseum";
import { Tokenomics } from "@/components/Tokenomics";
import { HowToBuy } from "@/components/HowToBuy";
import { Roadmap } from "@/components/Roadmap";
import { PossulSection } from "@/components/PossulSection";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <LegacyTimeline />
        <WorldCupChaos />
        <MemeMuseum />
        <Tokenomics />
        <HowToBuy />
        <Roadmap />
        <PossulSection />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
