module.exports = {
    extends: 'airbnb-base',
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
    },
};  
