import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    cardContent: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    organization: {
      typography: "body2",
      textTransform: "capitalize",
      color: "text.secondary",
    },
    status: {
      color: "text.secondary",
    },
  });

export default useSx;
