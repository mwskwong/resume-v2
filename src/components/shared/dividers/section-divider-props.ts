import { TypeBackground } from "@mui/material";

interface SectionDividerProps {
  sectionVariants?: {
    previous?: keyof TypeBackground;
    next?: keyof TypeBackground;
  };
}

export default SectionDividerProps;
