import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
        <img 
          src="/images/hero.png" 
          alt="Messi facing the World Cup trophy in a neon stadium" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Glowing orbs/effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] z-0 pointer-events-none" />

      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary tracking-widest backdrop-blur-sm"
        >
          ONE LAST MAGIC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-primary/80 drop-shadow-[0_0_25px_rgba(255,191,0,0.5)]"
        >
          $LM10MAG
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl leading-tight"
        >
          Messi's final World Cup, immortalized on Solana.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
        >
          $LM10MAG is a meme coin celebrating Messi's entire career with his last World Cup as the ultimate stage. Developed by POSSUL as a transparent meme coin issuer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
        >
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 h-14 shadow-[0_0_30px_rgba(255,191,0,0.4)] hover:shadow-[0_0_40px_rgba(255,191,0,0.6)] transition-all">
            <a href="#">Buy $LM10MAG on Pump.fun</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white/20 text-foreground hover:bg-white/10 hover:text-foreground font-bold text-lg px-8 h-14 backdrop-blur-sm">
            <a href="#community">Join the Community</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-2xl text-xs text-muted-foreground/60 border-t border-border/30 pt-6 mt-4"
        >
          Always double-check the official contract address before buying. This is a high-risk meme coin — only use what you can afford to lose.
        </motion.div>
      </div>
    </section>
  );
}
