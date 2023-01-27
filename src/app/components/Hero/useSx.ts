import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "100vh",
    textAlign: "center"
  },
  greetings: {
    typography: "h5"
  },
  title: {
    color: "primary.main"
  },
  socialMedia: {
    my: 4
  }
});


export default useSx;
