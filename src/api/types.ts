import { EntryFieldTypes } from "contentful";

export interface CourseEntrySkeleton {
  contentTypeId: "course";
  fields: {
    name: EntryFieldTypes.Symbol;
    institution: EntryFieldTypes.EntryLink<OrganizationEntrySkeleton>;
    certificate?: EntryFieldTypes.AssetLink;
  };
}

export interface EducationEntrySkeleton {
  contentTypeId: "education";
  fields: {
    from: EntryFieldTypes.Date;
    to?: EntryFieldTypes.Date;
    program: EntryFieldTypes.Symbol;
    school: EntryFieldTypes.EntryLink<OrganizationEntrySkeleton>;
    supportingDocuments?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  };
}

export interface OrganizationEntrySkeleton {
  contentTypeId: "organization";
  fields: {
    name: EntryFieldTypes.Symbol;
    url?: EntryFieldTypes.Symbol;
    logo?: EntryFieldTypes.AssetLink;
  };
}
