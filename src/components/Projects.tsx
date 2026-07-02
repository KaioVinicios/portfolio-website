import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const { projects, labels } = portfolioConfig;

export function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            {labels.projects.eyebrow}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            {labels.projects.heading}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full border-border/50 bg-card hover:border-border transition-colors group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                      {project.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            {labels.projects.codeButton}
                          </a>
                        </Button>
                      )}
                      {project.live ? (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            {labels.projects.liveButton}
                          </a>
                        </Button>
                      ) : null}
                    </div>
                    {project.detail && (
                      <div>
                        <p className="text-xs text-muted-foreground mt-4">{project.detail}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
