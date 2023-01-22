import { SxProps, Theme } from "@mui/material";

const useSx = () => {
  const root: SxProps<Theme> = {
    justifyContent: "center"
  };

  return { root };
};

export default useSx;