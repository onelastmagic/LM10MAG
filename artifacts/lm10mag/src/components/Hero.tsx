import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const HERO_IMAGE =
  "https://res.cloudinary.com/dnsfaoqzk/image/upload/f_auto,q_auto/v1777262321/MS10MAG_omf2nz.png";

const CONTRACT_VALUE = "TEST123456789ABC";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_VALUE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Messi facing the World Cup trophy in a neon stadium"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/55 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background z-10" />
      </div>

      {/* Subtle ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[140px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[170px] z-0 pointer-events-none" />

      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-5 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs md:text-sm font-semibold text-primary tracking-[0.25em] backdrop-blur-sm"
        >
          ONE LAST MAGIC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-5 text-transparent bg-clip-text bg-gradient-to-b from-white to-primary/80 drop-shadow-[0_0_30px_rgba(255,191,0,0.45)]"
        >
          $LM10MAG
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl leading-tight"
        >
          Messi's final World Cup, immortalized on Solana.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
        >
          A Solana meme coin celebrating Messi's legendary career and his final World Cup story —
          issued by{" "}
          <span className="text-foreground font-semibold">POSSUL</span>, a transparent Solana-native
          studio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
        >
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 h-14 shadow-[0_0_30px_rgba(255,191,0,0.4)] hover:shadow-[0_0_40px_rgba(255,191,0,0.6)] transition-all"
          >
            <a href="https://pump.fun/coin/TEST123456789ABC" target="_blank" rel="noopener noreferrer">
  Buy $LM10MAG on Pump.fun
</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/20 text-foreground hover:bg-white/10 hover:text-foreground font-bold text-lg px-8 h-14 backdrop-blur-sm"
          >
            <a href="#community">Join the Community</a>
          </Button>
        </motion.div>

        {/* Official Contract box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
          className="w-full max-w-xl"
        >
          <div className="rounded-2xl border border-white/10 bg-black/55 backdrop-blur-xl p-4 md:p-5 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col items-start min-w-0">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Official Contract
                </span>
                <span className="font-mono text-sm md:text-base text-foreground/90 truncate w-full text-left mt-1">
                  {CONTRACT_VALUE}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy contract address"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-bold text-primary hover:bg-primary/20 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground/70 text-center">
            The official mint address will be added here at launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
