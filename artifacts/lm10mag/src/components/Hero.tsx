import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const HERO_IMAGE =
  "https://res.cloudinary.com/dnsfaoqzk/image/upload/f_auto,q_auto/v1777262321/MS10MAG_omf2nz.png";

const CONTRACT_VALUE = "TEST123456789ABC";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_VALUE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Messi facing the World Cup trophy in a neon stadium"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/55 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background z-10" />
      </div>

      {/* Subtle ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[140px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[170px] z-0 pointer-events-none" />

      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-5 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs md:text-sm font-semibold text-primary tracking-[0.25em] backdrop-blur-sm"
        >
          ONE LAST MAGIC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-5 text-transparent bg-clip-text bg-gradient-to-b from-white to-primary/80 drop-shadow-[0_0_30px_rgba(255,191,0,0.45)]"
        >
          $LM10MAG
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl leading-tight"
        >
          Messi's final World Cup, immortalized on Solana.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
        >
          A Solana meme coin celebrating Messi's legendary career and his final World Cup story —
          issued by{" "}
          <span className="text-foreground font-semibold">POSSUL</span>, a transparent Solana-native
          studio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
        >
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 h-14 shadow-[0_0_30px_rgba(255,191,0,0.4)] hover:shadow-[0_0_40px_rgba(255,191,0,0.6)] transition-all"
          >
            <a href="https://pump.fun/coin/TEST123456789ABC" target="_blank" rel="noopener noreferrer">
  Buy $LM10MAG on Pump.fun
</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/20 text-foreground hover:bg-white/10 hover:text-foreground font-bold text-lg px-8 h-14 backdrop-blur-sm"
          >
            <a href="#community">Join the Community</a>
          </Button>
        </motion.div>

        {/* Official Contract box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
          className="w-full max-w-xl"
        >
          <div className="rounded-2xl border border-white/10 bg-black/55 backdrop-blur-xl p-4 md:p-5 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col items-start min-w-0">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Official Contract
                </span>
                <span className="font-mono text-sm md:text-base text-foreground/90 truncate w-full text-left mt-1">
                  {CONTRACT_VALUE}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy contract address"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-bold text-primary hover:bg-primary/20 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground/70 text-center">
            The official mint address will be added here at launch.
          </p>
        </motion.div>
            {/* Messi Instagram Embed Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        className="w-full max-w-6xl mt-16"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* Left column: Narrative copy */}
          <div className="space-y-6 text-left">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 font-semibold">
                Live Narrative
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Messi is signing history.<br/>
                $LM10MAG is launching it.
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                As Messi signs his World Cup jerseys and the golden ball on Instagram, 
                LM10MAG turns that exact moment into a live Solana narrative.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Fresh narrative, perfect timing</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This isn't a random memecoin. It's a cultural moment happening RIGHT NOW 
                    on Instagram, captured on Solana.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Global recognition, instant virality</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Messi + World Cup + #10 = billions know the story. 
                    $LM10MAG is the token that makes it tradeable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Fair launch on Pump.fun</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    No presale, no VC allocation. Pure community launch with anti-snipe bundler 
                    protection. Everyone starts equal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Instagram embed */}
          <div className="flex justify-center lg:justify-end">
            <div 
              className="w-full max-w-[540px] rounded-xl overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DXrJkgkjKvf/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DXrJkgkjKvf/?utm_source=ig_embed&utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicación en Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DXrJkgkjKvf/?utm_source=ig_embed&utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Una publicación compartida por Leo Messi (@leomessi)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>`
              }}
            />
          </div>

        </div>
      </motion.div>
      </div>
    </section>
  );
}
