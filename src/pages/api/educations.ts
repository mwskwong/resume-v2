import { PageConfig } from "next";

import educations from "@/constants/educations";
import defaultJsonResponseOptions from "@/utils/defaultJsonResponseOptions";

const handler = () => new Response(
  JSON.stringify(educations),
  defaultJsonResponseOptions
);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;