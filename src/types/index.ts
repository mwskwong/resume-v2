import { StaticImageData } from "next/image";

export type SectionId = "home" | "about" | "experience" | "education" | "contact"

export type SectionProps = {
  className?: string
}

export type SupportingDocument = {
  name?: string,
  url?: string,
  thumbnail?: StaticImageData
}
