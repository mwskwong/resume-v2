import { Brand } from "@/types";
import makeSx from "@/utils/makeSx";

const useSx = ({ organization }: { organization: Brand }) => makeSx({
  cardContent: {
    display: "flex",
    alignItems: "center"
  },
  organization: {
    typography: "body2",
    textTransform: "capitalize",
    color: `${organization.id}.dark`
  },
  icon: {
    mr: "16px"
  },
  status: {
    color: "text.secondary"
  }
});

export default useSx;