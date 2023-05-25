"use client";

import { Box, SxProps, Theme } from "@mui/material";
import { Document, DocumentProps, Page, pdfjs } from "react-pdf";

import cx from "@/utils/cx";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface Props extends DocumentProps {
  sx?: SxProps<Theme>;
}

export default function PdfThumbnail({ sx, ...props }: Props) {
  const size = { width: 100, height: 56 };
  return (
    <Box
      sx={cx(
        {
          borderRadius: 1,
          mr: 2,
          ...size,
          overflow: "hidden",
          flexShrink: 0,
        },
        sx
      )}
    >
      <Document loading="" error="" {...props}>
        <Page
          pageNumber={1}
          width={size.width}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </Box>
  );
}
