import { motion } from "framer-motion";

export function About() {
  return (
    <section id="lore" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djIwaC0ydi0yMEgzNHYtMmgydjEySDM0djJINHYtMmgyVjIyaC0yVjEySDh2MTBoMnYxMGgtMnYyaDEwdjItMTAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold tracking-wider">
            THE LORE
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-muted-foreground">
            What is $LM10MAG?
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            <p>
              $LM10MAG was created by obsessed football fans who saw a narrative opportunity around the upcoming World Cup. We are degens, we are fans, and we believe in the power of an undeniable story.
            </p>
            <p>
              Messi is a living legend. This token is a tribute to his entire career, framing the last World Cup as <strong className="text-primary font-bold">"one last show of magic"</strong>. It's about that exact feeling when the ball is at his feet and the world stops breathing.
            </p>
            <div className="p-6 mt-8 border-l-4 border-destructive bg-destructive/5 rounded-r-lg">
              <p className="text-base text-foreground/80">
                Let's be perfectly clear: this is a pure meme coin. There is no intrinsic value, no promises, and no guaranteed returns. What we have is story, community, and pure on-chain chaos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
