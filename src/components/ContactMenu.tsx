import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Copy } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { contactChannels } from "@/config/contact";
import { portfolioConfig } from "@/config/portfolio";
import { cn } from "@/lib/utils";

const { labels, links } = portfolioConfig;

/* Motion contract
   ---------------
   The panel is revealed by a top-down clip-path wipe anchored to the trigger,
   so it reads as unfolding *out of* the button rather than appearing next to
   it; rows settle in behind that wipe on a short stagger. Exit is ~half the
   enter duration and unstaggered — staggered exits always feel sluggish.
   No layout property is animated (clip-path + transform + opacity only).

   Reduced motion needs an explicit branch here. The app-wide
   <MotionConfig reducedMotion="user"> only suppresses transform and layout
   animations — a clip-path wipe keeps running under it (verified in-browser),
   so `useReducedMotion` swaps the whole reveal for a plain crossfade with no
   wipe, no travel and no stagger. */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const CLIP_CLOSED = "inset(0% 0% 100% 0% round 12px)";
const CLIP_OPEN = "inset(0% 0% 0% 0% round 12px)";
const COPIED_RESET_MS = 2200;

export function ContactMenu() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const copyResetRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const panelId = useId();

  const close = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  // Escape closes and returns focus to the trigger; a pointer press anywhere
  // outside dismisses. Both listen on the document because Safari doesn't
  // focus a <button> on click, so a container-scoped keydown would miss.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        close(true);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(copyResetRef.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      clearTimeout(copyResetRef.current);
      copyResetRef.current = setTimeout(() => setCopied(false), COPIED_RESET_MS);
    } catch {
      // Clipboard unavailable (insecure context or denied permission): the
      // mailto link next to this button is the working fallback, so fail quiet.
      setCopied(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      // Tabbing past the last row closes the menu, so keyboard users never
      // leave an open panel floating behind them.
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      {/* A raw <button> rather than the shared <Button>: that component's
          focus-visible ring resolves to a 0px ring in this project (the theme
          toggle beside it has the same problem), so the trigger carries the
          same explicit focus treatment as the nav links it sits next to. */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {labels.nav.contact}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200 ease-out motion-reduce:transition-none",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="group"
            aria-label={labels.nav.contact}
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4, clipPath: CLIP_CLOSED }
            }
            animate={
              reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, clipPath: CLIP_OPEN }
            }
            exit={
              reduceMotion
                ? { opacity: 0, transition: { duration: 0.12 } }
                : {
                    opacity: 0,
                    y: -2,
                    clipPath: CLIP_CLOSED,
                    transition: { duration: 0.18, ease: "easeIn" },
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0.16 }
                : { duration: 0.38, ease: EASE_OUT_EXPO, opacity: { duration: 0.16 } }
            }
            style={{ transformOrigin: "top right" }}
            className="absolute right-0 top-[calc(100%+0.625rem)] w-[17.5rem] origin-top-right rounded-xl border border-border bg-popover p-1.5 shadow-xs"
          >
            <ul className="flex flex-col">
              {contactChannels.map((channel, index) => (
                <motion.li
                  key={channel.key}
                  initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 0.3, delay: 0.06 + index * 0.05, ease: EASE_OUT_EXPO }
                  }
                  className="flex items-center gap-1"
                >
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    onClick={() => setOpen(false)}
                    className="group/row flex min-w-0 flex-1 items-center gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-popover"
                  >
                    <channel.icon
                      className="size-4 shrink-0 text-muted-foreground transition-colors group-hover/row:text-foreground group-focus-visible/row:text-foreground"
                      aria-hidden="true"
                    />
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-sm font-medium leading-none">{channel.label}</span>
                      <span className="truncate text-xs leading-none text-muted-foreground">
                        {channel.handle}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto size-3.5 shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover/row:translate-x-0 group-hover/row:opacity-100 group-focus-visible/row:translate-x-0 group-focus-visible/row:opacity-100 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </a>

                  {channel.key === "email" && (
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label={copied ? labels.contactMenu.copied : labels.contactMenu.copy}
                      className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-popover"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={copied ? "copied" : "copy"}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.14, ease: "easeOut" }}
                          className="flex"
                        >
                          {copied ? (
                            <Check className="size-3.5" aria-hidden="true" />
                          ) : (
                            <Copy className="size-3.5" aria-hidden="true" />
                          )}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Keeps the in-page contact section reachable from the bar now
                that the menu has taken the old "Contato" nav link's place. */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 0.3, delay: 0.06 + contactChannels.length * 0.05 }
              }
              className="mt-1.5 border-t border-border pt-1.5"
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="group/section flex items-center justify-between rounded-lg px-2.5 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-popover"
              >
                {labels.contactMenu.viewSection}
                <ChevronDown
                  className="size-3.5 -rotate-90 transition-transform duration-200 group-hover/section:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <span role="status" aria-live="polite" className="sr-only">
        {copied ? labels.contactMenu.copied : ""}
      </span>
    </div>
  );
}
