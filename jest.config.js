/** @type {import('jest').Config} */
const config = {
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist', '<rootDir>/.history'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', {
      babel: true,
      isolatedModules: true,
    }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(!(randstad-local-orbit)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  collectCoverageFrom: [
    '<rootDir>/src/components/**',
    '<rootDir>/src/hoc/**',
    '<rootDir>/src/hooks/**',
    '<rootDir>/src/utils/**',
    '!<rootDir>/src/**/*.types.d.ts',
    '!<rootDir>/src/**/*.d.ts',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/jestStyleMock.ts',
  },
};

module.exports = config;
