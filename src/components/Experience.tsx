import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedBackground } from "./AnimatedBackground";
import { portfolioConfig } from "@/config/portfolio";

const { experiences, labels } = portfolioConfig;

export function Experience() {
  if (experiences.length === 0) return null;

  return (
    <section id="experience" className="section-padding bg-muted/30 relative overflow-hidden">
      <AnimatedBackground />
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            {labels.experience.eyebrow}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            {labels.experience.heading}
          </h3>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{exp.role}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs font-normal">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
