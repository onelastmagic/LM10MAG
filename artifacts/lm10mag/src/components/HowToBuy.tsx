import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Get a Wallet",
    desc: "Install a Solana wallet like Phantom and securely store your seed phrase offline."
  },
  {
    title: "Acquire SOL",
    desc: "Buy SOL on a centralized exchange (Binance, Coinbase, etc.) and withdraw it to your Phantom wallet on the Solana network."
  },
  {
    title: "Find the Official Link",
    desc: "Use the official Pump.fun link from this website or from the official X account — never search blindly."
  },
  {
    title: "Verify the Contract",
    desc: "Check that the mint address shown on Pump.fun and Solscan matches the official address displayed on this site."
  },
  {
    title: "Swap on Pump.fun",
    desc: "Swap your SOL for $LM10MAG on Pump.fun."
  },
  {
    title: "Trade on Raydium",
    desc: "After the token graduates and liquidity is added, you can also trade on Raydium and open the pair on Dexscreener."
  }
];

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">How to Buy $LM10MAG<br className="hidden md:block"/> on Solana</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button size="lg" variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary/10 mb-8">
      <a href="https://dexscreener.com/solana/TEST123456789ABC" target="_blank" rel="noopener noreferrer">
  View Chart on Dexscreener
</a>
            </Button>

            <div className="p-6 border-t border-destructive/30 bg-gradient-to-b from-destructive/5 to-transparent rounded-b-xl">
              <p className="text-sm text-foreground/70 font-medium">
                $LM10MAG is a high-volatility meme coin. Prices can move extremely fast and you can lose all your money. This is not financial advice — act under your own risk.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
