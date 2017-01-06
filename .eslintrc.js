module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  globals: {
    atob: true,
    btoa: true,
    FileReader: true,
    ga: true,
    localStorage: true,
  },
  rules: {
    'no-underscore-dangle': [0],
    'max-len': [0],
  },
  plugins: [
    'vue',
  ],
};
