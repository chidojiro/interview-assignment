/** @type {import('jest').Config} */
const config = {
  moduleDirectories: ["<rootDir>/src", "node_modules"],
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist", "<rootDir>/.history"],
  moduleNameMapper: {
    "^@hoc/(.*)$": ["<rootDir>/src/hoc/$1"],
    "^@hooks/(.*)$": ["<rootDir>/src/hooks/$1"],
    "^@components/(.*)$": ["<rootDir>/src/components/$1"],
    "^@utils/(.*)$": ["<rootDir>/src/utils/$1"],
    "^~": ["<rootDir>/$1"],
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

module.exports = config;
