import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    title: {
      typography: "subtitle2",
      color: "primary.main",
      textAlign: "center",
    },
    card: {
      bgcolor: "background.sectionTertiary",
    },
  });

export default useSx;
