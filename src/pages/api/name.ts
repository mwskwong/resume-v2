import { NextApiHandler, PageConfig } from "next";

import name from "@/constants/name";
import defaultResponseOptions from "@/utils/defaultResponseOptions";

const handler: NextApiHandler = async () => new Response(
  JSON.stringify(name),
  defaultResponseOptions
);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;