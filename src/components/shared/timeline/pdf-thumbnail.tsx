import { SxProps, Theme, styled } from "@mui/material";
import { DocumentProps, Page, Document as PdfDocument } from "react-pdf";

import cx from "@/utils/cx";

interface Props extends DocumentProps {
  sx?: SxProps<Theme>;
}

const Document = styled(PdfDocument)``;

export default function PdfThumbnail({ sx, ...props }: Props) {
  return (
    <Document
      loading=""
      error=""
      sx={cx(
        {
          borderRadius: 1,
          mr: 2,
          width: 100,
          height: 56,
          overflow: "hidden",
          flexShrink: 0,
        },
        sx
      )}
      {...props}
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
