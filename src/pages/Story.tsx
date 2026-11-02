import { siteConfig } from "../config/site";
import { PageTitle, Photo, Reveal } from "../components/ui";

const cfg = siteConfig.story;
const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];

export function Story() {
  return (
    <div className="pb-24">
      <PageTitle kicker="📸 pièces à conviction, partie 2">{cfg.title}</PageTitle>
      {cfg.intro && <p className="mx-auto mb-10 max-w-xl px-5 text-center font-hand text-2xl">{cfg.intro}</p>}
      <ul className="mx-auto grid max-w-5xl list-none gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {cfg.photos.map((p, i) => (
          <li key={i}>
            <Reveal delay={(i % 3) * 120}>
              <figure
                className={`relative mx-auto max-w-xs bg-white p-3 pb-5 shadow-xl transition hover:z-10 hover:rotate-0 hover:scale-105 ${tilts[i % tilts.length]}`}
              >
                <span className="tape" aria-hidden />
                <div className="aspect-square overflow-hidden bg-powder">
                  <Photo src={p.src} alt={p.caption} />
                </div>
                <figcaption className="mt-3 text-center font-hand text-2xl text-wine">{p.caption}</figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
