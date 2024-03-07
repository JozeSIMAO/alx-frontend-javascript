module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    // Remove references to undefined rules
  },
};
