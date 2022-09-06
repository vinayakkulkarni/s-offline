module.exports = {
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
  ],
  ignoreFiles: [
    'node_modules/*',
    'src/assets/**',
    'build/**',
    'src/lib/styles/normalise.css',
  ],
  defaultSeverity: 'error',
  customSyntax: 'postcss-html',
  rules: {},
};
