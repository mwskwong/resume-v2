import { ErrorOutlineRounded as ErrorOutline } from "@mui/icons-material";
import type { } from "@mui/lab/themeAugmentation";
import { alpha, darken, experimental_extendTheme as extendTheme, lighten, toggleButtonGroupClasses, touchRippleClasses } from "@mui/material";
import type { } from "@mui/material/themeCssVarsAugmentation";
import { siDatacamp, siEnterprisedb, siGoogle, siMicrosoft, siMongodb, siOracle, siUdemy } from "simple-icons";

import rubik from "./rubik";

const pxToRem = (size: number) => `${(size / 16)}rem`;

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
        enterpriseDb: {
          main: `#${siEnterprisedb.hex}`,
          dark: darken(`#${siEnterprisedb.hex}`, 0.19)
        },
        mongoDb: {
          main: `#${siMongodb.hex}`,
          dark: darken(`#${siMongodb.hex}`, 0.23)
        },
        microsoft: {
          main: `#${siMicrosoft.hex}`,
          dark: `#${siMicrosoft.hex}`
        },
        oracle: {
          main: `#${siOracle.hex}`,
          dark: darken(`#${siOracle.hex}`, 0.11)
        },
        udemy: {
          main: `#${siUdemy.hex}`,
          dark: darken(`#${siUdemy.hex}`, 0.03)
        },
        dataCamp: {
          main: `#${siDatacamp.hex}`,
          dark: darken(`#${siDatacamp.hex}`, 0.465)
        },
        google: {
          main: `#${siGoogle.hex}`,
          dark: darken(`#${siGoogle.hex}`, 0.17)
        },
        grey,
        text: {
          primary: grey[900],
          secondary: grey[700]
        },
        divider: grey[300],
        background: {
          sectionPrimary: lighten(grey[50], 0.5),
          sectionSecondary: darken(grey[50], 0.003),
          sectionTertiary: darken(grey[50], 0.025)
        },
        action: {
          active: grey[900],
          hover: alpha(grey[900], 0.04),
          selected: alpha(grey[900], 0.08),
          disabled: alpha(grey[900], 0.26),
          disabledBackground: alpha(grey[900], 0.12),
          focus: alpha(grey[900], 0.12)
        },
        Avatar: {
          defaultBg: lighten(grey[50], 0.5)
        },
        FilledInput: {
          bg: lighten(grey[50], 0.5),
          hoverBg: lighten(grey[50], 0.5),
          disabledBg: alpha(grey[900], 0.26)
        },
        Tooltip: {
          bg: grey[800]
        }
      }
    }
  },
  spacing: 10,
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: rubik.style.fontFamily,
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
      defaultProps: {
        color: "default"
      },
      styleOverrides: {
        root: ({ theme }) => ({
          // FIXME: unable to use --mui-pallette-AppBar-defaultBg because --AppBar-color is invalid when dark color scheme is missing
          backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.5)`,
          boxShadow: "none",
          backdropFilter: "blur(20px)",
          color: theme.vars.palette.text.primary
        })
      }
    },
    MuiAvatar: {
      defaultProps: {
        variant: "rounded"
      },
      styleOverrides: {
        root: ({ theme }) => ({
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
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.vars.palette.background.sectionPrimary
        })
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
      defaultProps: {
        variant: "outlined",
        color: "primary"
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.vars.shape.borderRadius
        }),
        outlinedPrimary: ({ theme }) => ({
          color: theme.vars.palette.text.primary
        })
      }
    },
    MuiCssBaseline: {
      styleOverrides: theme => ({
        "::selection": {
          backgroundColor: theme.vars.palette.grey[800],
          color: theme.vars.palette.common.white
        },
        html: {
          scrollBehavior: "smooth",
          "@media (prefers-reduced-motion)": {
            scrollBehavior: "auto"
          }
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
    MuiFormControl: {
      defaultProps: {
        variant: "filled"
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.vars.shape.borderRadius,
          [`& .${touchRippleClasses.root} .${touchRippleClasses.child}`]: {
            borderRadius: theme.vars.shape.borderRadius
          }
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
    MuiTextField: {
      defaultProps: {
        variant: "filled"
      },
      styleOverrides: {

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
          justifyContent: "center"
        },
        grouped: ({ theme }) => ({
          margin: `${theme.spacing(0.25)} ${theme.spacing(0.5)}`,
          border: 0,
          [`&.${toggleButtonGroupClasses.disabled}`]: {
            border: 0
          },
          "&:not(:first-of-type), &:first-of-type": {
            borderRadius: theme.vars.shape.borderRadius
          }
        })
      }
    },
    MuiTooltip: {
      defaultProps: {
        placement: "bottom-start"
      },
      styleOverrides: {
        tooltip: ({ theme }) => ({
          borderRadius: `calc(${theme.vars.shape.borderRadius} * 24 / 53)`,
          maxWidth: 350
        }),
        touch: ({ theme }) => ({
          borderRadius: `calc(${theme.vars.shape.borderRadius} * 32 / 53)`
        })
      }
    },
    MuiTypography: {
      defaultProps: {
        color: "text.primary"
      }
    }
  }
});

// @ts-expect-error: dark theme is a required field but is not necessary in this case
delete brandingTheme.colorSchemes.dark;

export default brandingTheme;
