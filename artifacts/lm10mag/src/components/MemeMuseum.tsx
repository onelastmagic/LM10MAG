import { motion } from "framer-motion";

export function MemeMuseum() {
  return (
    <section id="museum" className="py-24 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Meme & Fan Art Museum</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This space will showcase memes and AI-edited art from the $LM10MAG community.
            Post on X using <strong className="text-secondary">#LM10MAG</strong> and tag{" "}
            <strong className="text-secondary">@LM10MAG</strong> and{" "}
            <strong className="text-secondary">@POSSUL_SOL</strong>. The best creations will be
            featured here and may be eligible for future airdrops.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-accent/10 backdrop-blur-sm p-12 md:p-16 text-center overflow-hidden shadow-[0_0_40px_rgba(255,191,0,0.12)]">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Coming Soon
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
                Coming Soon
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-md">
                Museum will open once the first Ultras start posting.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
