module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    // 参考: https://qiita.com/madono/items/a134e904e891c5cb1d20
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    // "plugin:react/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    // "react-hooks"
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn"
  },
};
