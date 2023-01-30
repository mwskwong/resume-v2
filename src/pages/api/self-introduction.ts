import { NextApiHandler, PageConfig } from "next";

import selfIntro from "@/constants/selfIntro";

const handler: NextApiHandler = async () => new Response(selfIntro);

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;