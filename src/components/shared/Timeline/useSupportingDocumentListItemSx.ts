import makeSx from "@/utils/makeSx";

const useSx = ({ private: privateDoc }: { private?: boolean }) =>
  makeSx({
    tooltip: {
      display: privateDoc ? "unset" : "none",
    },
    button: {
      pl: 0,
      pr: "24px",
      py: "12px",
    },
  });

export default useSx;
