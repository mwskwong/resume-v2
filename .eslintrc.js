module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict",
    "next/core-web-vitals"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint",
    "simple-import-sort",
    "import",
    "unused-imports"
  ],
  "rules": {
    "comma-dangle": "warn",
    "indent": [
      "warn",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "warn",
      process.platform === "win32" ? "windows" : "unix"
    ],
    "quotes": "warn",
    "semi": "warn",
    "no-floating-decimal": "warn",
    "no-multiple-empty-lines": [
      "warn",
      { "max": 1, "maxBOF": 0, "maxEOF": 0 }
    ],
    "eol-last": "warn",
    "@typescript-eslint/member-delimiter-style": "warn",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "warn",
    "unused-imports/no-unused-imports": "warn"
  }
};
