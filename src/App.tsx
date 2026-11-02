import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig, type RouteId } from "./config/site";
import { NavContext, prefersReducedMotion } from "./hooks";
import { Nav } from "./components/Nav";
import { FloatingBackground } from "./components/ui";
import { Home } from "./pages/Home";
import { Dossier } from "./pages/Dossier";
import { Letter } from "./pages/Letter";
import { OpenWhen } from "./pages/OpenWhen";
import { Final } from "./pages/Final";

const pages: Record<RouteId, () => JSX.Element> = {
  home: Home,
  dossier: Dossier,
  lettre: Letter,
  ouvrir: OpenWhen,
  final: Final,
};

const readRoute = (): RouteId => {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const id = hash.split("?")[0] as RouteId;
  return id in pages ? id : "home";
};

export default function App() {
  const [route, setRoute] = useState<RouteId>(readRoute);
  const [curtain, setCurtain] = useState<"off" | "on" | "big">("off");
  const main = useRef<HTMLElement>(null);
  const first = useRef(true);

  useEffect(() => {
    const onHash = () => setRoute(readRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Remonte en haut et place le focus sur le contenu à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
    if (first.current) {
      first.current = false;
      return;
    }
    main.current?.focus({ preventScroll: true });
  }, [route]);

  const go = useCallback((id: RouteId, big = false) => {
    if (prefersReducedMotion()) {
      window.location.hash = `/${id}`;
      return;
    }
    setCurtain(big ? "big" : "on");
    window.setTimeout(() => {
      window.location.hash = `/${id}`;
    }, big ? 800 : 350);
    window.setTimeout(() => setCurtain("off"), big ? 1500 : 800);
  }, []);

  const Page = pages[route];
  return (
    <NavContext.Provider value={{ route, go }}>
      <FloatingBackground />
      <Nav />
      <main id="main" ref={main} tabIndex={-1} className="relative z-10 min-h-screen outline-none">
        <Page key={route} />
      </main>
      <footer className="relative z-10 pb-24 text-center font-hand text-xl text-wine/80">
        Fait avec {siteConfig.emoji} par ta grande sœur
      </footer>

      {/* Rideau de transition */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-candy transition-opacity duration-500 ${
          curtain === "off" ? "opacity-0" : "opacity-100"
        }`}
      >
        {curtain === "big" && (
          <div className="pop text-center text-white">
            <div className="text-7xl">💗</div>
            <p className="font-display text-2xl italic">Ouverture du musée…</p>
          </div>
        )}
      </div>
    </NavContext.Provider>
  );
}
