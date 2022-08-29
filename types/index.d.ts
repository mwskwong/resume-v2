/// <reference types="@welldone-software/why-did-you-render" />

import { SxProps, Theme } from "@mui/material";

export type SectionId = "home" | "about" | "experience" | "education" | "contact"

export type SectionProps = { sx?: SxProps<Theme> }

export type UseSx = (sx?: SxProps<Theme>) => Record<string, SxProps<Theme> | typeof sx>
