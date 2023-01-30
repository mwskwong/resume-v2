import { NextApiHandler, PageConfig } from "next";

import experiences from "@/constants/experiences";
import defaultResponseOptions from "@/utils/defaultResponseOptions";

const handler: NextApiHandler = async () => new Response(
  JSON.stringify(experiences),
  defaultResponseOptions
);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;