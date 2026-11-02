import { useState } from "react";
import { siteConfig } from "../config/site";
import { PetalRain } from "../components/ui";

const cfg = siteConfig.final;

export function Final() {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <div className="flex min-h-screen items-center justify-center px-5 pt-24 pb-28">
      {!unlocked ? (
        <section className="paper mx-auto max-w-lg p-8 text-center">
          <p className="text-7xl wiggle" aria-hidden>
            🔒
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold text-wine italic">{cfg.lockedTitle}</h1>
          <p className="mt-3 text-lg">{cfg.lockedText}</p>
          <button className="btn btn-primary mt-8" onClick={() => setUnlocked(true)}>
            {cfg.unlockButton}
          </button>
        </section>
      ) : (
        <>
          <PetalRain />
          <article className="pop paper relative z-10 mx-auto max-w-2xl px-7 pt-12 pb-10 sm:px-12">
            <span className="tape" aria-hidden />
            <h1 className="text-center font-display text-4xl font-bold text-wine italic sm:text-5xl">
              {cfg.title} <span aria-hidden>🌸</span>
            </h1>
            <div className="mt-8 space-y-4 font-hand text-2xl leading-8 sm:text-3xl">
              {cfg.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 text-right font-hand text-3xl text-wine">{cfg.signature}</p>
            <p className="mt-6 text-center text-4xl" aria-hidden>
              {siteConfig.emoji}
            </p>
          </article>
        </>
      )}
    </div>
  );
}
