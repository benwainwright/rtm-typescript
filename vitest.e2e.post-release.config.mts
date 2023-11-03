import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    globalSetup: "./test-support/install-post-release.ts",
    setupFiles: "./test-support/setup-post-release-mock.ts",
    include: ["src/e2e-tests/**/*.spec.ts"],
  },
});
