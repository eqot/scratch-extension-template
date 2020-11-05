module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [2571],
      },
    },
  },
  moduleNameMapper: {
    '\\.(png|jpe?g|gif|svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
  coverageDirectory: 'coverage',
};
