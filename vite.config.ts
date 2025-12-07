import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // WAŻNE: To musi pasować do nazwy Twojego repozytorium na GitHub
  base: "/mgokis-staporkow/",

  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // Wskazujemy, że pliki źródłowe strony są w folderze client
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // Budujemy stronę do głównego folderu "dist"
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});