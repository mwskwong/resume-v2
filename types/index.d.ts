import type { SxProps, Theme } from "@mui/material";
import type { StaticImageData } from "next/future/image";

export type SectionId = "home" | "about" | "experience" | "education" | "contact"

export type SectionProps = { sx?: SxProps<Theme> }

export type UseSx = (sx?: SxProps<Theme>) => Record<string, SxProps<Theme> | typeof sx>

export type SupportingDocument = {
  name?: string,
  url?: string,
  thumbnail?: StaticImageData
}
