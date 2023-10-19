import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '2ufnpt',
  e2e: {
    baseUrl: 'http://localhost:5173/',
  },
});
