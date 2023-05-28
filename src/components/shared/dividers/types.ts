import { TypeBackground } from "@mui/material";

export interface SectionDividerProps {
  sectionVariants?: {
    previous?: keyof TypeBackground;
    next?: keyof TypeBackground;
  };
}
