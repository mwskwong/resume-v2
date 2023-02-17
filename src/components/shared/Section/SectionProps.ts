import { BoxProps  } from "@mui/material";


interface SectionProps extends BoxProps {
  variant?: "default" | "primary" | "secondary" | "tertiary";
  fullHeight?: boolean;
}

export default SectionProps;
