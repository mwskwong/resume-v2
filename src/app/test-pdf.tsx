"use client";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

import styles from "./test-pdf.module.css";

export default function TestPdf() {
  return (
    <Document
      file={
        "//assets.ctfassets.net/q95r71b1uue1/1HS8NKnrBtFM1xhDHA7uAV/78dcc97137000aad5d230077b95601cc/lunch_and_learn.pdf"
      }
      loading=""
      error=""
      className={styles.testPdf}
    >
      <Page
        pageNumber={1}
        width={100}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </Document>
  );
}
