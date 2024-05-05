// @ts-nocheck
const nextJest = require("next/jest");

const createJestConfig = nextJest();

// Add any custom config to be passed to Jest
const customJestConfig = {
  testMatch: ["**/*.test.js", "**/*.test.ts", "**/*.test.tsx"],
  verbose: true,
  rootDir: "__tests__",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup-after-env.ts"],
};

module.exports = createJestConfig(customJestConfig);
