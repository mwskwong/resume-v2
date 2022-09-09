import { useScrollTrigger } from "@mui/material";

const useShowScrollToTopFab = (): boolean => {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return trigger;
};

export default useShowScrollToTopFab;