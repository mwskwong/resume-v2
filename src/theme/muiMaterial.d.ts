import { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module "@mui/material" {
  interface Palette {
    dataCamp: PaletteColor;
    enterpriseDb: PaletteColor;
    google: PaletteColor;
    microsoft: PaletteColor;
    mongoDb: PaletteColor;
    oracle: PaletteColor;
    udemy: PaletteColor;
  }

  interface PaletteOptions {
    dataCamp: PaletteColorOptions;
    enterpriseDb: PaletteColorOptions;
    google: PaletteColorOptions;
    microsoft: PaletteColorOptions;
    mongoDb: PaletteColorOptions;
    oracle: PaletteColorOptions;
    udemy: PaletteColorOptions;
  }

  interface TypeBackground {
    sectionPrimary: string;
    sectionSecondary: string;
    sectionTertiary: string;
  }

  interface TypographyVariantsOptions {
    fontWeightExtraBold: number;
  }

  interface TypographyVariants {
    fontWeightExtraBold: number;
  }
}
