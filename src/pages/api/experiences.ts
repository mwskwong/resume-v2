import { PageConfig } from "next";

import experiences from "@/constants/experiences";
import defaultJsonResponseOptions from "@/utils/defaultJsonResponseOptions";

const handler = () => new Response(
  JSON.stringify(experiences),
  defaultJsonResponseOptions
);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;