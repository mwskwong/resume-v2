import type { UseSx } from "types";

type UseCertAndCourseCardSx = (organization: string) => ReturnType<UseSx>

const useSx: UseCertAndCourseCardSx = organization => ({
  cardContent: {
    display: "flex",
    alignItems: "center"
  },
  organization: {
    typography: "body2",
    color: `${organization}.main`,
    textTransform: "capitalize"
  },
  icon: {
    mr: "16px"
  },
  status: {
    color: "text.secondary"
  }
});

export default useSx;