import { SkillSet } from "@/types";

export const frontend: SkillSet = {
  id: "fe",
  name: "Frontend",
  skills: [
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
  ]
};

export const database: SkillSet = {
  id: "db",
  name: "Database",
  skills: [
    "MySQL",
    "Microsoft SQL Server",
    "MongoDB",
    "Oracle Database",
    "Sybase ASE"
  ]
};

export const backend: SkillSet = {
  id: "be",
  name: "Backend",
  skills: [
    "Spring Boot",
    "Express"
  ]
};

export const qa: SkillSet = {
  id: "qa",
  name: "Quality Assurance",
  skills: [
    "Cypress"
  ]
};

export const dataOps: SkillSet = {
  id: "dataOps",
  name: "DataOps",
  skills: [
    "Delphix"
  ]
};

export const cloud: SkillSet = {
  id: "cloud",
  name: "Cloud",
  skills: [
    "Contentful",
    "OpenShift"
  ]
};

export const mobile: SkillSet = {
  id: "mobile",
  name: "Mobile",
  skills: [
    "React Native",
    "NativeBase",
    "React Navigation"
  ]
};

export const ml: SkillSet = {
  id: "ml",
  name: "Machine Learning",
  skills: [
    "scikit-learn"
  ]
};

const skills: SkillSet[] = [
  frontend,
  database,
  backend,
  qa,
  dataOps,
  cloud,
  mobile,
  ml
];

export default skills;