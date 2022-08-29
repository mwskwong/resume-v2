import { StaticImageData } from "next/future/image";

type SupportingDocument = {
  name?: string,
  url?: string,
  thumbnail?: StaticImageData
}

export default SupportingDocument;