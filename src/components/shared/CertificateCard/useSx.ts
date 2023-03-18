import { Brand } from "@/types";
import makeSx from "@/utils/makeSx";

const useSx = ({ organization }: { organization: Brand }) =>
  makeSx({
    cardContent: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    organization: {
      typography: "body2",
      textTransform: "capitalize",
      color: `${organization.id}.dark`,
    },
    status: {
      color: "text.secondary",
    },
  });

export default useSx;
