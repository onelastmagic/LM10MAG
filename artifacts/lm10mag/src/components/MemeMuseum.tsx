import { motion } from "framer-motion";

const museumItems = [
  { id: 1, src: "/images/museum-1.png", caption: "Astronaut GOAT holding the gold." },
  { id: 2, src: "/images/museum-2.png", caption: "Solana x World Cup." },
  { id: 3, src: "/images/museum-3.png", caption: "Neon stadium vibes." },
  { id: 4, src: "/images/museum-4.png", caption: "The literal glowing GOAT." },
  { id: 5, src: "/images/museum-5.png", caption: "Trophy planted on the moon." },
  { id: 6, src: "/images/museum-6.png", caption: "Laser focus to the goal." },
];

export function MemeMuseum() {
  return (
    <section id="museum" className="py-24 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Meme & Fan Art Museum</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This section will become an on-chain museum of Messi memes and fan creations tied to the token. 
            Post on X using <strong className="text-secondary">#LM10MAG</strong> and tag <strong className="text-secondary">@LM10MAG</strong> and <strong className="text-secondary">@POSSUL_SOL</strong> — the best content will be featured here and may be eligible for future rewards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {museumItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden border border-border/50 bg-card aspect-square"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
