module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "@vue/typescript/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
  },
  plugins: ["import-alias"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "consistent-return": "off",
    "default-case": "off",
    "func-names": ["error", "as-needed"],
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    "max-len": "off",
    "no-confusing-arrow": "off",
    "object-curly-newline": 0,
    "operator-linebreak": "off",
    "vue/attribute-hyphenation": ["error", "never"],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true,
      },
    ],
    "vue/custom-event-name-casing": "off",
    "vue/require-default-prop": "off",
  },
  settings: {
    "import/resolver": [
      "node",
      {
        alias: {
          map: [["@", "./src"]],
          extensions: [".ts"],
        },
      },
    ],
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
