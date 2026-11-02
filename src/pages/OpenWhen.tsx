import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config/site";
import { Modal, PageTitle, Reveal } from "../components/ui";

const cfg = siteConfig.openWhen;

type CameraState = "idle" | "requesting" | "ready" | "error";

function readEnvelopeIndexFromHash(): number | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace(/^#\/?/, "");
  const [route, query = ""] = hash.split("?");
  if (route !== "ouvrir") return null;

  const index = Number(new URLSearchParams(query).get("env"));
  if (!Number.isInteger(index) || index < 0 || index >= cfg.envelopes.length) {
    return null;
  }
  return index;
}

export function OpenWhen() {
  const [current, setCurrent] = useState<number | null>(() => readEnvelopeIndexFromHash());
  const [seen, setSeen] = useState<Set<number>>(new Set());
  const [showTeaser, setShowTeaser] = useState(true);
  const [copied, setCopied] = useState(false);
  const [cameraState, setCameraState] = useState<CameraState>("idle");
  const [cameraError, setCameraError] = useState("");
  const [selfie, setSelfie] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const cameraRequestRef = useRef(0);
  const env = current !== null ? cfg.envelopes[current] : null;

  const stopCamera = () => {
    cameraRequestRef.current += 1;
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    setCameraState("idle");
  };

  const resetSelfie = () => {
    stopCamera();
    setCameraError("");
    setSelfie(null);
  };

  useEffect(() => {
    const sync = () => {
      const next = readEnvelopeIndexFromHash();
      if (next === null) {
        resetSelfie();
        setCurrent(null);
        setShowTeaser(true);
        return;
      }
      if (next !== current) resetSelfie();
      setCurrent(next);
      setShowTeaser(true);
    };

    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [current]);

  useEffect(() => {
    if (cameraState !== "ready" || !videoRef.current || !streamRef.current) return;

    videoRef.current.srcObject = streamRef.current;
    void videoRef.current.play().catch(() => {
      stopCamera();
      setCameraError("La caméra ne peut pas afficher l’aperçu. Vérifie les autorisations de ton navigateur puis réessaie.");
      setCameraState("error");
    });
  }, [cameraState]);

  useEffect(
    () => () => {
      cameraRequestRef.current += 1;
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    },
    [],
  );

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const openEnvelope = (index: number) => {
    resetSelfie();
    window.location.hash = `#/ouvrir?env=${index}`;
    setCurrent(index);
    setSeen((s) => new Set(s).add(index));
    setShowTeaser(true);
  };

  const closeEnvelope = () => {
    resetSelfie();
    setCurrent(null);
    setShowTeaser(true);
    const hash = window.location.hash.replace(/^#/, "");
    if (hash.startsWith("/ouvrir") || hash === "ouvrir") {
      window.location.hash = "#/ouvrir";
    }
  };

  const startCamera = async () => {
    resetSelfie();
    setCameraState("requesting");
    setCameraError("");

    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
      setCameraError(
        "La caméra nécessite une connexion sécurisée (HTTPS) et un navigateur compatible. Ouvre le site avec son lien HTTPS sur ton téléphone.",
      );
      setCameraState("error");
      return;
    }

    const requestId = cameraRequestRef.current;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: { ideal: "user" }, width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      if (requestId !== cameraRequestRef.current) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }

      streamRef.current = stream;
      setCameraState("ready");
    } catch (error) {
      if (requestId !== cameraRequestRef.current) return;
      const name = error instanceof DOMException ? error.name : "";
      const message =
        name === "NotAllowedError" || name === "PermissionDeniedError"
          ? "L’accès à la caméra a été refusé. Autorise la caméra dans les réglages du navigateur pour prendre le selfie."
          : name === "NotFoundError" || name === "DevicesNotFoundError"
            ? "Aucune caméra n’a été détectée sur cet appareil."
            : name === "NotReadableError" || name === "TrackStartError"
              ? "La caméra est déjà utilisée par une autre application. Ferme-la puis réessaie."
              : "Impossible d’ouvrir la caméra. Vérifie ses autorisations et réessaie.";
      setCameraError(message);
      setCameraState("error");
    }
  };

  const captureSelfie = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || !video.videoWidth || !video.videoHeight) {
      setCameraError("L’aperçu n’est pas encore prêt. Attends un instant puis réessaie.");
      return;
    }

    try {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (!context) {
        setCameraError("La photo n’a pas pu être préparée. Réessaie avec un autre navigateur.");
        return;
      }
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setSelfie(canvas.toDataURL("image/jpeg", 0.88));
      setCameraError("");
      stopCamera();
    } catch {
      setCameraError("La photo n’a pas pu être prise. Vérifie l’accès à la caméra puis réessaie.");
    }
  };

  const shareEnvelope = async (index: number | null) => {
    if (index === null) return;
    const currentUrl = `${window.location.origin}${window.location.pathname}#/ouvrir?env=${index}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Message secret",
          text: cfg.envelopes[index].label,
          url: currentUrl,
        });
        return;
      }
    } catch {
      // L'utilisateur a annulé le partage, on bascule sur la copie du lien.
    }

    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
    } catch {
      window.prompt("Copie ce lien sur ton téléphone :", currentUrl);
    }
  };

  return (
    <div className="pb-24">
      <PageTitle kicker="💌 5 enveloppes">{cfg.title}</PageTitle>
      <p className="mb-10 text-center font-hand text-2xl text-wine">{cfg.hint}</p>
      <ul className="mx-auto grid max-w-4xl list-none gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {cfg.envelopes.map((e, i) => (
          <li key={i}>
            <Reveal delay={(i % 3) * 100}>
              <button
                onClick={() => openEnvelope(i)}
                className="relative block h-44 w-full overflow-hidden rounded-xl border-2 border-wine bg-powder p-4 text-center shadow-lg transition hover:-translate-y-1 hover:rotate-1"
              >
                <span className="absolute inset-x-0 top-0 h-20 bg-candy/35" style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }} aria-hidden />
                <span className="relative mt-6 block text-4xl" aria-hidden>
                  {seen.has(i) ? "💗" : e.emoji}
                </span>
                <span className="relative mt-3 block font-display text-lg leading-tight font-bold text-wine italic">{e.label}</span>
                {seen.has(i) && <span className="relative mt-1 block text-xs text-wine/70">déjà ouverte</span>}
              </button>
            </Reveal>
          </li>
        ))}
      </ul>
      <Modal open={env !== null} onClose={closeEnvelope} label={env?.label ?? "Message"}>
        {env && (
          <>
            {showTeaser && env.teaser ? (
              <>
                <p className="text-center font-display text-xs font-bold uppercase tracking-[0.28em] text-wine/70">
                  {env.teaser.kicker}
                </p>
                <div className="mt-4 rounded-[22px] border-2 border-candy/30 bg-candy/10 p-6 text-center shadow-inner">
                  <div className="mb-3 text-6xl" aria-hidden>{env.emoji}</div>
                  <h2 className="font-hand text-4xl text-wine">{env.teaser.title}</h2>
                  <div className="mt-4 flex justify-center gap-3 text-4xl" aria-hidden>
                    {env.teaser.faces.map((face, index) => (
                      <span key={index}>{face}</span>
                    ))}
                  </div>
                  <p className="mt-5 font-hand text-2xl leading-8 text-ink">{env.teaser.text}</p>
                </div>
                <section className="mt-6 text-center" aria-label="Défi selfie">
                  <p className="font-display font-bold text-wine">Défi : fais un selfie rigolo pour débloquer le message !</p>
                  <p className="mt-1 text-sm text-ink/70">
                    Fais une grimace, ton plus beau sourire ou ton air le plus dramatique. La photo reste sur cet appareil et n’est pas envoyée.
                  </p>
                  {cameraState === "ready" && (
                    <div className="mt-4">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        aria-label="Aperçu de la caméra pour le selfie"
                        className="mx-auto max-h-64 w-full max-w-sm rounded-2xl bg-ink object-cover"
                      />
                      <button className="btn mt-4" onClick={captureSelfie}>Prendre mon selfie 📸</button>
                    </div>
                  )}
                  {selfie && cameraState !== "ready" && (
                    <div className="mt-4">
                      <img
                        src={selfie}
                        alt="Aperçu du selfie pris pour débloquer le message"
                        className="mx-auto max-h-64 w-full max-w-sm rounded-2xl object-cover shadow-lg"
                      />
                      <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
                        <button className="btn btn-ghost" onClick={startCamera}>Reprendre le selfie</button>
                        <button className="btn" onClick={() => setShowTeaser(false)}>{env.teaser.button} 💌</button>
                      </div>
                    </div>
                  )}
                  {!selfie && cameraState !== "ready" && (
                    <button className="btn mt-4" onClick={startCamera} disabled={cameraState === "requesting"}>
                      {cameraState === "requesting" ? "Ouverture de la caméra…" : "Activer la caméra et faire mon selfie"}
                    </button>
                  )}
                  {cameraState === "error" && (
                    <p className="mt-3 text-sm text-red-700" role="alert">{cameraError}</p>
                  )}
                  {cameraState !== "ready" && (
                    <button className="btn btn-ghost mt-3 block w-full" onClick={() => shareEnvelope(current)}>
                      {copied ? "Lien copié" : "Partager le lien"}
                    </button>
                  )}
                  <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
                </section>
              </>
            ) : (
              <>
                <p className="pr-8 font-display text-2xl font-bold text-wine italic">
                  {env.emoji} {env.label}
                </p>
                <p className="mt-5 whitespace-pre-line font-hand text-3xl leading-8">{env.message}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <button className="btn" onClick={() => setShowTeaser(true)}>
                    {env.teaser?.button ?? "Voir le teaser"}
                  </button>
                  <button className="btn btn-ghost" onClick={() => shareEnvelope(current)}>
                    {copied ? "Lien copié" : "Partager le lien"}
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </Modal>
    </div>
  );
}
