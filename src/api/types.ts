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
    mode: EntryFieldTypes.Symbol;
    supportingDocuments?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  };
}

export interface ExperienceEntrySkeleton {
  contentTypeId: "experience";
  fields: {
    from: EntryFieldTypes.Date;
    to?: EntryFieldTypes.Date;
    jobTitle: EntryFieldTypes.Symbol;
    companies: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<OrganizationEntrySkeleton>
    >;
    companyTemplate?: EntryFieldTypes.Symbol;
    employmentType: EntryFieldTypes.Symbol;
    jobDuties?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    supportingDocuments?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    skills: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<SkillEntrySkeleton>
    >;
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

export interface PlatformProfileEntrySkeleton {
  contentTypeId: "platformProfile";
  fields: {
    platform: EntryFieldTypes.EntryLink<OrganizationEntrySkeleton>;
    url: EntryFieldTypes.Symbol;
  };
}

export interface SkillEntrySkeleton {
  contentTypeId: "skill";
  fields: {
    name: EntryFieldTypes.Symbol;
    category?: EntryFieldTypes.EntryLink<SkillCategoryEntrySkeleton>;
    proficiency: EntryFieldTypes.Integer;
  };
}

export interface SkillCategoryEntrySkeleton {
  contentTypeId: "skillCategory";
  fields: {
    name: EntryFieldTypes.Symbol;
    proficiency: EntryFieldTypes.Integer;
  };
}
