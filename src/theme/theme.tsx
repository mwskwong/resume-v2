import { ErrorOutlineRounded as ErrorOutline } from "@mui/icons-material";
import type {} from "@mui/lab/themeAugmentation";
import {
  alpha,
  darken,
  experimental_extendTheme as extendTheme,
  lighten,
  touchRippleClasses,
} from "@mui/material";
import type {} from "@mui/material/themeCssVarsAugmentation";
import {
  siDatacamp,
  siEnterprisedb,
  siGoogle,
  siMicrosoft,
  siMongodb,
  siOracle,
  siUdemy,
} from "simple-icons";

import font from "./font";

declare module "@mui/material" {
  interface Palette {
    dataCamp: Palette["primary"];
    enterpriseDb: Palette["primary"];
    google: Palette["primary"];
    microsoft: Palette["primary"];
    mongoDb: Palette["primary"];
    oracle: Palette["primary"];
    udemy: Palette["primary"];
  }

  interface PaletteOptions {
    dataCamp: PaletteOptions["primary"];
    enterpriseDb: PaletteOptions["primary"];
    google: PaletteOptions["primary"];
    microsoft: PaletteOptions["primary"];
    mongoDb: PaletteOptions["primary"];
    oracle: PaletteOptions["primary"];
    udemy: PaletteOptions["primary"];
  }

  interface SvgIconPropsColorOverrides {
    dataCamp: true;
    enterpriseDb: true;
    google: true;
    microsoft: true;
    mongoDb: true;
    oracle: true;
    udemy: true;
  }

  interface TypeBackground {
    primary: string;
    secondary: string;
    tertiary: string;
  }

  interface TypographyVariantsOptions {
    fontWeightExtraBold: number;
  }

  interface TypographyVariants {
    fontWeightExtraBold: number;
  }
}

const pxToRem = (size: number) => `${size / 16}rem`;

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
  900: "#1A2027",
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
        },
        mongoDb: {
          main: `#${siMongodb.hex}`,
        },
        microsoft: {
          main: `#${siMicrosoft.hex}`,
        },
        oracle: {
          main: `#${siOracle.hex}`,
        },
        udemy: {
          main: `#${siUdemy.hex}`,
        },
        dataCamp: {
          main: `#${siDatacamp.hex}`,
        },
        google: {
          main: `#${siGoogle.hex}`,
        },
        grey,
        text: {
          primary: grey[900],
          secondary: grey[700],
        },
        divider: grey[300],
        background: {
          primary: lighten(grey[50], 0.5),
          secondary: darken(grey[50], 0.003),
          tertiary: darken(grey[50], 0.025),
        },
        action: {
          active: grey[900],
          hover: alpha(grey[900], 0.04),
          selected: alpha(grey[900], 0.08),
          disabled: alpha(grey[900], 0.26),
          disabledBackground: alpha(grey[900], 0.12),
          focus: alpha(grey[900], 0.12),
        },
        AppBar: {
          defaultBg: alpha("#fff", 0.5),
        },
        Avatar: {
          defaultBg: lighten(grey[50], 0.5),
        },
        FilledInput: {
          bg: lighten(grey[50], 0.5),
          hoverBg: lighten(grey[50], 0.5),
          disabledBg: alpha(grey[900], 0.26),
        },
        Tooltip: {
          bg: grey[800],
        },
      },
    },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: font.style.fontFamily,
    fontWeightExtraBold: 800,
    h1: {
      fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
      fontWeight: 800,
      lineHeight: 78 / 70,
    },
    h2: {
      fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
      fontWeight: 800,
      lineHeight: 44 / 36,
    },
    h3: {
      fontSize: pxToRem(36),
      lineHeight: 44 / 36,
      letterSpacing: 0.2,
    },
    h4: {
      fontSize: pxToRem(28),
      lineHeight: 42 / 28,
      letterSpacing: 0.2,
    },
    h5: {
      fontSize: pxToRem(24),
      lineHeight: 36 / 24,
      letterSpacing: 0.1,
    },
    h6: {
      fontSize: pxToRem(20),
      lineHeight: 30 / 20,
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 700,
      letterSpacing: 0,
    },
    subtitle1: {
      fontSize: pxToRem(18),
      lineHeight: 24 / 18,
      letterSpacing: 0,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: pxToRem(14),
      lineHeight: 21 / 14,
      letterSpacing: 0,
      fontWeight: 700,
    },
    body1: {
      fontSize: pxToRem(16),
      lineHeight: 24 / 16,
      letterSpacing: 0,
    },
    body2: {
      fontSize: pxToRem(14),
      lineHeight: 21 / 14,
      letterSpacing: 0,
    },
    caption: {
      display: "inline-block",
      fontSize: pxToRem(12),
      lineHeight: 18 / 12,
      letterSpacing: 0,
    },
  },
  components: {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: <ErrorOutline fontSize="inherit" />,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "default",
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          backdropFilter: "blur(20px)",
        },
      },
    },
    MuiAvatar: {
      defaultProps: {
        variant: "rounded",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.text.primary,
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        sizeLarge: ({ theme }) => ({
          padding: "1rem 1.25rem",
          ...theme.typography.body1,
          lineHeight: 21 / 16,
          fontWeight: theme.typography.fontWeightBold,
        }),
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.vars.palette.background.primary,
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiChip: {
      defaultProps: {
        variant: "outlined",
        color: "primary",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.vars.shape.borderRadius,
        }),
        outlinedPrimary: ({ theme }) => ({
          color: theme.vars.palette.text.primary,
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        "::selection": {
          backgroundColor: theme.vars.palette.grey[800],
          color: theme.vars.palette.common.white,
        },
        html: {
          scrollBehavior: "smooth",
          "@media (prefers-reduced-motion)": {
            scrollBehavior: "auto",
          },
        },
        address: {
          fontStyle: "normal",
        },
        img: {
          objectFit: "cover",
        },
      }),
    },
    MuiFab: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
          borderRadius: theme.vars.shape.borderRadius,
        }),
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "filled",
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        contained: {
          marginLeft: 12,
          marginRight: 12,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.vars.shape.borderRadius,
          [`& .${touchRippleClasses.root} .${touchRippleClasses.child}`]: {
            borderRadius: theme.vars.shape.borderRadius,
          },
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: ({ theme }) => ({
          color: theme.vars.palette.text.primary,
          "&::placeholder": {
            color: theme.vars.palette.text.secondary,
            opacity: 1,
          },
        }),
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.text.secondary,
        }),
        positionStart: ({ theme }) => ({
          marginRight: theme.spacing(2),
        }),
        positionEnd: ({ theme }) => ({
          marginLeft: theme.spacing(2),
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.vars.shape.borderRadius,
        }),
      },
    },
    MuiTimelineDot: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.vars.shadows[0],
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
    },
    MuiTooltip: {
      defaultProps: {
        placement: "bottom-start",
      },
      styleOverrides: {
        tooltip: {
          borderRadius: 8,
          maxWidth: 350,
        },
        touch: {
          borderRadius: 8,
        },
      },
    },
  },
});

// @ts-expect-error: dark theme is a required field but is not necessary in this case
delete brandingTheme.colorSchemes.dark;

export default brandingTheme;
