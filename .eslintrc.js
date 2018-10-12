module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    'cypress/globals': true,
  },
  extends: ['standard', 'prettier'],
  plugins: ['html', 'cypress'],
  globals: {
    context: true,
    jsdom: true,
  },
};
