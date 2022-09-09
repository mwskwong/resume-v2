export type CertificationConstants = {
  name: string,
  organization: string,
  issuedDate: Date | "In Progress",
  expirationDate?: Date | "Never Expire"
}

const certifications: CertificationConstants[] = [
  {
    name: "MongoDB Certified DBA Associate",
    organization: "mongoDB",
    issuedDate: "In Progress"
  }
];

export default certifications;