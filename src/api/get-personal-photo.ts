import client from "./client";

export default async function getPersonalPhoto() {
  const asset = await client.getAsset("6MPuamYCrTMaP2hJu4t6WM");
  return asset.fields.file && `https:${asset.fields.file.url}`;
}
