export default {
  installCommand: () => 'npm i --prefer-offline --no-audit',
  beforePublish: () => 'npm run prepublishOnly',
};
