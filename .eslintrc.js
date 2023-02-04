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
    "comma-dangle": "error",
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix"
    ],
    "quotes": "error",
    "semi": "error",
    "no-floating-decimal": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error"
  }
};
