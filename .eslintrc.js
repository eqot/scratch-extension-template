module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'no-unused-vars': 'off',
    'no-unexpected-multiline': 'error',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'comma-dangle': ['error', 'only-multiline'],
    'arrow-parens': ['error', 'always'],
    camelcase: ['error', { ignoreDestructuring: true }],
    'no-warning-comments': 'error',
    'valid-jsdoc': [
      'error',
      {
        requireReturn: false,
        requireParamType: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-var-requires': 'off',
  },
};
