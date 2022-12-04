export default {
  installCommand: () => 'npm i --prefer-offline --no-audit --no-optional',
  publishCommand: () => 'npm run package && npm publish --tag latest ./dist',
};
