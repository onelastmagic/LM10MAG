import { motion } from "framer-motion";

export function Tokenomics() {
  const stats = [
    { label: "Chain", value: "Solana", color: "text-secondary" },
    { label: "Ticker", value: "$LM10MAG", color: "text-primary" },
    { label: "Total Supply", value: "1,000,000,000", color: "text-foreground" },
  ];

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

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-6 rounded-2xl text-center"
              >
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-2">
                  {stat.label}
                </div>
                <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center"
          >
            <p className="text-green-400 font-medium">
              <strong>Note:</strong> Clean distribution, no hidden presales or VC.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
