import { defineConfig } from "cypress";
import { downloadFile } from "cypress-downloadfile/lib/addPlugin";
import viewports from "cypress/fixtures/viewports.json";

export default defineConfig({
  projectId: "bzfyrk",
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://localhost:3000",
    scrollBehavior: "center",
    ...viewports.desktop,
    setupNodeEvents: (on) => {
      on("task", { downloadFile });
    },
  },
});
