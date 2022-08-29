import SupportDocument from "./SupportDocument";

type TimelineItemData = {
  from?: string,
  to?: string | null,
  title?: string,
  subtitle?: string,
  contents?: readonly (string | null)[] | null,
  supportDocuments?: readonly SupportDocument[] | null
}

export default TimelineItemData;