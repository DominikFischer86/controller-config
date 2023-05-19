import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginChecker from 'vite-plugin-checker';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginChecker({ typescript: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
