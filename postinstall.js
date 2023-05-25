/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

fs.copyFileSync(
  path.join(__dirname, "./node_modules/pdfjs-dist/build/pdf.worker.js"),
  path.join(__dirname, "./public/pdf.worker.js")
);
