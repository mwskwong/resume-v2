import { isString } from "lodash-es";

import getCertificatePathById from "@/assets/getCertificatePathById";
import courses from "@/constants/courses";

const getCertificateUrls = () => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;
  const courseCertificateUrls = courses
    .map(({ id }) => getCertificatePathById(id))
    .filter(isString)
    .map((path) => `${siteUrl}${path}`);

  return courseCertificateUrls;
};

export default getCertificateUrls;
