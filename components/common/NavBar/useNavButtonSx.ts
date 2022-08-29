import { UseSx } from "types";

type UseNavButtonSx = (active: boolean) => ReturnType<UseSx>

const useSx: UseNavButtonSx = active => ({
  active: {
    height: 6,
    width: 6,
    bgcolor: "primary.main",
    position: "absolute",
    bottom: 0,
    left: "calc(50% - 3px)",
    borderRadius: "50%",
    opacity: active ? 1 : 0
  }
});

export default useSx;