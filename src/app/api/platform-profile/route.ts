import { NextResponse } from "next/server";

import { getPlatformProfiles } from "@/api";

export const GET = async () => {
  const platformProfiles = await getPlatformProfiles();

  return NextResponse.json(platformProfiles);
};
