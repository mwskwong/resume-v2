export type CertificationConstants = {
  name: string,
  organization: string,
  issuedDate: Date | "In Progress",
  expirationDate?: Date | "Never Expire",
  hasFile: boolean
}

const certifications: CertificationConstants[] = [
  {
    name: "MongoDB Certified DBA Associate",
    organization: "mongoDB",
    issuedDate: "In Progress",
    hasFile: false
  }
];

export default certifications;