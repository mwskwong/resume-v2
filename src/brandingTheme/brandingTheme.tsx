import "@mui/material/themeCssVarsAugmentation";
import "@mui/lab/themeAugmentation";
import "@fontsource/rubik/variable.css";

import { alpha, darken, experimental_extendTheme as extendTheme, lighten } from "@mui/material";
import { siDatacamp, siEnterprisedb, siMicrosoft, siMongodb, siOracle, siUdemy } from "simple-icons/icons";

import { ErrorOutlineRounded as ErrorOutline } from "@mui/icons-material";
import systemFonts from "./systemFonts";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    microsoft: PaletteColor
    oracle: PaletteColor
    udemy: PaletteColor
    enterpriseDB: PaletteColor
    mongoDB: PaletteColor
    datacamp: PaletteColor
  }

  interface PaletteOptions {
    microsoft: PaletteColorOptions
    oracle: PaletteColorOptions
    udemy: PaletteColorOptions
    enterpriseDB: PaletteColorOptions
    mongoDB: PaletteColorOptions
    datacamp: PaletteColorOptions
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

const pxToRem = (size: number) => `${(size / 16)}rem`;

const brandingTheme = extendTheme({
  unstable_strictMode: true,
  colorSchemes: {
    light: {
      palette: {
        common: { black: grey[900] },
        primary: { main: "#006EDB" },
        error: { main: "#EB0014" },
        warning: { main: "#DEA500" },
        success: { main: "#1AA251" },
        enterpriseDB: {
          main: `#${siEnterprisedb.hex}`,
          dark: darken(`#${siEnterprisedb.hex}`, .19)
        },
        mongoDB: {
          main: `#${siMongodb.hex}`,
          dark: darken(`#${siMongodb.hex}`, .23)
        },
        microsoft: {
          main: `#${siMicrosoft.hex}`,
          dark: `#${siMicrosoft.hex}`
        },
        oracle: {
          main: `#${siOracle.hex}`,
          dark: darken(`#${siOracle.hex}`, .11)
        },
        udemy: {
          main: `#${siUdemy.hex}`,
          dark: darken(`#${siUdemy.hex}`, .03)
        },
        datacamp: {
          main: `#${siDatacamp.hex}`,
          dark: darken(`#${siDatacamp.hex}`, .465)
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
      }
    }
  },
  spacing: 10,
  shape: { borderRadius: 10 },
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
      fontSize: pxToRem(36),
      lineHeight: 44 / 36,
      letterSpacing: 0.2
    },
    h4: {
      fontSize: pxToRem(28),
      lineHeight: 42 / 28,
      letterSpacing: 0.2
    },
    h5: {
      fontSize: pxToRem(24),
      lineHeight: 36 / 24,
      letterSpacing: 0.1
    },
    h6: {
      fontSize: pxToRem(20),
      lineHeight: 30 / 20
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 700,
      letterSpacing: 0
    },
    subtitle1: {
      fontSize: pxToRem(18),
      lineHeight: 24 / 18,
      letterSpacing: 0,
      fontWeight: 500
    },
    body1: {
      fontSize: pxToRem(16),
      lineHeight: 24 / 16,
      letterSpacing: 0
    },
    body2: {
      fontSize: pxToRem(14),
      lineHeight: 21 / 14,
      letterSpacing: 0
    },
    caption: {
      display: "inline-block",
      fontSize: pxToRem(12),
      lineHeight: 18 / 12,
      letterSpacing: 0,
      fontWeight: 700
    }
  },
  components: {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: <ErrorOutline fontSize="inherit" />
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: `rgba(${theme.vars.palette.background.default}, .7)`,
          backgroundImage: "none",
          boxShadow: "none",
          backdropFilter: "blur(20px)",
          color: theme.vars.palette.text.primary
        })
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        sizeLarge: ({ theme }) => ({
          padding: "1rem 1.25rem",
          ...theme.typography.body1,
          lineHeight: 21 / 16,
          fontWeight: theme.typography.fontWeightBold
        })
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: 16
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.vars.shape.borderRadius
        })
      }
    },
    MuiCssBaseline: {
      styleOverrides: theme => ({
        "::selection": {
          backgroundColor: theme.vars.palette.text.primary,
          color: theme.vars.palette.background.default
        },
        html: {
          scrollBehavior: "smooth",
          "@media (prefers-reduced-motion)": {
            scrollBehavior: "auto"
          }
        },
        section: {
          scrollMarginTop: 56,
          [`@media (min-width: ${theme.breakpoints.values.xs}px) and (orientation: landscape)`]: {
            scrollMarginTop: 48
          },
          [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
            scrollMarginTop: 64
          },
          paddingTop: theme.spacing(10),
          paddingBottom: theme.spacing(10)
        },
        img: {
          display: "block"
        }
      })
    },
    MuiFab: {
      defaultProps: {
        color: "primary",
        size: "medium"
      },
      styleOverrides: {
        root: ({ theme }) => ({
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
          borderRadius: theme.vars.shape.borderRadius
        })
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.vars.palette.background.sectionPrimary,
          "&:hover, &.Mui-focused": {
            backgroundColor: theme.vars.palette.background.sectionPrimary
          },
          "&.Mui-disabled": {
            backgroundColor: theme.vars.palette.action.disabledBackground
          }
        })
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: "filled"
      }
    },
    MuiIconButton: {
      defaultProps: {
        centerRipple: false
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.vars.shape.borderRadius
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          textTransform: "capitalize"
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.vars.shape.borderRadius
        })
      }
    },
    MuiTimeline: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          marginTop: 0,
          marginBottom: 0
        }
      }
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        }
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          flexWrap: "wrap",
          justifyContent: "center",
          "&.Mui-disabled": {
            "border": 0
          }
        },
        grouped: ({ theme }) => ({
          border: 0,
          margin: `${theme.spacing(.25)} ${theme.spacing(.5)} `,
          "&:not(:first-of-type), &:first-of-type": {
            borderRadius: theme.vars.shape.borderRadius
          }
        })
      }
    },
    MuiTypography: {
      defaultProps: {
        color: "text.primary"
      }
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true
      }
    }
  }
});

// dark theme is not needed
// @ts-ignore: TODO: handle missing dark theme
delete brandingTheme.colorSchemes.dark;

export default brandingTheme;