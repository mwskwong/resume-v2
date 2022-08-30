import { UseSx } from "types";

const useSx: UseSx = sx => ({
  root: sx,
  gridForm: {
    justifyContent: "flex-end"
  },
  errorMessagesContainer: {
    pt: 2
  },
  errorMessage: {
    typography: "body2",
    color: "error.main"
  },
  submitButton: {
    float: "right",
    mt: 4
  }
});

export default useSx;