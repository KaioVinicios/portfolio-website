import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/config/portfolio";

const { person, techStack, labels } = portfolioConfig;

export function About() {
  if (person.about.length === 0) return null;

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-balance">
            {labels.about.heading}
          </h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-6">
            {person.about.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {techStack.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-4">{labels.about.stackLabel}</p>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {techStack.map((tech) => (
                  <motion.div
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    <Badge variant="secondary" className="text-sm font-normal">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
