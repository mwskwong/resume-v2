import Url from "./Url";

const toUrl = (url: string): Url => ({
  loc: url,
  lastMod: new Date(),
  changeFreq: "daily",
  priority: 0.7
});

export default toUrl;
