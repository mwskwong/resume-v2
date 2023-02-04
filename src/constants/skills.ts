import { Skills } from "@/types";

export const frontend = [
  "React",
  "TypeScript",
  "Next.js",
  "Redux",
  "MUI",
  "Vue",
  "Vuetify",
  "Quasar",
  "Vuex",
  "Pinia",
  "React Hook Form"
];

export const database = [
  "MySQL",
  "Microsoft SQL Server",
  "MongoDB",
  "Oracle Database",
  "Sybase ASE"
];

export const backend = [
  "Spring Boot",
  "Express"
];

export const qa = [
  "Cypress"
];

export const dataOps = [
  "Delphix"
];

export const cloud = [
  "Contentful",
  "OpenShift"
];

export const mobile = [
  "React Native",
  "NativeBase",
  "React Navigation"
];

const skills: Skills = {
  frontend: {
    label: "Frontend",
    skills: frontend
  },
  database: {
    label: "Database",
    skills: database
  },
  backend: {
    label: "Backend",
    skills: backend
  },
  qa: {
    label: "Quality Assurance",
    skills: qa
  },
  dataOps: {
    label: "DataOps",
    skills: dataOps
  },
  cloud: {
    label: "Cloud",
    skills: cloud
  },
  mobile: {
    label: "Mobile",
    skills: mobile
  }
};

export default skills;