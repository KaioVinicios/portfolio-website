import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap, Award } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const { education, certifications, labels } = portfolioConfig;

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

export function Certificates() {
  if (education.length === 0 && certifications.length === 0) return null;

  return (
    <section id="certificates" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            {labels.certificates.eyebrow}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            {labels.certificates.heading}
          </h3>
        </motion.div>

        {/* Education */}
        {education.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {labels.certificates.educationSubheading}
              </h4>
            </div>

            {education.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-border/50 bg-card hover:border-border transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <h5 className="text-lg font-semibold">{item.title}</h5>
                      <Badge variant="outline" className="w-fit text-xs font-normal">
                        {item.year}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-muted-foreground" />
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {labels.certificates.certificationsSubheading}
              </h4>
            </div>

            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="border-border/50 bg-card hover:border-border transition-colors h-full group">
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h5 className="font-medium leading-tight">{cert.title}</h5>
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground grow">
                        {cert.institution}
                      </p>
                      <Badge variant="secondary" className="w-fit text-xs font-normal mt-3">
                        {cert.year}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
