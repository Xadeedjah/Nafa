import { useRef, useState } from "react";
import { siteConfig } from "../config/site";
import { pick, useNav } from "../hooks";
import { Reveal } from "../components/ui";

const cfg = siteConfig.home;

function DivaButtons() {
  const { go } = useNav();
  const zone = useRef<HTMLDivElement>(null);
  const noBtn = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [quip, setQuip] = useState("");
  const [shakeKey, setShakeKey] = useState(0);

  // Le bouton fuit légèrement la souris (ordinateur uniquement ; sur téléphone il reste en place)
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !noBtn.current) return;
    const r = noBtn.current.getBoundingClientRect();
    const cx = r.left + r.width / 2 - offset.x;
    const cy = r.top + r.height / 2 - offset.y;
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const dist = Math.hypot(dx, dy);
    if (dist < 110) {
      const push = 70;
      const nx = Math.max(-90, Math.min(90, offset.x - (dx / (dist || 1)) * push));
      const ny = Math.max(-40, Math.min(40, offset.y - (dy / (dist || 1)) * push));
      void cx;
      void cy;
      setOffset({ x: nx, y: ny });
    }
  };

  return (
    <div ref={zone} onPointerMove={onMove} className="mx-auto max-w-xl px-5 py-6 text-center">
      <p className="font-display text-2xl text-wine italic">{cfg.diva.question}</p>
      <div className="mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
        <button className="btn btn-primary" onClick={() => go("dossier", true)}>
          {cfg.diva.yes}
        </button>
        <button
          ref={noBtn}
          className="btn btn-ghost"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, transition: "transform 0.25s" }}
          onClick={() => {
            setQuip((q) => pick(cfg.diva.quips, q));
            setShakeKey((k) => k + 1);
          }}
        >
          {cfg.diva.no}
        </button>
      </div>
      <p aria-live="polite" className="mt-6 min-h-[3.5rem]">
        {quip && (
          <span key={shakeKey} className="shake sticker inline-block !text-2xl">
            {quip}
          </span>
        )}
      </p>
    </div>
  );
}

export function Home() {
  const { go } = useNav();
  return (
    <div className="pb-20">
      <section className="mx-auto max-w-4xl px-5 pt-28 text-center sm:pt-36">
        <p className="sticker wiggle mb-6">✨ édition spéciale ✨</p>
        <h1 className="font-display text-5xl leading-[1.05] font-bold text-wine italic sm:text-7xl">{cfg.title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/85 sm:text-2xl">{cfg.subtitle}</p>
        <p className="mx-auto mt-6 inline-block max-w-xl -rotate-1 rounded-xl border-2 border-dashed border-wine bg-white/80 px-4 py-3 font-hand text-xl text-wine sm:text-2xl">
          📎 {cfg.officialLabel}
        </p>
        <p className="mt-6 text-sm tracking-wide text-wine/70 italic">« {siteConfig.slogan} »</p>
      </section>

      <Reveal className="mx-auto mt-14 max-w-2xl px-5">
        <section aria-label={cfg.subjectTitle} className="paper relative p-7 pt-10 sm:p-10">
          <span className="tape" aria-hidden />
          <h2 className="mb-5 text-center font-display text-2xl font-bold text-wine sm:text-3xl">{cfg.subjectTitle}</h2>
          <dl className="space-y-3">
            {cfg.subject.map((row) => (
              <div key={row.label} className="flex flex-col gap-0.5 border-b border-dotted border-wine/30 pb-2 sm:flex-row sm:gap-3">
                <dt className="font-bold text-wine sm:w-48 sm:shrink-0">{row.label} :</dt>
                <dd className="font-hand text-2xl leading-6">{row.value}</dd>
              </div>
            ))}
          </dl>
          <span className="absolute -right-2 -bottom-4 rotate-12 text-5xl" aria-hidden>
            💅
          </span>
        </section>
      </Reveal>

      <div className="mt-12 text-center">
        <button className="btn btn-primary text-lg" onClick={() => go("dossier", true)}>
          {cfg.enterButton}
        </button>
      </div>

      <Reveal className="mt-16">
        <DivaButtons />
      </Reveal>
    </div>
  );
}
