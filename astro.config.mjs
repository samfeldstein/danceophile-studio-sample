import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: { host: true },
  // Prefetch all links by default
  prefetch: {
    prefetchAll: true
  }
});
