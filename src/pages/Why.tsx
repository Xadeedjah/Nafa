import { useState } from "react";
import { siteConfig } from "../config/site";
import { PageTitle, Reveal } from "../components/ui";

const cfg = siteConfig.why;

function FlipCard({ card }: { card: (typeof cfg.cards)[number] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className={`flip block w-full text-left ${flipped ? "is-flipped" : ""}`}
    >
      <span className="flip-inner block min-h-60">
        <span className="flip-face paper flex min-h-60 flex-col items-center justify-center gap-3 p-6 text-center">
          <span className="text-5xl" aria-hidden>
            {card.emoji}
          </span>
          <span className="font-display text-2xl font-bold text-wine italic">{card.front}</span>
          {card.exemple && <span className="sticker !text-base">EXEMPLE TEMPORAIRE</span>}
          <span className="text-sm text-ink/60">toucher pour retourner</span>
        </span>
        <span className="flip-face flip-back flex flex-col items-center justify-center gap-3 rounded-[18px] bg-candy p-6 text-center text-white shadow-xl">
          <span className="font-hand text-2xl leading-7">{card.back}</span>
        </span>
      </span>
    </button>
  );
}

export function Why() {
  return (
    <div className="pb-24">
      <PageTitle kicker="💅 liste non exhaustive">{cfg.title}</PageTitle>
      <p className="mb-10 text-center font-hand text-2xl text-wine">{cfg.hint}</p>
      <ul className="mx-auto grid max-w-5xl list-none gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {cfg.cards.map((c, i) => (
          <li key={i}>
            <Reveal delay={(i % 3) * 100}>
              <FlipCard card={c} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
