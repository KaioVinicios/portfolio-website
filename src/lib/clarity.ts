declare global {
  interface Window {
    clarity?: {
      (...args: unknown[]): void;
      q?: unknown[][];
    };
  }
}

/**
 * Injects the Microsoft Clarity snippet when VITE_CLARITY_ID is set.
 * Without the variable (e.g. on a fresh fork), no analytics code loads at all.
 */
export function initClarity(): void {
  const id = import.meta.env.VITE_CLARITY_ID;
  if (!id) return;

  window.clarity =
    window.clarity ??
    function (...args: unknown[]) {
      (window.clarity!.q ??= []).push(args);
    };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${id}`;
  document.head.appendChild(script);
}
