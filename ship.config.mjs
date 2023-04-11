export default {
  installCommand: () => 'npm i --prefer-offline --no-audit --omit=optional',
  publishCommand: () => 'cd dist && npm publish --tag latest',
};
