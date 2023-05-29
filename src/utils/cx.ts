import { SxProps, Theme } from "@mui/material";

const cx = (...args: (SxProps<Theme> | undefined)[]) =>
  args.filter(Boolean).flat(Infinity) as SxProps<Theme>;

export default cx;
