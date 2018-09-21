module.exports = {
  extends: "airbnb",
  globals: {
    document: true
  },
  overrides: [{
    files: [
      "**/*.test.js",
      "**/*.test.jsx"
    ],
    env: {
      jest: true
    },
    plugins: ["jest"],
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error"
    }
  }]
}
