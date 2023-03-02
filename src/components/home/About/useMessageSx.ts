import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    hello: {
      textAlign: "center"
    },
    name: {
      color: "primary.main"
    },
    jobTitleContainer: {
      typography: "subtitle1",
      textAlign: "center",
      my: 2
    },
    intro: {
      textAlign: "center"
    }
  });

export default useSx;
