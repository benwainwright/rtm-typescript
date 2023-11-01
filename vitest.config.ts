import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      all: true,
      include: ["src/**/*.ts"],
      provider: "istanbul",
      cleanOnRerun: true,
      thresholdAutoUpdate: true,
      functions: 82.35,
      lines: 86.36,
      statements: 86.66,
      branches: 92.85,
    },
  },
});
