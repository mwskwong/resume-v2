import { SxProps, Theme } from "@mui/material";
import { StaticImageData } from "next/image";

import courseCategories from "@/constants/courseCategories";

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

export interface Course {
  name: string;
  category: typeof courseCategories[number];
  institution: "microsoft" | "udemy" | "enterpriseDB" | "mongoDB" | "dataCamp" | "oracle" | "google";
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

export type SelfIntro = string

export interface SkillSet {
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

export interface SocialMedia {
  gitHub: string;
  linkedIn: string;
  stackOverflow: string;
}