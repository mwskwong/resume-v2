import { SupportingDocument } from "@/types";

import TimelineItemData from "./TimelineItemData";

interface SupportingDocumentListItemProps {
  title: TimelineItemData["title"];
  supportingDocument: SupportingDocument;
}

export default SupportingDocumentListItemProps;