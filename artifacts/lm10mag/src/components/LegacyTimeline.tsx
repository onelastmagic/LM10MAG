import { motion } from "framer-motion";

const cld = (url: string) =>
  url.replace("/upload/", "/upload/f_auto,q_auto,w_900/");

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

          <div className="space-y-12 md:space-y-20">
            {legacyStages.map((stage, index) => {
              const isRight = index % 2 === 1;

              return (
                <motion.div
                  key={stage.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className={`relative flex flex-col md:flex-row items-stretch gap-6 md:gap-12 ${
                    isRight ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-10 -translate-x-1/2 z-20">
                    <div
                      className={`relative w-4 h-4 rounded-full border-2 ${
                        stage.highlight
                          ? "bg-primary border-primary shadow-[0_0_16px_rgba(255,191,0,0.7)]"
                          : "bg-background border-primary/60"
                      }`}
                    >
                      {stage.highlight && (
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                      )}
                    </div>
                  </div>

                  {/* Image card */}
                  <div className="md:w-1/2 pl-12 md:pl-0">
                    <div
                      className={`relative overflow-hidden rounded-2xl border ${
                        stage.highlight
                          ? "border-primary/40 shadow-[0_0_40px_rgba(255,191,0,0.2)]"
                          : "border-white/10"
                      } bg-card/60 backdrop-blur-sm group`}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={stage.image}
                          alt={`Messi — ${stage.title}`}
                          loading="lazy"
                          width={900}
                          height={675}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-end justify-between gap-3">
                        <div className="font-mono text-xs tracking-widest text-primary/90 uppercase">
                          Phase {stage.phase}
                        </div>
                        <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                          {stage.era}
                        </div>
                      </div>
                    </div>

                    {stage.highlight && stage.secondaryImage && (
                      <div className="mt-4 overflow-hidden rounded-xl border border-primary/30 aspect-[16/9]">
                        <img
                          src={stage.secondaryImage}
                          alt="$LM10MAG — One Last Magic"
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="md:w-1/2 pl-12 md:pl-0 flex md:items-center">
                    <div
                      className={`md:py-6 ${
                        isRight ? "md:text-right md:pr-2" : "md:pl-2"
                      }`}
                    >
                      <h3
                        className={`text-2xl md:text-4xl font-black mb-3 leading-tight ${
                          stage.highlight ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {stage.title}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
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
