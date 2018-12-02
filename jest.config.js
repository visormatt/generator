/**
 * @external https://goo.gl/fhrRke
 * @description We store all of our JEST configuration in here vs. our
 * package.json as we require a fair amount of configuration
 */
module.exports = {
  // https://goo.gl/oD765e
  automock: false,

  // https://goo.gl/hbjyKW
  collectCoverage: false,

  // https://goo.gl/VBULZE
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.ts',
    'src/**/*.tsx',

    // Ignore our test & CSS types
    '!*.css.d.ts',
    '!*.test.js'
  ],

  // https://goo.gl/6ydeXP
  coverageDirectory: '<rootDir>/coverage',

  // https://goo.gl/pMhCGx
  coverageReporters: ['lcov', 'json'],

  // https://goo.gl/v7RLxT
  coverageThreshold: {
    global: {
      branches: 45,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },

  // https://goo.gl/LFWXti
  globals: {
    mount: true,
    render: true,
    shallow: true,

    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },

  // https://goo.gl/fhrRke
  moduleDirectories: ['node_modules'],

  // https://goo.gl/PoKsCn
  moduleFileExtensions: ['css', 'js', 'jsx', 'json', 'node', 'ts', 'tsx'],

  // https://goo.gl/tMECYz
  moduleNameMapper: {},

  // https://goo.gl/g2ZT3t
  modulePathIgnorePatterns: ['<rootDir>/templates'],

  // https://goo.gl/HKbnPx
  reporters: ['default'],

  // https://goo.gl/cLJNLu
  setupFiles: [],

  // https://goo.gl/x1mEBC
  testMatch: ['<rootDir>/**/*.test.js', '<rootDir>/**/*.test.ts'],

  // https://goo.gl/qoKy1U
  transform: {
    '^.+\\.js$': 'ts-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },

  // https://goo.gl/3j69X7
  transformIgnorePatterns: [
    // 'node_modules/(?!(@thredup)/)'
  ],

  // https://goo.gl/8hnQTn
  verbose: false
};
