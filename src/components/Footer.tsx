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
      {/* Single centered line: the copyright is the footer's only content, so
          the old two-column split would leave one side empty. */}
      <div className="container-narrow">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} {person.name}. {labels.footer.rights}
        </p>
      </div>
    </motion.footer>
  );
}
