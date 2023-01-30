import { NextApiHandler, PageConfig } from "next";

import jobTitles from "@/constants/jobTitles";
import defaultResponseOptions from "@/utils/defaultResponseOptions";

const handler: NextApiHandler = async () => new Response(
  JSON.stringify(jobTitles),
  defaultResponseOptions
);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;