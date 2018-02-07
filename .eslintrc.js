module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: 'eslint-config-genius',
  plugins: [
    'html'
  ],
  rules: {
    quotes: ['error', 'single']
  },
  globals: {
    context: false
  }
}
