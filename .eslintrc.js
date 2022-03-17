module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    Component: true,
    getCurrentPage: true,
    wx: true,
    getCurrentPages: true,
    Page: true,
    getApp: true,
    App: true,
    Behavior: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
  }
}
