import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Github, Star } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { githubProfile } from "@/config/contact";
import type { Project } from "@/config/types";

const { projects, labels } = portfolioConfig;

/* The links used to fade in on hover on desktop, which meant every card
   reserved a row of blank space for something the visitor couldn't see — the
   dead strip under the badges. They're always visible now, the same as on the
   featured card, so the space a card takes is space it actually uses. */
function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.live) return null;

  return (
    <div className="flex gap-2">
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
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="border-border/50 bg-card hover:border-border transition-colors overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-40 w-full object-cover"
            />
          )}
          <CardContent className="flex flex-col">
            <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
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
            <ProjectLinks project={project} />
            {project.detail && (
              <p className="text-xs text-muted-foreground mt-4">{project.detail}</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// Tailwind's md breakpoint. Read in JS because the two-column layout changes
// the DOM order, not just the styling.
const TWO_COLUMNS_QUERY = "(min-width: 768px)";

function subscribeToTwoColumns(onChange: () => void) {
  const query = window.matchMedia(TWO_COLUMNS_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function useTwoColumns() {
  return useSyncExternalStore(
    subscribeToTwoColumns,
    () => window.matchMedia(TWO_COLUMNS_QUERY).matches,
    () => true,
  );
}

export function Projects() {
  const twoColumns = useTwoColumns();

  if (projects.length === 0) return null;

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        {/* Section header and the GitHub link share one row: the heading block
            on the left, the profile link right-aligned to its baseline. It sits
            here rather than closing the section because it's a peer of the
            title — "the selected work, and everything else" — not a step after
            the grid. Stacks under the heading below sm. */}
        <motion.div
          className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
              {labels.projects.eyebrow}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              {labels.projects.heading}
            </h3>
          </div>

          <a
            href={githubProfile.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-border/50 bg-card px-3 py-2 text-sm transition-colors hover:border-border hover:bg-muted/40 link-focus"
          >
            <Github className="size-4 shrink-0" aria-hidden="true" />
            <span className="font-medium">{githubProfile.handle}</span>
            {/* Visually the handle is enough; screen readers get the purpose
                too, appended so the accessible name still contains the visible
                text (WCAG 2.5.3). */}
            <span className="sr-only">{labels.projects.githubCta}</span>
            <ArrowUpRight
              className="size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </a>
        </motion.div>

        {/* Featured project — the flagship gets a wider, asymmetric treatment */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-border/50 bg-card hover:border-border transition-colors overflow-hidden py-8">
            <div className={featured.image ? "grid md:grid-cols-2" : ""}>
              {featured.image && (
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="h-56 w-full object-cover md:h-full"
                />
              )}
              <CardContent className="px-8 flex flex-col">
                <span className="inline-flex items-center gap-1.5 w-fit rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary mb-4">
                  <Star className="h-3 w-3" fill="currentColor" />
                  Projeto em destaque
                </span>
                <h4 className="text-xl font-semibold mb-2">{featured.title}</h4>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {featured.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto">
                  <ProjectLinks project={featured} />
                  {featured.detail && (
                    <p className="text-xs text-muted-foreground mt-4">{featured.detail}</p>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Masonry rather than a 2-col grid. A grid forced every card in a
            row to the tallest one's height (short cards ended in dead space)
            and left an empty slot whenever the count was odd. Each column is
            its own stack, so cards keep their natural height and pack against
            the one above. Cards alternate left/right instead of flowing down
            CSS columns, so the config order reads row by row: the second and
            third projects always sit side by side, whatever the card heights.
            Below md it's one stack in config order. */}
        {rest.length > 0 &&
          (twoColumns ? (
            <div className="grid grid-cols-2 items-start gap-6">
              {[0, 1].map((column) => (
                <div key={column} className="flex flex-col gap-6">
                  {rest.map((project, index) =>
                    index % 2 === column ? (
                      <ProjectCard key={project.title} project={project} index={index} />
                    ) : null,
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {rest.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}
