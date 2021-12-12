module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // Vue
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: true,
      },
    ],
    'max-lines': ['error', {
      max: 500,
      skipComments: true,
      skipBlankLines: true,
    }],
    // TypeScript
    // quotes: ['warn', 'single', { avoidEscape: true }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],


    // "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}]
  },
};
