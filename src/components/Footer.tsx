import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";

const { person, labels } = portfolioConfig;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {person.name}. {labels.footer.rights}</p>
          <p>{labels.footer.madeWith}</p>
        </div>
      </div>
    </motion.footer>
  );
}
