/** @type {import('jest').Config} */
const config = {
  moduleDirectories: ["<rootDir>/src", "node_modules"],
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist", "<rootDir>/.history"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

module.exports = config;
