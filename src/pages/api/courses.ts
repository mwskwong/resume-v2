import { PageConfig } from "next";

import courses from "@/constants/courses";
import defaultJsonResponseOptions from "@/utils/defaultJsonResponseOptions";

const handler = () => new Response(
  JSON.stringify(courses),
  defaultJsonResponseOptions
);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;