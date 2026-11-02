import { useEffect, useRef, type ReactNode } from "react";
import { useInView } from "../hooks";

/** Fait apparaître son contenu au défilement */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function PageTitle({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <header className="mx-auto max-w-3xl px-5 pt-28 pb-8 text-center">
      {kicker && <p className="sticker wiggle mb-4">{kicker}</p>}
      <h1 className="font-display text-4xl leading-tight font-bold text-wine italic sm:text-6xl">{children}</h1>
    </header>
  );
}

/** Photo ou espace réservé si aucune image n'est renseignée */
export function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={`Espace photo : ${alt}`}
      className={`flex h-full w-full flex-col items-center justify-center gap-1 bg-powder/70 text-wine ${className}`}
    >
      <span className="text-4xl" aria-hidden>
        📷
      </span>
      <span className="font-hand text-xl">Photo à ajouter</span>
    </div>
  );
}

/** Fenêtre modale accessible (Échap, focus, clic dehors) */
export function Modal({
  open,
  onClose,
  label,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}) {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    box.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-wine/50 p-4 backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={box}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className="pop paper relative max-h-[90vh] w-full max-w-lg overflow-auto p-7 outline-none"
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full text-xl text-wine hover:bg-powder"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

/** Cœurs et fleurs qui flottent en fond (décoratif) */
export function FloatingBackground() {
  const items = ["💗", "🌸", "✨", "🤍", "🌷", "💕", "⭐"];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0 overflow-hidden opacity-50">
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="floaty"
          style={
            {
              left: `${(i * 73) % 100}%`,
              fontSize: `${16 + ((i * 7) % 18)}px`,
              ["--dur" as string]: `${14 + ((i * 5) % 12)}s`,
              ["--delay" as string]: `${-((i * 3) % 14)}s`,
              ["--drift" as string]: `${((i % 2 ? 1 : -1) * (20 + i * 4))}px`,
            } as React.CSSProperties
          }
        >
          {items[i % items.length]}
        </span>
      ))}
    </div>
  );
}

/** Pluie douce de fleurs et de cœurs (page finale) */
export function PetalRain() {
  const items = ["🌸", "💗", "🌷", "🤍", "💕", "🌺"];
  return (
    <div aria-hidden>
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          key={i}
          className="faller"
          style={
            {
              left: `${(i * 47) % 100}%`,
              fontSize: `${18 + ((i * 5) % 16)}px`,
              ["--dur" as string]: `${8 + ((i * 3) % 7)}s`,
              ["--delay" as string]: `${-((i * 2) % 9)}s`,
              ["--drift" as string]: `${((i % 2 ? 1 : -1) * (30 + i * 3))}px`,
            } as React.CSSProperties
          }
        >
          {items[i % items.length]}
        </span>
      ))}
    </div>
  );
}
