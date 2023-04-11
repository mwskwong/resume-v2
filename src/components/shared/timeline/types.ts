import { StaticImageData } from "next/image";

export interface Thumbnail {
  src: string | StaticImageData;
  alt: string;
  url?: string;
}

export interface TimelineItemData {
  thumbnails?: [Thumbnail] | [Thumbnail, Thumbnail];
  title?: string;
  subtitle?: string;
  from: Date;
  to: Date | "Present";
  type?: string;
  tags?: string[];
  contents?: string[];
  supportingDocuments?: {
    title: string;
    url: string;
  }[];
}
