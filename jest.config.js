module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/modules/**/*.module.ts',
    '!<rootDir>/src/swagger-config/swagger-config.ts',
    '!<rootDir>/src/common/**/*.ts',
    '!<rootDir>/src/decorators/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
