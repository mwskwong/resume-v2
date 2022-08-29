import { ThemeOptions, alpha, darken, lighten } from "@mui/material";
import { siEnterprisedb, siMicrosoft, siMongodb, siOracle, siUdemy } from "simple-icons/icons";

import defaultTheme from "./defaultTheme";
import systemFonts from "./systemFonts";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    microsoft: PaletteColor
    oracle: PaletteColor
    udemy: PaletteColor
    enterpriseDb: PaletteColor
    mongoDb: PaletteColor
  }

  interface PaletteOptions {
    microsoft: PaletteColorOptions
    oracle: PaletteColorOptions
    udemy: PaletteColorOptions
    enterpriseDb: PaletteColorOptions
    mongoDb: PaletteColorOptions
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

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027"
};

const designTokens: Omit<ThemeOptions, "components"> = {
  unstable_strictMode: true,
  palette: {
    common: {
      black: grey[900]
    },
    primary: {
      main: "#006EDB"
    },
    error: {
      main: "#EB0014"
    },
    warning: {
      main: "#DEA500"
    },
    success: {
      main: "#1AA251"
    },
    enterpriseDb: {
      main: darken(`#${siEnterprisedb.hex}`, .19)
    },
    mongoDb: {
      main: darken(`#${siMongodb.hex}`, .23)
    },
    microsoft: {
      main: `#${siMicrosoft.hex}`
    },
    oracle: {
      main: darken(`#${siOracle.hex}`, .11)
    },
    udemy: {
      main: darken(`#${siUdemy.hex}`, .03)
    },
    grey,
    text: {
      primary: grey[900],
      secondary: grey[700]
    },
    divider: grey[300],
    background: {
      sectionPrimary: lighten(grey[50], .5),
      sectionSecondary: grey[50],
      sectionTertiary: darken(grey[50], .02)
    },
    action: {
      active: grey[900],
      hover: alpha(grey[900], .04),
      selected: alpha(grey[900], .08),
      disabled: alpha(grey[900], .26),
      disabledBackground: alpha(grey[900], .12),
      focus: alpha(grey[900], .12)
    }
  },
  spacing: 10,
  shape: {
    borderRadius: 10
  },
  typography: {
    fontFamily: systemFonts.join(","),
    fontWeightExtraBold: 800,
    h1: {
      fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
      fontWeight: 800,
      lineHeight: 78 / 70
    },
    h2: {
      fontSize: "clamp(1.5rem, .9643rem + 1.4286vw, 2.25rem)",
      fontWeight: 800,
      lineHeight: 44 / 36
    },
    h3: {
      fontSize: defaultTheme.typography.pxToRem(36),
      lineHeight: 44 / 36,
      letterSpacing: 0.2
    },
    h4: {
      fontSize: defaultTheme.typography.pxToRem(28),
      lineHeight: 42 / 28,
      letterSpacing: 0.2
    },
    h5: {
      fontSize: defaultTheme.typography.pxToRem(24),
      lineHeight: 36 / 24,
      letterSpacing: 0.1
    },
    h6: {
      fontSize: defaultTheme.typography.pxToRem(20),
      lineHeight: 30 / 20
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 700,
      letterSpacing: 0
    },
    subtitle1: {
      fontSize: defaultTheme.typography.pxToRem(18),
      lineHeight: 24 / 18,
      letterSpacing: 0,
      fontWeight: 500
    },
    body1: {
      fontSize: defaultTheme.typography.pxToRem(16),
      lineHeight: 24 / 16,
      letterSpacing: 0
    },
    body2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      lineHeight: 21 / 14,
      letterSpacing: 0
    },
    caption: {
      display: "inline-block",
      fontSize: defaultTheme.typography.pxToRem(12),
      lineHeight: 18 / 12,
      letterSpacing: 0,
      fontWeight: 700
    }
  }
};

export default designTokens;