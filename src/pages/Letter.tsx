import { useState } from "react";
import { siteConfig } from "../config/site";
import { PageTitle, Reveal } from "../components/ui";

const cfg = siteConfig.letter;

export function Letter() {
  const [open, setOpen] = useState(false);
  return (
    <div className="pb-24">
      <PageTitle kicker="💌 lecture privée">{cfg.title}</PageTitle>
      <div className="mx-auto max-w-2xl px-5">
        {!open && (
          <Reveal className="text-center">
            <button
              onClick={() => setOpen(true)}
              aria-label="Ouvrir l'enveloppe"
              className="letter-env group relative mx-auto block h-56 w-full max-w-sm rounded-xl border-2 border-wine bg-powder shadow-xl hover:-rotate-1 hover:scale-[1.03]"
            >
              <span className="absolute inset-0 overflow-hidden rounded-xl" aria-hidden>
                <span className="absolute inset-x-0 top-0 h-28 bg-candy/40" style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }} />
                <span className="absolute inset-0 bg-gradient-to-t from-wine/10 to-transparent" />
              </span>
              <span className="absolute top-20 left-1/2 -translate-x-1/2 text-5xl wiggle" aria-hidden>
                💗
              </span>
              <span className="absolute bottom-4 left-0 right-0 font-hand text-2xl text-wine">Pour Fana</span>
            </button>
            <p className="mt-5 font-hand text-2xl text-wine">{cfg.openHint}</p>
          </Reveal>
        )}
        {open && (
          <article aria-label="Lettre" className="pop paper relative px-7 pt-12 pb-10 sm:px-12">
            <span className="tape" aria-hidden />
            <div className="space-y-4 font-hand text-2xl leading-8 sm:text-3xl sm:leading-8">
              {cfg.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 text-right font-hand text-3xl text-wine">{cfg.signature}</p>
            <div className="mt-8 text-center">
              <button className="btn btn-ghost" onClick={() => setOpen(false)}>
                {cfg.closeLabel}
              </button>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
