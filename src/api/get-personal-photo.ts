import "server-only";

import client from "./client";

const getPersonalPhoto = async () => {
  const asset = await client.getAsset("6MPuamYCrTMaP2hJu4t6WM");
  return asset.fields.file && `https:${asset.fields.file.url}`;
};
export default getPersonalPhoto;
