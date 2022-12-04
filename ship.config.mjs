export default {
  installCommand: () => 'npm i --prefer-offline --no-audit --omit=optional',
  buildCommand: () => 'npm run package',
  publishCommand: () => 'cd dist && npm publish --tag latest',
};
