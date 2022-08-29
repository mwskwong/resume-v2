
type Certification = {
  name: string,
  organization: string,
  issuedDate: Date | "In Progress",
  expirationDate?: Date | "Never Expire",
  url?: string
}

const certifications: Certification[] = [
  {
    name: "MongoDB Certified DBA Associate",
    organization: "mongoDB",
    issuedDate: "In Progress"
  }
];

export default certifications;