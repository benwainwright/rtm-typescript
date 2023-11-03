import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/e2e-tests/**/*.spec.ts"],
  },
});
