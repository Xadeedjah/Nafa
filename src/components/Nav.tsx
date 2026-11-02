import { useState } from "react";
import { siteConfig } from "../config/site";
import { useNav } from "../hooks";

export function Nav() {
  const { route, go } = useNav();
  const [open, setOpen] = useState(false);

  const link = (id: (typeof siteConfig.nav)[number]["id"], label: string, mobile = false) => (
    <a
      key={id}
      href={`#/${id}`}
      aria-current={route === id ? "page" : undefined}
      onClick={(e) => {
        e.preventDefault();
        setOpen(false);
        if (route !== id) go(id);
      }}
      className={
        mobile
          ? `block rounded-2xl px-4 py-3 text-lg font-bold ${route === id ? "bg-candy text-white" : "text-wine hover:bg-powder"}`
          : `rounded-full px-3 py-1.5 text-sm font-bold whitespace-nowrap transition ${
              route === id ? "bg-wine text-white" : "text-wine hover:bg-powder"
            }`
      }
    >
      {label}
    </a>
  );

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-3"
      >
        Aller au contenu
      </a>
      <nav
        aria-label="Navigation principale"
        className="fixed top-0 right-0 left-0 z-50 border-b border-powder bg-cream/85 backdrop-blur-md"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5">
          <a
            href="#/home"
            onClick={(e) => {
              e.preventDefault();
              if (route !== "home") go("home");
            }}
            className="font-display text-xl font-bold text-wine italic"
          >
            {siteConfig.name} {siteConfig.emoji}
          </a>
          <div className="hidden items-center gap-1 lg:flex">{siteConfig.nav.map((n) => link(n.id, n.label))}</div>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-wine text-xl text-wine lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="pop border-t border-powder bg-cream px-3 pt-2 pb-4 lg:hidden">
            {siteConfig.nav.map((n) => link(n.id, n.label, true))}
          </div>
        )}
      </nav>

      {/* Bouton d'accueil toujours accessible */}
      {route !== "home" && (
        <a
          href="#/home"
          aria-label="Retour à l'accueil"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-candy text-2xl shadow-lg ring-4 ring-white hover:scale-110"
          style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))", left: "1rem" }}
        >
          🏠
        </a>
      )}
    </>
  );
}
