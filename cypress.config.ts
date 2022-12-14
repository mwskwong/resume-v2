import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "bzfyrk",
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://localhost:3000",
    scrollBehavior: "center",
    viewportWidth: 1920,
    viewportHeight: 1080
  }
});