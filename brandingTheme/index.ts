import "@fontsource/rubik/variable.css";

import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import designTokens from "./designTokens";
import getThemedComponents from "./getThemedComponents";

const theme = createTheme(designTokens);
const brandingTheme = deepmerge(theme, getThemedComponents(theme));

export default brandingTheme;