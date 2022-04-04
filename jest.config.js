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
    "*/*.tsx",
    "*/*.ts",
    "!.next/**/*",
    "!coverage/**/*",
    "!jest.config.js",
    "!next.config.js",
    "!**/_app.tsx",
    "!src/mocks/*",
    "!src/interfaces/*",
  ],
};
module.exports = createJestConfig(customJestConfig);
