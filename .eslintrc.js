module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "next/core-web-vitals",
    "plugin:chai-friendly/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "warn"
  },
  overrides: [
    {
      files: ["*.cy.ts"],
      rules: {
        "@typescript-eslint/no-unused-expressions": "off"
      }
    }
  ]
};
