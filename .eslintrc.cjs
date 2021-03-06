/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:testing-library/react",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jest", "testing-library"],
  rules: {
    indent: ["warn", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "import/extensions": [
      "error",
      {
        js: "always",
        json: "never",
      },
    ],
    // Disabled
    "import/no-extraneous-dependencies": "off",
    "dot-notation": "off",
    "class-methods-use-this": "off",
    "lines-between-class-members": 0,
    "no-plusplus": 0,
    "array-callback-return": 0,
    "no-param-reassign": 0,
    "object-shorthand": "off",
    // Warnings
    "prefer-destructuring": "warn",
    "import/no-cycle": "warn",
    "no-shadow": "warn",
    "consistent-return": "warn",
    "no-return-assign": "warn",
    // React Disabled
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off",
    // React Warnings
    "react-hooks/exhaustive-deps": "warn",
    "react/no-array-index-key": "warn",
  },
};
