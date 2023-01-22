import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(
  theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      minHeight: "100vh"
    },
    greetings: {
      marginBottom: theme.spacing(2)
    },
    title: {
      textAlign: "center",
      "@media (max-width: 648px)": {
        minHeight: `calc(${theme.typography.h1.lineHeight} * 2)`
      },
      "@media (max-width: 378px)": {
        minHeight: `calc(${theme.typography.h1.lineHeight} * 3)`
      },
      width: "100%"
    },
    typeIt: {
      color: theme.vars.palette.primary.main,
      "--ti-cursor-color": theme.vars.palette.text.primary,
      "--ti-cursor-margin-left": 0,
      "--ti-cursor-margin-right": 0
    },
    socialMedia: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    }
  })
);


export default useStyles;
