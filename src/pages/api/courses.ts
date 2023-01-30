import { NextApiHandler, PageConfig } from "next";

import courses from "@/constants/courses";
import defaultResponseOptions from "@/utils/defaultResponseOptions";

const handler: NextApiHandler = async () => new Response(
  JSON.stringify(courses),
  defaultResponseOptions
);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;