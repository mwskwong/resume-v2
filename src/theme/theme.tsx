import { ErrorOutlineRounded as ErrorOutline } from "@mui/icons-material";
import type {} from "@mui/lab/themeAugmentation";
import {
  alpha,
  darken,
  experimental_extendTheme as extendTheme,
  lighten,
  touchRippleClasses,
} from "@mui/material";
import { amber, green, lightBlue, purple } from "@mui/material/colors";
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
    fullTime: Palette["primary"];
    partTime: Palette["primary"];
    internship: Palette["primary"];
    contract: Palette["primary"];
  }

  interface PaletteOptions {
    dataCamp: PaletteOptions["primary"];
    enterpriseDb: PaletteOptions["primary"];
    google: PaletteOptions["primary"];
    microsoft: PaletteOptions["primary"];
    mongoDb: PaletteOptions["primary"];
    oracle: PaletteOptions["primary"];
    udemy: PaletteOptions["primary"];
    fullTime: PaletteOptions["primary"];
    partTime: PaletteOptions["primary"];
    internship: PaletteOptions["primary"];
    contract: PaletteOptions["primary"];
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

  interface ChipPropsColorOverrides {
    fullTime: true;
    partTime: true;
    internship: true;
    contract: true;
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
        enterpriseDb: { main: `#${siEnterprisedb.hex}` },
        mongoDb: { main: `#${siMongodb.hex}` },
        microsoft: { main: `#${siMicrosoft.hex}` },
        oracle: { main: `#${siOracle.hex}` },
        udemy: { main: `#${siUdemy.hex}` },
        dataCamp: { main: `#${siDatacamp.hex}` },
        google: { main: `#${siGoogle.hex}` },
        fullTime: { main: green[500] },
        partTime: { main: amber[500] },
        internship: { main: lightBlue[500] },
        contract: { main: purple[500] },
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
        root: ({ theme }) =>
          theme.unstable_sx({
            boxShadow: 0,
            backdropFilter: "blur(20px)",
          }),
      },
    },
    MuiAvatar: {
      defaultProps: {
        variant: "rounded",
      },
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            color: "text.primary",
          }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        sizeLarge: ({ theme }) =>
          theme.unstable_sx({
            padding: "1rem 1.25rem",
            typography: "body1",
            lineHeight: 21 / 16,
            fontWeight: "bold",
          }),
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            bgcolor: "background.primary",
          }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            "&:last-child": {
              pb: 2,
            },
          }),
      },
    },
    MuiChip: {
      defaultProps: {
        variant: "outlined",
        color: "primary",
      },
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 1,
          }),
        outlinedPrimary: ({ theme }) =>
          theme.unstable_sx({
            color: "text.primary",
          }),

        filled: ({ theme, ownerState }) =>
          theme.unstable_sx({
            color:
              !ownerState.color || ownerState.color === "default"
                ? undefined
                : darken(theme.palette[ownerState.color].main, 0.6),
            backgroundColor:
              !ownerState.color || ownerState.color === "default"
                ? undefined
                : lighten(theme.palette[ownerState.color].main, 0.9),
          }),
        sizeSmall: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 0.5,
          }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) =>
        theme.unstable_sx({
          "::selection": {
            bgcolor: "grey.800",
            color: "common.white",
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
        root: ({ theme }) =>
          theme.unstable_sx({
            position: "fixed",
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            borderRadius: 1,
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
        contained: ({ theme }) =>
          theme.unstable_sx({
            mx: "12px",
          }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 1,
            [`& .${touchRippleClasses.root} .${touchRippleClasses.child}`]: {
              borderRadius: 1,
            },
          }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: ({ theme }) =>
          theme.unstable_sx({
            color: "text.primary",
            "&::placeholder": {
              color: "text.secondary",
              opacity: 1,
            },
          }),
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            color: "text.secondary",
          }),
        positionStart: ({ theme }) =>
          theme.unstable_sx({
            mr: 2,
          }),
        positionEnd: ({ theme }) =>
          theme.unstable_sx({
            ml: 2,
          }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 1,
          }),
      },
    },
    MuiTimelineDot: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            boxShadow: 0,
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
        tooltip: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 0.5,
            maxWidth: 350,
          }),
        touch: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 0.5,
          }),
      },
    },
  },
});

// @ts-expect-error: dark theme is a required field but is not necessary in this case
delete brandingTheme.colorSchemes.dark;

export default brandingTheme;
