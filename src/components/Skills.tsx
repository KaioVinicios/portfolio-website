import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedBackground } from "./AnimatedBackground";
import { portfolioConfig } from "@/config/portfolio";

const { skillCategories, labels } = portfolioConfig;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  if (skillCategories.length === 0) return null;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <AnimatedBackground />
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            {labels.skills.eyebrow}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            {labels.skills.heading}
          </h3>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h4 className="text-sm font-medium mb-4 text-muted-foreground">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Badge variant="secondary" className="text-sm font-normal py-1.5 px-3">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
