import { NextApiHandler, PageConfig } from "next";

import socialMedia from "@/constants/socialMedia";
import defaultResponseOptions from "@/utils/defaultResponseOptions";

const handler: NextApiHandler = async () => new Response(
  JSON.stringify(socialMedia),
  defaultResponseOptions
);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;