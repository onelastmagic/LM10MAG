import { motion } from "framer-motion";

const legacySteps = [
  {
    phase: "01",
    title: "Early Years",
    description: "The kid from Rosario who broke every youth record.",
    color: "from-blue-500/20 to-blue-900/0",
    border: "border-blue-500/30"
  },
  {
    phase: "02",
    title: "Barcelona Era",
    description: "The dynasty: La Liga titles, Champions Leagues, Ballon d'Ors and the rise of the GOAT argument.",
    color: "from-red-500/20 to-blue-900/0",
    border: "border-red-500/30"
  },
  {
    phase: "03",
    title: "Argentina & 2022 World Cup",
    description: "From heartbreak in finals to lifting the World Cup in 2022 and changing the story forever.",
    color: "from-sky-400/20 to-sky-900/0",
    border: "border-sky-400/30"
  },
  {
    phase: "04",
    title: "PSG Chapter",
    description: "A new era in Paris: goals, assists and Champions League nights in a different shirt.",
    color: "from-indigo-500/20 to-indigo-900/0",
    border: "border-indigo-500/30"
  },
  {
    phase: "05",
    title: "Inter Miami & One Last Magic",
    description: "Taking the magic to the U.S., rewriting MLS, and preparing the ground for one last World Cup dance on Solana with $LM10MAG.",
    color: "from-primary/30 to-primary/0",
    border: "border-primary/50",
    highlight: true
  }
];

export function LegacyTimeline() {
  return (
    <section id="legacy" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Messi's Legacy, <br className="md:hidden"/>Block by Block</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legacySteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border ${step.border} bg-gradient-to-br ${step.color} backdrop-blur-sm overflow-hidden group ${
                  step.highlight ? 'lg:col-span-3 md:col-span-2 shadow-[0_0_30px_rgba(255,191,0,0.15)] scale-[1.02]' : ''
                }`}
              >
                {step.highlight && (
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
                <div className="text-6xl font-black text-white/5 absolute -top-4 -right-2 pointer-events-none selection:bg-transparent">
                  {step.phase}
                </div>
                <div className={`text-sm font-mono mb-2 ${step.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                  PHASE {step.phase}
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${step.highlight ? 'text-primary' : 'text-foreground'}`}>
                  {step.title}
                </h3>
                <p className={`text-base leading-relaxed ${step.highlight ? 'text-foreground/90 font-medium' : 'text-muted-foreground'}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
