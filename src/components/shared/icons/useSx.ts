
import makeSx from "@/lib/makeSx";

type IconColor = "enterpriseDB" | "microsoft" | "mongoDB" | "oracle" | "udemy" | "dataCamp" | "google"

const useSx = (params?: { color?: IconColor }) => makeSx({
  root: {
    padding: "2px",
    color: params?.color && `${params.color}.main`
  }
});

export default useSx;