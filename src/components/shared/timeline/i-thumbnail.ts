import { StaticImageData } from "next/image";

interface IThumbnail {
  src: StaticImageData;
  alt: string;
  url?: string;
}

export default IThumbnail;
