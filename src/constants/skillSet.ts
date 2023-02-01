import { SkillSet } from "@/types";

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
  "Gatsby",
  "React Router",
  "React Hook Form",
  "Emotion",
  "styled-components",
  "JavaFX"
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

const skillSet: SkillSet = {
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
    label: "QA",
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

export default skillSet;