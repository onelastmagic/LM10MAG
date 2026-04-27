import { motion } from "framer-motion";

export function PossulSection() {
  return (
    <section id="possul" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto border-y border-border py-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">Issued by POSSUL</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              POSSUL is a Solana-native meme coin studio focused on transparent, narrative-driven tokens. The goal is to launch honest, story-rich memecoins where supply and intentions are clear from day one.
            </p>
            <p>
              $LM10MAG is the first release, with future projects (like World Cup Chaos) planned under the same POSSUL signature. We build narratives that degens want to trade and communities want to hold.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
