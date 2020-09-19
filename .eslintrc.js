module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: { 'no-console': 1, 'no-unused-vars': 2 },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
