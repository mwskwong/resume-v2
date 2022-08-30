import { UseSx } from "types";

const useSx: UseSx = sx => ({
  root: sx,
  errorMessagesContainer: {
    mt: 1
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