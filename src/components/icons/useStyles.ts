import { makeStyles } from "tss-react/mui";

type IconColor = "enterpriseDb" | "microsoft" | "mongoDb" | "oracle" | "udemy" | "dataCamp" | "google"

const useStyles = makeStyles<{ color?: IconColor } | void>()(
  (theme, params) => ({
    root: {
      padding: "2px",
      color: params?.color && theme.vars.palette[params.color].main
    }
  })
);

export default useStyles;