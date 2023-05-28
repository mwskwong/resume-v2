import { SxProps, Theme } from "@mui/material";

export default function cx(...args: (SxProps<Theme> | undefined)[]) {
  return args.filter(Boolean).flat(Infinity) as SxProps<Theme>;
}
