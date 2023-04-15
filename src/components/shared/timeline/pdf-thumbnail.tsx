"use client";

import { Box, SxProps, Theme } from "@mui/material";
import { DocumentProps } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

import cx from "@/utils/cx";

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
