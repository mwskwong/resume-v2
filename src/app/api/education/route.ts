import { NextResponse } from "next/server";

import { getEducations } from "@/api";

export const GET = async () => {
  const educations = await getEducations();

  return NextResponse.json(educations);
};
