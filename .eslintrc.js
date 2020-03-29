module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": false }],
    "no-extra-semi": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/no-empty-function": 0
  },
};