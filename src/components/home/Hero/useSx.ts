import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    textAlign: "center"
  },
  name: {
    color: "primary.main"
  },
  platformProfiles: {
    my: 4
  }
});


export default useSx;
