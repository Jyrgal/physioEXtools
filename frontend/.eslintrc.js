module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'object-curly-newline': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/react-in-jsx-scope': 'off',
    'max-len': 'off',
    radix: 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    '@typescript-eslint/no-unused-expressions': 'off',
    'react/no-unescaped-entities': 'off',
    'max-classes-per-file': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
};
