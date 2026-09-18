import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactMenu } from "@/components/ContactMenu";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { portfolioConfig } from "@/config/portfolio";
import { contactChannels } from "@/config/contact";
import { getNavItems } from "@/config/nav";

const { labels } = portfolioConfig;
const navItems = getNavItems();

/* On desktop the "Contato" entry is served by the ContactMenu on the right of
   the bar (which links on to #contact from inside its panel), so keeping the
   plain anchor in the link row would duplicate the same word twice in one
   line. The mobile sheet still lists every section, contact included. */
const desktopNavItems = navItems.filter((item) => item.href !== "#contact");

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      {/* Three grid columns (brand / links / actions) separated by a generous
          column gap, so the four groups read as four groups. The link row and
          the action cluster each keep their own, tighter internal rhythm —
          tight grouping, generous separation. */}
      <nav className="container-narrow grid grid-cols-[auto_1fr_auto] items-center gap-8 lg:gap-10 xl:gap-14 h-16">
        <motion.a
          href="#"
          className="col-start-1 text-lg font-semibold tracking-tight link-focus justify-self-start"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {labels.nav.brand}
        </motion.a>

        {/* Desktop Navigation — centered within its own grid column, so it
            can never overlap the brand or action cluster regardless of how
            wide either one is (the old absolute-centered version centered
            on the whole bar, which collided with the icon cluster once
            persistent contact icons made that side wider). */}
        <div className="col-start-2 hidden lg:flex items-center justify-center gap-7 xl:gap-9">
          {desktopNavItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-focus whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop: contact menu + theme toggle, held apart by a hairline. */}
        <div className="col-start-3 hidden lg:flex items-center gap-2 justify-self-end">
          <ContactMenu />
          <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {mounted && (
              <motion.div
                initial={false}
                animate={{ rotate: resolvedTheme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {resolvedTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </motion.div>
            )}
          </Button>
        </div>

        {/* Mobile/tablet Navigation: every channel lives inside the menu, so the
            collapsed bar carries only theme + menu. Stays active through lg
            (1024px) since the desktop nav needs that much room for the pt-BR
            labels plus the action cluster. */}
        <div className="col-start-3 lg:hidden flex items-center gap-1 justify-self-end">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Alternar tema">
            {mounted && (resolvedTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />)}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-background border-b border-border"
      >
        <div className="container-narrow py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-focus"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-2 border-t border-border">
            {contactChannels.map((channel) => (
              <a
                key={channel.key}
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors link-focus"
              >
                <channel.icon className="h-4 w-4" />
                {channel.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
