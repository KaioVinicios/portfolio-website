import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const { links, labels } = portfolioConfig;

const socials = [
  {
    label: "Email",
    href: `mailto:${links.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: links.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: links.linkedin,
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            {labels.contact.eyebrow}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {labels.contact.heading}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-10">
            {labels.contact.pitch}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" asChild>
                <a href={`mailto:${links.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  {labels.contact.emailButton}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pl-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2 }}
              >
                <social.icon className="h-4 w-4" />
                <span>{social.label}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
