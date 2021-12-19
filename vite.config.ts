import { defineConfig } from "vite";
import { resolve } from "node:path";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      "@": `${resolve(__dirname, "src")}/`,
    },
  },
});
