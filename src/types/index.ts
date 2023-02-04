import { SxProps, Theme } from "@mui/material";
import { StaticImageData } from "next/image";


export type SectionId = "home" | "about" | "experience" | "education" | "contact"

export interface Section {
  id: SectionId;
  name: string;
}

export interface SectionProps {
  sx?: SxProps<Theme>;
}

export interface SupportingDocument {
  name?: string;
  url?: string;
  thumbnail?: StaticImageData;
}

export interface Contact {
  phone: string;
  email: string;
  address: string;
}

export interface CourseCategory {
  id: "development" | "database" | "operation" | "pm" | "others";
  name: string;
}

export interface Brand {
  id: "dataCamp" | "enterpriseDb" | "gitHub" | "google" | "linkedIn" | "microsoft" | "mongoDb" | "oracle" | "stackOverflow" | "udemy";
  name: string;
}

export interface Course {
  id: string;
  name: string;
  category: CourseCategory["id"];
  institution: "microsoft" | "udemy" | "enterpriseDb" | "mongoDb" | "dataCamp" | "oracle" | "google";
  certificationUrl?: string;
}

export interface Education {
  from: Date;
  to: Date | "Present";
  degree: string;
  school: string;
  supportingDocuments?: Required<SupportingDocument>[];
}

export interface Experience {
  from: Date;
  to: Date | "Present";
  jobTitle: string;
  company: string;
  jobDuties?: string[];
  supportingDocuments?: Required<SupportingDocument>[];
}

export type JobTitle = string

export interface Name {
  firstName: string;
  middleName: string;
  lastName: string;
}

export type SelfIntroduction = string

export interface Skills {
  frontend: {
    label: string;
    skills: string[];
  };
  database: {
    label: string;
    skills: string[];
  };
  backend: {
    label: string;
    skills: string[];
  };
  qa: {
    label: string;
    skills: string[];
  };
  dataOps: {
    label: string;
    skills: string[];
  };
  cloud: {
    label: string;
    skills: string[];
  };
  mobile: {
    label: string;
    skills: string[];
  };
}

export interface PlatformProfile {
  platform: Brand;
  url: string;
}