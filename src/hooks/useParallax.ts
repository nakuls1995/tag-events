import { useEffect, useRef } from "react";

/** Subtle scroll-linked vertical drift for decorative hero imagery. */
export function useParallax<T extends HTMLElement>(strength = 0.08) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    function update() {
      const rect = el!.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2) * strength;
      el!.style.transform = `translateY(${offset}px)`;
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return ref;
}
