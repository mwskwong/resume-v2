import makeSx from "@/utils/makeSx";

const useSx = ({ private: privateDoc }: { private?: boolean }) =>
  makeSx({
    tooltip: {
      display: privateDoc ? "unset" : "none",
    },
    button: {
      pl: 0,
    },
  });

export default useSx;
