import { SxProps, Theme } from "@mui/material";
import { StaticImageData } from "next/image";

export type SectionId = "home" | "about" | "experience" | "education" | "contact"

export type SectionProps = {
  sx?: SxProps<Theme>
}

export type SupportingDocument = {
  name?: string
  url?: string
  thumbnail?: StaticImageData
}

export type Course = {
  name: string
  category: "Development" | "Database" | "IT Operations" | "Project Management" | "Others"
  institution: "microsoft" | "udemy" | "enterpriseDB" | "mongoDB" | "dataCamp" | "oracle" | "google"
  certificationUrl?: string
}

export type Education = {
  from: Date
  to: Date | "Present"
  degree: string
  school: string
  supportingDocuments?: Required<SupportingDocument>[]
}

export type Experience = {
  from: Date
  to: Date | "Present"
  jobTitle: string
  company: string
  jobDuties?: string[]
  supportingDocuments?: Required<SupportingDocument>[]
}

export type JobTitle = string

export type Name = {
  firstName: string,
  middleName: string,
  lastName: string
}

export type SelfIntro = string

export type SkillSet = {
  frontend: string[]
  database: string[]
  backend: string[]
  dataOps: string[]
  cloud: string[],
  mobile: string[]
}

export type SocialMedia = {
  gitHub: string,
  linkedIn: string,
  stackOverflow: string
}