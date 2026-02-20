import type { Config } from 'jest'
global.React = require('react')

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/**/*.{ts,tsx}', '**/?(*.)+(spec|test).{ts,tsx}'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest for TypeScript files
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(styled-components|another-esm-module)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Optional: for custom matchers
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
}

export default config
