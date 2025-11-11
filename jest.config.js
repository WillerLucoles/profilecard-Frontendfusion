// jest.config.js

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  
  testEnvironment: 'jest-environment-jsdom',  
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', 

    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  }, 

  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
};

module.exports = createJestConfig(customJestConfig);