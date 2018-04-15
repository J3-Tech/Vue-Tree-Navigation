module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['standard', 'prettier'],
  plugins: ['html'],
  globals: {
    context: true,
    jsdom: true,
  },
};
