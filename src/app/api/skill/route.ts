import { NextResponse } from "next/server";

import { getSkills } from "@/api";

export const GET = async () => {
  const skills = await getSkills();

  return NextResponse.json(skills);
};
