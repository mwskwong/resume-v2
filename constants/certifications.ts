import type { CertificationConstants } from "./_certifications";
import certificationsConstants from "./_certifications";

type Certification = Omit<CertificationConstants, "hasFile"> & {
  url?: string
}

const certifications: Certification[] = certificationsConstants;

export default certifications;