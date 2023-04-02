import { EmploymentType, SupportingDocument } from "@/types";

import IThumbnail from "./i-thumbnail";

interface TimelineItemData {
  thumbnails?: IThumbnail | [IThumbnail, IThumbnail];
  title?: string;
  subtitle?: string;
  from: Date;
  to: Date | "Present";
  type?: EmploymentType;
  tags?: string[];
  contents?: string[];
  supportingDocuments?: SupportingDocument[];
}

export default TimelineItemData;
