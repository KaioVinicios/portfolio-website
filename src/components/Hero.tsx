import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin } from "lucide-react";
import LetterGlitch from "./LetterGlitch";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio";

const { person, links, labels } = portfolioConfig;

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const darkColors = ["#1a1a1a","#363636","#242424"];
  const lightColors = ["#f5f5f5","#e2e2e3","#f2f2f2"];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-background">
      {mounted && (
        <LetterGlitch
          key={resolvedTheme}
          glitchColors={resolvedTheme === "dark" ? darkColors : lightColors}
          glitchSpeed={90}
          centerVignette={resolvedTheme === "dark"? true : false}
          outerVignette={false}
          smooth
          className="absolute inset-0 z-0"
        />
      )}

      <div className="relative z-10 container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm text-muted-foreground mb-4 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {person.role}
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {person.name}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {person.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button asChild size="lg" className="min-w-40">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {labels.hero.viewProjects}
                <ArrowDown className="ml-2 h-4 w-4" />
              </motion.a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-40" asChild>
              <motion.a
                href={links.linkedin}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                {labels.hero.linkedin}
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
