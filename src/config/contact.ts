import { Linkedin, Mail, type LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { WhatsAppIcon, XIcon } from "@/components/icons/BrandIcons";
import { portfolioConfig } from "./portfolio";

export interface ContactChannel {
  key: "email" | "whatsapp" | "linkedin" | "x";
  /** Row title — a channel name, not a sentence. */
  label: string;
  /** Short human-readable identity shown under the label. */
  handle: string;
  href: string;
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
  /** Whether the link leaves the site (opens in a new tab). */
  external: boolean;
}

/**
 * Derives a readable handle from a profile URL ("https://x.com/Foo" -> "@Foo")
 * so the config only ever has to carry the canonical link. Falls back to the
 * URL without its protocol if it can't be parsed.
 */
function handleFromUrl(url: string, prefix: string): string {
  try {
    const path = new URL(url).pathname.replace(/^\/+|\/+$/g, "");
    return path ? `${prefix}${path}` : url;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

/**
 * Formats the wa.me digit string for display. Brazilian mobile numbers
 * (55 + 2-digit area code + 9 digits) get their familiar grouping; anything
 * else falls back to "+<digits>", which stays correct without pretending to
 * know that country's convention — this config is meant to be forked.
 */
function formatPhone(digits: string): string {
  const br = /^55(\d{2})(\d{5})(\d{4})$/.exec(digits);
  return br ? `+55 (${br[1]}) ${br[2]}-${br[3]}` : `+${digits}`;
}

const { links } = portfolioConfig;

/** The contact channels, in priority order, shared by the navbar menu and the mobile sheet. */
export const contactChannels: ContactChannel[] = [
  {
    key: "email",
    label: "E-mail",
    handle: links.email,
    href: `mailto:${links.email}`,
    icon: Mail,
    external: false,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    handle: formatPhone(links.whatsapp),
    // wa.me is WhatsApp's canonical click-to-chat endpoint; it redirects to
    // api.whatsapp.com/send and opens the app when one is installed.
    href: `https://wa.me/${links.whatsapp}`,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: handleFromUrl(links.linkedin, "/"),
    href: links.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    key: "x",
    label: "X",
    handle: handleFromUrl(links.x, "@"),
    href: links.x,
    icon: XIcon,
    external: true,
  },
];

/**
 * GitHub is deliberately not a contact channel: it's where the work lives, not
 * a way to reach a person. The Projects section owns it.
 */
export const githubProfile = {
  href: links.github,
  handle: handleFromUrl(links.github, "@"),
};
