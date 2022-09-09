import type { SxProps, Theme } from "@mui/material";

const asSxRecord = <T extends Record<string, SxProps<Theme> | undefined>>(arg: T): T => arg;

export default asSxRecord;