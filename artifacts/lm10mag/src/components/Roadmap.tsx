import { motion } from "framer-motion";

const phases = [
  {
    id: "Phase 1",
    title: "Kickoff",
    desc: "Launch on Pump.fun, first degens, first raids and meme storms.",
    color: "bg-primary"
  },
  {
    id: "Phase 2",
    title: "Full-Time Degens",
    desc: "Raydium + Dexscreener, meme and fan art contests, treasury-funded experiments.",
    color: "bg-secondary"
  },
  {
    id: "Phase 3",
    title: "Extra Time",
    desc: "World Cup Chaos teaser campaigns, potential merch, IRL meme moments, and community-driven chaos.",
    color: "bg-accent"
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-card/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Roadmap</h2>
          <p className="text-xl text-muted-foreground italic">(Very Serious, Not Really)</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ backgroundColor: `var(--${phase.color.split('-')[1]})` }} />
                
                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                  <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-lg">
                    <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                      {phase.id}
                    </span>
                    <h3 className="text-2xl font-black mb-3 text-foreground">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16 text-xs text-muted-foreground/60"
          >
            This roadmap is for entertainment purposes only. Reality may be wilder, messier, or completely different.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
