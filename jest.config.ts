//npm install ts-node typescript --save-dev
// npm install jest-environment-jsdom --save-dev


import type { Config } from '@jest/types';

// const baseDir = '<rootDir>/src/components';
// const baseTestDir = '<rootDir>/src/test';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>src/components/**/*.tsx',],
    testMatch: ['<rootDir>src/test/**/*.test.tsx'],
    // transform: {
    //     '^.+\\.(ts|tsx)$': 'ts-jest',  // Se till att jest använder ts-jest för TypeScript-filer
    // },
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.jest.json' }],
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.js',
      },
}

export default config;