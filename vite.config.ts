import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    svgr({
      // preventing conflicts with standard SVG image imports
      include: "**/*.svg?react",
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    // This replaces the vite-tsconfig-paths plugin
    tsconfigPaths: true,
  },
  base: "/",
});
