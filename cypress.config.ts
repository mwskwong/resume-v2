import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "bzfyrk",
  e2e: {
    baseUrl: "http://localhost:3000"
  }
});
