/** @type {import('jest').Config} */
const config = {
  moduleDirectories: ["<rootDir>/src", "node_modules"],
  moduleNameMapper: {
    "^@hoc/(.*)$": ["<rootDir>/src/hoc/$1"],
    "^@hooks/(.*)$": ["<rootDir>/src/hooks/$1"],
    "^@components/(.*)$": ["<rootDir>/src/components/$1"],
    "^@utils/(.*)$": ["<rootDir>/src/utils/$1"],
  },
};

module.exports = config;
