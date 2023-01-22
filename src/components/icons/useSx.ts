
import makeSx from "@/utils/makeSx";

type IconColor = "enterpriseDb" | "microsoft" | "mongoDb" | "oracle" | "udemy" | "dataCamp" | "google"

const useSx = (param?: { color?: IconColor }) => makeSx({
  root: {
    padding: "2px",
    color: param?.color && `${param.color}.main`
  }
});

export default useSx;