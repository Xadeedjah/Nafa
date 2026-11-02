import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { RouteId } from "./config/site";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function pick<T>(list: T[], avoid?: T): T {
  if (list.length === 1) return list[0];
  let item = list[Math.floor(Math.random() * list.length)];
  while (item === avoid) item = list[Math.floor(Math.random() * list.length)];
  return item;
}

type NavCtx = { route: RouteId; go: (id: RouteId, big?: boolean) => void };
export const NavContext = createContext<NavCtx>({ route: "home", go: () => {} });
export const useNav = () => useContext(NavContext);

/** Vrai quand l'élément entre dans l'écran */
export function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
}
