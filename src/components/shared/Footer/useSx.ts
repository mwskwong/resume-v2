import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    footer: {
      bgcolor: "background.primary",
      color: "text.secondary",
      py: 4,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      "@media (min-width: 1332px)": {
        flexDirection: "row",
      },
    },
    text: {
      color: "inherit",
      width: "100%",
      textAlign: "center",
      "@media (min-width: 1332px)": {
        textAlign: "unset",
      },
    },
    loveIcon: {
      verticalAlign: "middle",
    },
  });

export default useSx;
