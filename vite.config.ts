import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Prerender from "vite-plugin-prerender";

// Routes to pre-render for SEO
const routesToPrerender = ["/", "/about", "/treatments", "/gallery", "/contact"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      Prerender({
        staticDir: path.resolve(__dirname, "dist"),
        routes: routesToPrerender,
        renderer: {
          type: "puppeteer",
          renderAfterDocumentEvent: "render-event",
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
