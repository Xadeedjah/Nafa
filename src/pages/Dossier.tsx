import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config/site";
import { pick, useNav } from "../hooks";
import { Modal, PageTitle, Reveal } from "../components/ui";

const cfg = siteConfig.dossier;

/* ---------- B. Étude scientifique ---------- */
function Study() {
  const [step, setStep] = useState(-1); // -1 = pas lancé
  const [done, setDone] = useState(false);
  const timers = useRef<number[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = () => {
    timers.current.forEach(clearTimeout);
    setDone(false);
    setStep(0);
    cfg.studyResults.forEach((_, i) => {
      timers.current.push(window.setTimeout(() => setStep(i + 1), (i + 1) * 1100));
    });
    timers.current.push(window.setTimeout(() => setDone(true), (cfg.studyResults.length + 1) * 1100));
  };
  const running = step >= 0 && !done;

  return (
    <section aria-labelledby="study-t" className="paper mx-auto max-w-2xl p-7 sm:p-10">
      <h2 id="study-t" className="text-center font-display text-2xl font-bold text-wine sm:text-3xl">
        🔬 {cfg.studyTitle}
      </h2>
      <div className="mt-6 text-center">
        <button className="btn btn-primary" onClick={run} disabled={running}>
          {step >= 0 && !running ? "Relancer l'analyse" : cfg.studyButton}
        </button>
      </div>
      <div aria-live="polite" className="mt-6 space-y-4">
        {running && step === 0 && <p className="pop text-center font-hand text-2xl">{cfg.studyRunning}</p>}
        {cfg.studyResults.slice(0, Math.max(step, 0)).map((r, i) => (
          <div key={i} className="pop">
            <p className="font-bold">{r.text}</p>
            <div className="mt-1 h-3 overflow-hidden rounded-full bg-powder" role="presentation">
              <div
                className="h-full rounded-full bg-candy"
                style={{ width: `${r.value}%`, animation: "bar 0.9s ease-out" }}
              />
            </div>
          </div>
        ))}
      </div>
      {done && (
        <div className="mt-8 text-center">
          <span className="stamp text-xl sm:text-2xl">{cfg.stamp}</span>
        </div>
      )}
    </section>
  );
}

/* ---------- C. Compteur ---------- */
function Counter() {
  const [n, setN] = useState(0);
  const [msg, setMsg] = useState("");
  const [bump, setBump] = useState(0);
  return (
    <section aria-labelledby="cnt-t" className="paper mx-auto max-w-2xl p-7 text-center sm:p-10">
      <h2 id="cnt-t" className="font-display text-2xl font-bold text-wine sm:text-3xl">
        📈 {cfg.counterTitle}
      </h2>
      <p
        key={bump}
        aria-live="polite"
        className="pop my-4 font-display text-7xl font-bold text-candy"
        aria-label={`Compteur : ${n}`}
      >
        {n}
      </p>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          className="btn btn-primary"
          onClick={() => {
            setN((x) => x + 1);
            setMsg((m) => pick(cfg.counterReactions, m));
            setBump((b) => b + 1);
          }}
        >
          {cfg.counterButton}
        </button>
        <button
          className="btn btn-ghost"
          onClick={() => {
            setN(0);
            setMsg(cfg.counterZero);
            setBump((b) => b + 1);
          }}
        >
          {cfg.counterReset}
        </button>
      </div>
      <p aria-live="polite" className="mt-4 min-h-8 font-hand text-2xl text-wine">
        {msg}
      </p>
      <p className="mt-2 text-xs text-ink/60">{cfg.counterDisclaimer}</p>
    </section>
  );
}

/* ---------- D. Dossier confidentiel ---------- */
function Secret() {
  const [open, setOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const close = () => {
    setOpen(false);
    setAccepted(false);
  };
  return (
    <section className="mx-auto max-w-md text-center">
      <button
        onClick={() => setOpen(true)}
        className="group relative mx-auto block w-full rounded-2xl border-2 border-wine bg-[#f3d9a8] p-8 shadow-lg transition hover:-rotate-1 hover:scale-[1.02]"
      >
        <span className="absolute -top-3 left-6 rounded-t-lg border-2 border-b-0 border-wine bg-[#f3d9a8] px-4 py-1 text-xs font-bold">
          DOSSIER Nº 0001
        </span>
        <span className="text-5xl" aria-hidden>
          🗂️
        </span>
        <span className="mt-3 block font-bold tracking-wide text-wine uppercase">{cfg.secretTitle}</span>
        <span className="mt-2 block font-hand text-xl text-wine/80">{cfg.secretHint}</span>
        <span className="stamp absolute right-3 bottom-3 !border-2 !px-2 !py-0 text-xs">secret</span>
      </button>
      <Modal open={open} onClose={close} label="Dossier confidentiel">
        <h2 className="pr-8 font-display text-2xl font-bold text-wine">🔒 {cfg.secretTitle}</h2>
        <p className="mt-4 leading-8">{cfg.secretMessage}</p>
        {accepted ? (
          <div className="pop mt-6">
            <p className="sticker !text-2xl">{cfg.secretAfter}</p>
            <div className="mt-5">
              <button className="btn btn-ghost" onClick={close}>
                {cfg.secretClose}
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <button className="btn btn-primary" onClick={() => setAccepted(true)}>
              {cfg.secretAccept}
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}

/* ---------- Transition douce ---------- */
function Transition() {
  const { go } = useNav();
  return (
    <section className="mt-24 rounded-t-[3rem] bg-gradient-to-b from-transparent via-powder/60 to-powder px-5 py-24 text-center">
      <Reveal>
        <p className="font-display text-4xl font-bold text-wine italic sm:text-5xl">{cfg.transition.line1}</p>
      </Reveal>
      <Reveal delay={900}>
        <p className="mx-auto mt-8 max-w-xl font-hand text-3xl leading-9 text-wine sm:text-4xl">{cfg.transition.line2}</p>
      </Reveal>
      <Reveal delay={1800}>
        <button className="btn btn-primary mt-12" onClick={() => go("lettre")}>
          {cfg.transition.button}
        </button>
      </Reveal>
    </section>
  );
}

export function Dossier() {
  return (
    <div>
      <PageTitle kicker="pièces à conviction">Le dossier Fana</PageTitle>
      <div className="space-y-12 px-5 pb-6">
        <Reveal>
          <Study />
        </Reveal>
        <Reveal>
          <Counter />
        </Reveal>
        <Reveal>
          <Secret />
        </Reveal>
      </div>
      <Transition />
    </div>
  );
}
