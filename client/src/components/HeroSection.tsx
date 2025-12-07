import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/mockData";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={images.hero}
          alt="Wnętrze teatru"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            data-testid="hero-title"
          >
            Miejsko-Gminny
            <br />
            Ośrodek Kultury
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 font-light"
            data-testid="hero-subtitle"
          >
            w Stąporkowie
          </p>
          <p className="text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Odkryj świat kultury, sztuki i edukacji. Dołącz do naszych wydarzeń, warsztatów i kół zainteresowań.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white border border-primary-border px-8 py-6 text-lg"
              data-testid="hero-cta-repertuar"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Repertuar
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
              data-testid="hero-cta-about"
            >
              Dowiedz się więcej
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
