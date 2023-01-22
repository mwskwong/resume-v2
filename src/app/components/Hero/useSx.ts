import { SxProps, Theme } from "@mui/material";

const useSx = () => {
  const root: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "100vh"
  };

  const greetings: SxProps<Theme> = {
    mb: 2
  };

  const title: SxProps<Theme> = {
    textAlign: "center",
    "@media (max-width: 648px)": {
      minHeight: theme => `calc(${theme.typography.h1.lineHeight} * 2)`
    },
    "@media (max-width: 378px)": {
      minHeight: theme => `calc(${theme.typography.h1.lineHeight} * 3)`
    },
    width: "100%"
  };

  const typeIt: SxProps<Theme> = {
    color: "primary.main",
    "--ti-cursor-color": theme => theme.vars.palette.text.primary,
    "--ti-cursor-margin-left": 0,
    "--ti-cursor-margin-right": 0
  };

  const socialMedia: SxProps<Theme> = {
    my: 4
  };

  return {
    root,
    greetings,
    title,
    typeIt,
    socialMedia
  };
};


export default useSx;
