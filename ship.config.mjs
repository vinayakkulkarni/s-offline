export default {
  installCommand: () => 'npm i --prefer-offline --no-audit',
  publishCommand: () => 'cd dist && npm publish --tag latest',
};
