import { SxProps, Theme } from "@mui/material";

type IconColor = "enterpriseDb" | "microsoft" | "mongoDb" | "oracle" | "udemy" | "dataCamp" | "google"

const useSx = (param?: { color?: IconColor }) => {
  const root: SxProps<Theme> = {
    padding: "2px",
    color: param?.color && `${param.color}.main`
  };

  return { root };
};

export default useSx;