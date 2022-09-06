module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser', // add the TypeScript parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    lib: ['es2020'],
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  plugins: ['svelte3', 'security', 'jsdoc', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jsdoc/recommended',
    'plugin:security/recommended',
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
