import SupportingDocument from "./SupportingDocument";

type TimelineItemData = {
  from?: Date,
  to?: Date | "Present",
  title?: string,
  subtitle?: string,
  contents?: string[]
  supportingDocuments?: SupportingDocument[]
}

export default TimelineItemData;