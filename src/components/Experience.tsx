import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedBackground } from "./AnimatedBackground";
import { portfolioConfig } from "@/config/portfolio";

const { experiences, labels } = portfolioConfig;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Experience() {
  if (experiences.length === 0) return null;

  return (
    <section id="experience" className="section-padding bg-surface-wash relative overflow-hidden">
      <AnimatedBackground />
      <div className="container-narrow relative z-10">
        <motion.h3
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {labels.experience.heading}
        </motion.h3>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline connector. The hairline is static; a soft ink band
              glides down it on a slow loop (.timeline-flow in index.css) so
              the column reads as a live trace rather than a drawn rule.
              Purely decorative, and it flattens back to the plain hairline
              under prefers-reduced-motion. */}
          <div
            className="timeline-flow absolute left-[7px] top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <motion.div
                key={exp.role + exp.company}
                variants={itemVariants}
                className="relative pl-10"
              >
                <span
                  className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary-soft"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium w-fit md:text-right shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement) => (
                    <Badge
                      key={achievement}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
