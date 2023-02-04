
import makeSx from "@/utils/makeSx";

type IconColor = "enterpriseDb" | "microsoft" | "mongoDb" | "oracle" | "udemy" | "dataCamp" | "google"

const useSx = (params?: { color?: IconColor }) => makeSx({
  root: {
    padding: "2px",
    color: params?.color && `${params.color}.main`
  }
});

export default useSx;