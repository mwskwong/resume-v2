import { UseSx } from "types";

type UseNavListItemSx = (active: boolean) => ReturnType<UseSx>

const useSx: UseNavListItemSx = active => ({
  textPrimary: {
    typography: "button",
    color: active ? "primary.main" : undefined
  }
});

export default useSx;