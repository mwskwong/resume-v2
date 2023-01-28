import { SxProps, Theme } from "@mui/material";

const makeSx = <T extends Record<string, SxProps<Theme> | undefined>>(arg: T): T => arg;

export default makeSx;