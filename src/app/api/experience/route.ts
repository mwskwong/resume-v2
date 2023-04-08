import { NextResponse } from "next/server";

import { getExperiences } from "@/api";

export const GET = async () => {
  const experiences = await getExperiences();

  return NextResponse.json(experiences);
};
