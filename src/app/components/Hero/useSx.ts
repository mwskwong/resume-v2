import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "100vh"
  },
  greetings: {
    typography: "h5",
    mb: 2
  },
  title: {
    textAlign: "center",
    "@media (max-width: 648px)": {
      minHeight: theme => `calc(${theme.typography.h1.lineHeight}em * 2)`
    },
    "@media (max-width: 378px)": {
      minHeight: theme => `calc(${theme.typography.h1.lineHeight}em * 3)`
    },
    width: "100%"
  },
  typeIt: {
    color: "primary.main",
    "--ti-cursor-color": theme => theme.vars.palette.text.primary,
    "--ti-cursor-margin-left": 0,
    "--ti-cursor-margin-right": 0
  },
  socialMedia: {
    my: 4
  }
});


export default useSx;
