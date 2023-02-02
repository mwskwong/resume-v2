import { defineConfig } from "cypress";
import viewports from "cypress/e2e/viewports";

export default defineConfig({
  projectId: "bzfyrk",
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://localhost:3000",
    scrollBehavior: "center",
    ...viewports.desktop
  }
});