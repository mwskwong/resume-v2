import endent from "endent";

import Url from "./Url";

const toXml = ({ loc, lastMod, changeFreq, priority }: Url) => endent`
  <url>
    <loc>${loc}</loc>
    ${lastMod && `<lastmod>${lastMod.toISOString()}</lastmod>`}
    ${changeFreq && `<changefreq>${changeFreq}</changefreq>`}
    ${priority && `<priority>${priority}</priority>`}
  </url>
`;

export default toXml;
