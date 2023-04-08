import { NextResponse } from "next/server";

import { getCourses } from "@/api";

export const GET = async () => {
  const courses = await getCourses();
  return NextResponse.json(courses);
};
