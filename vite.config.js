import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    allowedHosts: 'all'
  },
  preview: {
    host: true,
    port: 3000,
    allowedHosts: 'all'
  }
});
