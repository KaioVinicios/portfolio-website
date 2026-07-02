import { portfolioConfig } from "./portfolio";

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Navbar items derived from the config: a section with no data is
 * hidden, so its nav link disappears too. Contact always renders.
 * Order matches the section order on the page.
 */
export function getNavItems(): NavItem[] {
  const { labels, person, projects, experiences, education, certifications, skillCategories } =
    portfolioConfig;
  const items: NavItem[] = [];

  if (person.about.length > 0) items.push({ label: labels.nav.about, href: "#about" });
  if (experiences.length > 0) items.push({ label: labels.nav.experience, href: "#experience" });
  if (projects.length > 0) items.push({ label: labels.nav.projects, href: "#projects" });
  if (education.length > 0 || certifications.length > 0)
    items.push({ label: labels.nav.certificates, href: "#certificates" });
  if (skillCategories.length > 0) items.push({ label: labels.nav.skills, href: "#skills" });
  items.push({ label: labels.nav.contact, href: "#contact" });

  return items;
}
