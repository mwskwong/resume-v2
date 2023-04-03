import { StaticImageData } from "next/image";

export type SectionId =
  | "home"
  | "about"
  | "experience"
  | "education"
  | "contact";

export interface Section {
  id: SectionId;
  name: string;
}

export interface SupportingDocument {
  id: string;
  name: string;
  path?: string;
  thumbnail: StaticImageData;
  private?: boolean;
}

export interface Contact {
  phone: string;
  email: string;
  address: string;
}

export interface CourseCategory {
  id: "dev" | "db" | "ops" | "pm" | "others";
  name: string;
}

export interface Brand {
  id:
    | "dataCamp"
    | "enterpriseDb"
    | "gitHub"
    | "google"
    | "linkedIn"
    | "microsoft"
    | "mongoDb"
    | "oracle"
    | "stackOverflow"
    | "udemy"
    | "hku"
    | "hkust"
    | "tecpal"
    | "edps"
    | "ha"
    | "versitech"
    | "publicHealthHku"
    | "engineeringHku";
  name: string;
  url?: string;
}

export interface EmploymentType {
  id: "fullTime" | "partTime" | "internship" | "contract";
  name: string;
}

export interface Course {
  id: string;
  name: string;
  category: CourseCategory;
  institution: Brand;
}

export interface Education {
  from: Date;
  to: Date | "Present";
  degree: string;
  school: Brand;
  mode: EmploymentType;
  supportingDocuments: SupportingDocument["id"][];
}

export interface Experience {
  from: Date;
  to: Date | "Present";
  jobTitle: string;
  companies: Brand | [Brand, Brand];
  employmentType: EmploymentType;
  companiesTemplate?: string;
  jobDuties: string[];
  supportingDocuments: SupportingDocument["id"][];
  relevantSkills: string[];
}

export type JobTitle = string;

export interface Name {
  firstName: string;
  middleName: string;
  lastName: string;
}

export type SelfIntroduction = string;

export interface SkillSet {
  id: "fe" | "be" | "cloud" | "dataOps" | "db" | "qa" | "mobile" | "ml" | "pm";
  name: string;
  skills: string[];
}

export interface PlatformProfile {
  platform: Brand;
  url: string;
}
