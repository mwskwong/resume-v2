import { NextApiHandler, PageConfig } from "next";

import educations from "@/constants/educations";
import defaultResponseOptions from "@/utils/defaultResponseOptions";

const handler: NextApiHandler = async () => new Response(
  JSON.stringify(educations),
  defaultResponseOptions
);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;