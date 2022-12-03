module.exports = {
  customSyntax: 'postcss-html',
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-recommended-scss',
  ],
  ignoreFiles: ['node_modules/*', 'src/assets/**'],
  rules: {
    'prettier/prettier': [
      true,
      {
        singleQuote: true,
        tabWidth: 2,
      },
    ],
  },
};
