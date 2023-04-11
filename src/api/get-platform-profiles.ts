import { orderBy } from "lodash-es";
import "server-only";

import client from "./client";
import { PlatformProfileEntrySkeleton } from "./types";

export default async function getPlatformProfiles() {
  const { items } =
    await client.withoutUnresolvableLinks.getEntries<PlatformProfileEntrySkeleton>(
      { content_type: "platformProfile" }
    );

  const platformProfiles = items.map((item) => ({
    ...item.fields,
    platform: item.fields.platform && {
      id: item.fields.platform.sys.id,
      name: item.fields.platform.fields.name,
    },
  }));

  return orderBy(platformProfiles, "platform.name") as typeof platformProfiles;
}
