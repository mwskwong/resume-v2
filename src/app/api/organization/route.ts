import { NextResponse } from "next/server";

import client, { OrganizationEntrySkeleton } from "@/api";

export const GET = async () => {
  const { items } =
    await client.withoutUnresolvableLinks.getEntries<OrganizationEntrySkeleton>(
      {
        content_type: "organization",
        order: ["fields.name"],
      }
    );

  return NextResponse.json(items);
};
