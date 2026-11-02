import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// base "./" : le site fonctionne sur n'importe quel hébergement statique (Netlify, Vercel, GitHub Pages…)
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), ...(process.env.SINGLE ? [viteSingleFile()] : [])],
});
