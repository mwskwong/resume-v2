import { orderBy } from "lodash-es";
import "server-only";

import client from "./client";
import { PlatformProfileEntrySkeleton } from "./types";

const getPlatformProfiles = async () => {
  const { items } = await client.getEntries<PlatformProfileEntrySkeleton>({
    content_type: "platformProfile",
  });

  const platformProfiles = items.map((item) => ({
    ...item.fields,
    platform: item.fields.platform && {
      id: item.fields.platform.sys.id,
      name: item.fields.platform.fields.name,
    },
  }));

  return orderBy(platformProfiles, "platform.name");
};

export default getPlatformProfiles;
