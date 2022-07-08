import nextJest from 'next/jest'

const isDev = process.env.DEV === 'true'
// Sync object
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  collectCoverage: isDev ? false : true,
  coverageReporters: ['json', 'text', 'html', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*/*.d.ts',
    '!src/**/*/Loadable.{js,jsx,ts,tsx}',
    '!src/**/*/types.ts',
    '!src/**/store.ts',
    '!src/index.tsx',
    '!src/serviceWorker.ts',
    '!<rootDir>/node_modules/',
    '!**/templates/**',
    '!**/template/**',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/'],
  // Add more setup options before each test is run
  testMatch: ['**/*.test.tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['cypress'],
}

module.exports = createJestConfig(customJestConfig)
