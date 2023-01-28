import { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module "@mui/material" {
  interface Palette {
    microsoft: PaletteColor
    oracle: PaletteColor
    udemy: PaletteColor
    enterpriseDb: PaletteColor
    mongoDb: PaletteColor
    dataCamp: PaletteColor
    google: PaletteColor
  }

  interface PaletteOptions {
    microsoft: PaletteColorOptions
    oracle: PaletteColorOptions
    udemy: PaletteColorOptions
    enterpriseDb: PaletteColorOptions
    mongoDb: PaletteColorOptions
    dataCamp: PaletteColorOptions
    google: PaletteColorOptions
  }

  interface TypeBackground {
    sectionPrimary: string,
    sectionSecondary: string,
    sectionTertiary: string
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    fontWeightExtraBold?: number;
  }

  interface Typography {
    fontWeightExtraBold: number;
  }
}