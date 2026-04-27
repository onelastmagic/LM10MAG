import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Tokenomics</h2>
          <p className="text-xl text-primary font-bold">Simple and Transparent</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { label: "Chain", value: "Solana", color: "text-secondary" },
              { label: "Ticker", value: "$LM10MAG", color: "text-primary" },
              { label: "Total Supply", value: "1,000,000,000", color: "text-foreground" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-6 rounded-2xl text-center"
              >
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-2">{stat.label}</div>
                <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="h-full bg-card/50 border-primary/20 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="text-8xl font-black">80%</span>
                </div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-5xl font-black text-primary mb-4">80%</h3>
                  <h4 className="text-2xl font-bold mb-2">Pump.fun Bonding Curve</h4>
                  <p className="text-muted-foreground text-lg">
                    Dedicated to liquidity and early price discovery. Fair launch dynamics for the true degens.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-card/50 border-secondary/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-3xl font-black text-secondary mb-2">10%</h3>
                    <h4 className="text-xl font-bold mb-2">Team & Core</h4>
                    <p className="text-sm text-muted-foreground">
                      POSSUL devs and core collaborators who build and maintain the ecosystem.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-card/50 border-accent/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-3xl font-black text-accent mb-2">10%</h3>
                    <h4 className="text-xl font-bold mb-2">Treasury</h4>
                    <p className="text-sm text-muted-foreground">
                      Future incentives, collaborations, marketing and World Cup Chaos experiments.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center"
          >
            <p className="text-green-400 font-medium">
              <strong>Transparency Note:</strong> No hidden presales. No hidden VC bags. Everything about the supply and distribution is clear from day one.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
