import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    assetsDir: "assets", // Set the output directory for compiled assets
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]", // Configure the asset file names
      },
    },
  },
});
