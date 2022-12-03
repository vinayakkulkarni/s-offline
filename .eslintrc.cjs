module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser', // add the TypeScript parser
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    lib: ['es2022'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  plugins: ['svelte3', 'jsdoc', 'security', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jsdoc/recommended',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  settings: {
    'svelte3/typescript': () => require('typescript'), // pass the TypeScript package to the Svelte plugin
  },
};
