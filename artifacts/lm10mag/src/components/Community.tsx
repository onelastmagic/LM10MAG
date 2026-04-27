import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

export function Community() {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,191,0,0.08),_transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.25em]">
            COMMUNITY
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-[0_0_20px_rgba(255,191,0,0.25)]">
            Join the $LM10MAG Ultras
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Follow the official accounts for airdrops, news, and future POSSUL launches.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://x.com/LM10MAG"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-3 text-sm font-bold text-foreground hover:bg-white/10 hover:border-white/25 transition-colors"
            >
              <FaXTwitter className="w-4 h-4" />
              @LM10MAG
            </a>
            <a
              href="https://x.com/POSSUL_SOL"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-3 text-sm font-bold text-foreground hover:bg-white/10 hover:border-white/25 transition-colors"
            >
              <FaXTwitter className="w-4 h-4" />
              @POSSUL_SOL
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
