import type { SxProps, Theme } from "@mui/material";
import type { StaticImageData } from "next/image";

export type SectionId = "home" | "about" | "experience" | "education" | "contact"

export type SectionProps = { sx?: SxProps<Theme> }

export type SupportingDocument = {
  name?: string,
  url?: string,
  thumbnail?: StaticImageData
}
