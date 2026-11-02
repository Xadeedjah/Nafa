import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { siteConfig } from "./config/site";

// Applique les couleurs du fichier de configuration
const c = siteConfig.colors;
const root = document.documentElement.style;
root.setProperty("--c-cream", c.cream);
root.setProperty("--c-powder", c.powder);
root.setProperty("--c-candy", c.candy);
root.setProperty("--c-wine", c.wine);
root.setProperty("--c-ink", c.ink);
document.title = `${siteConfig.name} ${siteConfig.emoji}`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
