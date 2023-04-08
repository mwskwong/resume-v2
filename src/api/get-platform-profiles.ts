import { orderBy } from "lodash-es";
import "server-only";

import client from "./client";
import { PlatformProfileEntrySkeleton } from "./types";

const getPlatformProfiles = async () => {
  const { items } =
    await client.withoutUnresolvableLinks.getEntries<PlatformProfileEntrySkeleton>(
      { content_type: "platformProfile" }
    );

  return orderBy(
    items.map((item) => ({
      ...item.fields,
      platform: {
        id: item.fields.platform?.sys.id,
        name: item.fields.platform?.fields.name,
      },
    })),
    "platform.name"
  );
};

export default getPlatformProfiles;
