import { Document, DocumentProps, Page } from "react-pdf";

import styles from "./pdf-thumbnail.module.css";

export default function PdfThumbnail(props: DocumentProps) {
  return (
    <Document loading="" error="" className={styles.document} {...props}>
      <Page
        pageNumber={1}
        width={100}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </Document>
  );
}
