import { Brand } from "@/types";
import makeSx from "@/utils/makeSx";

type IconColor = Exclude<Brand["id"], "gitHub" | "linkedIn" | "stackOverflow">;

const useSx = (params?: { color?: IconColor }) =>
  makeSx({
    root: {
      padding: "2px",
      color: params?.color && `${params.color}.main`
    }
  });

export default useSx;
