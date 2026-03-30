import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: ["tests/unit/**/*.test.ts"],
    exclude: ["tests/smoke/**/*.spec.ts", "node_modules/**", "dist/**"],
  },
});
