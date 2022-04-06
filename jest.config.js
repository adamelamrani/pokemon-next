const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  collectCoverageFrom: [
    "./**/*.tsx",
    "./**/*.ts",
    "!**/_document.tsx",
    "!.next/**/*",
    "!coverage/**/*",
    "!tsconfig.json",
    "!jest.config.js",
    "!next.config.js",
    "!**/_app.tsx",
  ],
};
module.exports = createJestConfig(customJestConfig);
