import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    tailwindcss(), // Integrated Tailwind v4 plugin
  ],
  // Adjust base if deploying to GitHub Pages sub-folder
  base: "/",
});
