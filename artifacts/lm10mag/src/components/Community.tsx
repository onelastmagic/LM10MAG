import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";

export function Community() {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 drop-shadow-[0_0_20px_rgba(255,191,0,0.3)]">
            Join the $LM10MAG Ultras
          </h2>
          
          <p className="text-xl text-foreground/80 mb-10 font-medium">
            This isn't just a community; it's a stadium full of Ultras. Raids, memes, football obsession, and pure degen energy. Join if you want early info on airdrops, news, and future POSSUL launches.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="h-16 px-8 text-lg bg-white text-black hover:bg-gray-200 font-bold">
              <a
                href="https://x.com/LM10MAG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaXTwitter className="w-6 h-6" />
                X — @LM10MAG
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-16 px-8 text-lg border-white/20 hover:bg-white/10 font-bold">
              <a
                href="https://x.com/POSSUL_SOL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaXTwitter className="w-6 h-6" />
                X — @POSSUL_SOL
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
