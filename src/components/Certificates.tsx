import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookMarked, ArrowUpRight } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const { education, certifications, certificationsRepoUrl, labels } = portfolioConfig;

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

/* Both blocks are rule-separated lists, not cards. On this section's bg-surface-wash
   wash a bg-card fill turned every entry into a gray box, which read as filler
   rather than credentials; hairlines carry the same grouping with none of the
   weight. Certificates lead with the institution — for a credential the issuer
   is what carries the weight — while Education leads with the degree and gives
   the institution the line below it at full foreground contrast. */
export function Certificates() {
  if (education.length === 0 && certifications.length === 0) return null;

  return (
    <section id="certificates" className="section-padding bg-surface-wash">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2.5 mb-12">
            <BookMarked className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              {labels.certificates.heading}
            </h3>
          </div>
        </motion.div>

        {/* Education */}
        {education.length > 0 && (
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {labels.certificates.educationSubheading}
              </h4>
            </div>

            <ul className="border-t border-border">
              {education.map((item) => (
                <li key={item.title} className="border-b border-border py-5">
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                      <h5 className="text-lg font-semibold tracking-tight">{item.title}</h5>
                      <p className="mt-1 font-medium">{item.institution}</p>
                    </div>
                    <Badge variant="outline" className="w-fit shrink-0 text-xs font-normal">
                      {item.year}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Award className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {labels.certificates.certificationsSubheading}
              </h4>
            </div>

            <motion.ul
              className="border-t border-border"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {certifications.map((cert) => (
                <motion.li key={cert.title} variants={itemVariants} className="border-b border-border">
                  {/* The whole row is the credential link: a 44px-plus target
                      instead of the old hover-revealed 16px icon. */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group -mx-3 flex flex-col gap-2 rounded-lg px-3 py-5 transition-colors hover:bg-foreground/[0.04] sm:flex-row sm:items-center sm:justify-between sm:gap-6 link-focus"
                  >
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="text-xl font-semibold tracking-tight">
                        {cert.institution}
                      </span>
                      <span className="text-sm text-muted-foreground">{cert.title}</span>
                      <span className="sr-only">{labels.certificates.credentialHint}</span>
                    </span>
                    <span className="flex shrink-0 items-center gap-3">
                      <Badge variant="outline" className="text-xs font-normal">
                        {cert.year}
                      </Badge>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {certificationsRepoUrl && (
              <a
                href={certificationsRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group link-focus"
              >
                {labels.certificates.repoLink}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
