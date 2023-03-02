module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "next/core-web-vitals",    
    "plugin:chai-friendly/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "simple-import-sort",
    "unused-imports"
  ],
  "root": true,
  "rules": {
    "comma-dangle": "off",
    "indent": "off",
    "quotes": "off",
    "semi": "off",
    "no-unused-expressions": "off",

    "linebreak-style": [
      "warn",
      process.platform === "win32" ? "windows" : "unix"
    ],
    "no-floating-decimal": "warn",
    "no-multiple-empty-lines": [
      "warn",
      { "max": 1, "maxBOF": 0, "maxEOF": 0 }
    ],
    "eol-last": "warn",

    "@typescript-eslint/comma-dangle": "warn",
    "@typescript-eslint/indent": [
      "warn",
      2,
      { "SwitchCase": 1 }
    ],
    "@typescript-eslint/quotes": "warn",
    "@typescript-eslint/semi": "warn",
    "@typescript-eslint/member-delimiter-style": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "unused-imports/no-unused-imports": "warn"
  },
  "overrides": [
    {
      "files": ["*.cy.ts"],
      "rules": {
        "@typescript-eslint/no-unused-expressions": "off"
      }
    }
  ]
};
