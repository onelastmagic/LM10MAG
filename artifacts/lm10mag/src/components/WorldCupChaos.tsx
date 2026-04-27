import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

export function WorldCupChaos() {
  return (
    <section id="chaos" className="py-24 relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-card/40 backdrop-blur-xl border border-accent/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(255,0,255,0.1)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              THE FUTURE
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-[0_0_15px_rgba(255,0,255,0.3)]">
              World Cup Chaos — <br className="hidden md:block"/>The Next Chapter
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                <strong className="text-foreground">$LM10MAG is the pilot project.</strong> If the community shows strong support, POSSUL will launch <strong>World Cup Chaos</strong>, a massively scaled narrative project built around the absurd, hilarious, and viral moments that will inevitably happen during the 2026 World Cup.
              </p>
              <p>
                Early and active supporters of $LM10MAG (holders, raiders, meme creators) will be considered for future airdrops and exclusive access when World Cup Chaos goes live.
              </p>
            </div>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/80 text-white font-bold px-8 shadow-[0_0_20px_rgba(255,0,255,0.4)]">
              <a href="#" className="flex items-center gap-2">
                <Twitter className="w-5 h-5 fill-current" />
                Follow for Alpha
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
