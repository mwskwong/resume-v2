import { SupportingDocument } from "@/types";

import IThumbnail from "./i-thumbnail";

interface TimelineItemData {
  thumbnails?: IThumbnail | [IThumbnail, IThumbnail];
  title?: string;
  subtitle?: string;
  from: Date;
  to: Date | "Present";
  tags?: string[];
  contents?: string[];
  supportingDocuments?: SupportingDocument[];
}

export default TimelineItemData;
