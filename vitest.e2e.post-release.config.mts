import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    globalSetup: "./test-support/install-post-release.ts",
    setupFiles: "./test-support/setup-post-release-mock.mts",
    include: ["src/e2e-tests/**/*.spec.ts"],
  },
});
