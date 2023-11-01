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
      functions: 94.11,
      lines: 90.9,
      statements: 91.11,
      branches: 92.85,
    },
  },
});
