import { NextApiHandler, PageConfig } from "next";

import skillSet from "@/constants/skillSet";
import defaultResponseOptions from "@/utils/defaultResponseOptions";

const handler: NextApiHandler = async () => new Response(
  JSON.stringify(skillSet),
  defaultResponseOptions
);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;