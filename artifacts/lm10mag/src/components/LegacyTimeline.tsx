import { motion } from "framer-motion";

const cld = (url: string) =>
  url.replace("/upload/", "/upload/f_auto,q_auto,w_800/");

const legacyStages = [
  {
    phase: "01",
    era: "1987 — 2000",
    title: "Rosario",
    description:
      "The kid from Rosario who broke every youth record and began writing the story of a legend.",
    image: cld(
      "https://res.cloudinary.com/dnsfaoqzk/image/upload/v1777263728/messi_rosario_cndtvs.jpg",
    ),
  },
  {
    phase: "02",
    era: "2003 — 2021",
    title: "Barcelona",
    description:
      "The dynasty years — La Liga titles, Champions Leagues, Ballon d'Ors, and the rise of the GOAT argument.",
    image: cld(
      "https://res.cloudinary.com/dnsfaoqzk/image/upload/v1777263005/Messi_BARCELONA_os0ixm.png",
    ),
  },
  {
    phase: "03",
    era: "2005 — Present",
    title: "Argentina",
    description:
      "From heartbreak in finals to lifting the World Cup in 2022 and changing the story forever.",
    image: cld(
      "https://res.cloudinary.com/dnsfaoqzk/image/upload/v1777262989/MESSI_ARGENTINA_xtnhtx.png",
    ),
  },
  {
    phase: "04",
    era: "2021 — 2023",
    title: "PSG",
    description:
      "A new era in Paris: goals, assists, and Champions League nights in a different shirt.",
    image: cld(
      "https://res.cloudinary.com/dnsfaoqzk/image/upload/v1777262998/Messi_PSG_ocstyd.png",
    ),
  },
  {
    phase: "05",
    era: "2023 — One Last Magic",
    title: "Inter Miami & One Last Magic",
    description:
      "Taking the magic to the U.S., rewriting MLS, and preparing the ground for one last World Cup dance on Solana.",
    image: cld(
      "https://res.cloudinary.com/dnsfaoqzk/image/upload/v1777262999/MESSI_INTER_DE_MIAMI_ytbeg6.png",
    ),
    secondaryImage: cld(
      "https://res.cloudinary.com/dnsfaoqzk/image/upload/v1777263733/LM10MAG_q9qzzx.jpg",
    ),
    highlight: true,
  },
];

export function LegacyTimeline() {
  return (
    <section id="legacy" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,191,0,0.08),_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.25em]">
            THE LEGEND
          </div>
          <h2 className="text-4xl md:text-5xl font-black">
            Messi's Legacy, <br className="md:hidden" />
            Block by Block
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline rail */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-accent/0 md:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-10 md:space-y-14">
            {legacyStages.map((stage, index) => {
              const isRight = index % 2 === 1;

              return (
                <motion.div
                  key={stage.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className={`relative flex flex-col md:flex-row md:items-center gap-6 md:gap-16 ${
                    isRight ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                    <div
                      className={`relative w-3.5 h-3.5 rounded-full border-2 ${
                        stage.highlight
                          ? "bg-primary border-primary shadow-[0_0_14px_rgba(255,191,0,0.7)]"
                          : "bg-background border-primary/60"
                      }`}
                    >
                      {stage.highlight && (
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                      )}
                    </div>
                  </div>

                  {/* Image column */}
                  <div className="md:w-1/2 pl-12 md:pl-0 flex md:justify-center">
                    <div className="w-full max-w-[340px] mx-auto">
                      <div
                        className={`rounded-2xl border ${
                          stage.highlight
                            ? "border-primary/30 shadow-[0_0_30px_rgba(255,191,0,0.12)]"
                            : "border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                        } bg-[#0c0a14] p-2`}
                      >
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#0c0a14]">
                          <img
                            src={stage.image}
                            alt={`Messi — ${stage.title}`}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Phase / era meta below image */}
                      <div className="mt-3 flex items-center justify-between px-1 font-mono text-[10px] tracking-widest uppercase">
                        <span className="text-primary/90">Phase {stage.phase}</span>
                        <span className="text-muted-foreground">{stage.era}</span>
                      </div>

                      {stage.highlight && stage.secondaryImage && (
                        <div className="mt-4 rounded-xl border border-primary/25 bg-[#0c0a14] p-2">
                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#0c0a14]">
                            <img
                              src={stage.secondaryImage}
                              alt="$LM10MAG — One Last Magic"
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text column */}
                  <div className="md:w-1/2 pl-12 md:pl-0">
                    <div className={isRight ? "md:text-right" : "md:text-left"}>
                      <h3
                        className={`text-2xl md:text-4xl font-black mb-3 leading-tight ${
                          stage.highlight ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {stage.title}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md md:inline-block">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
