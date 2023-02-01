import { CardProps } from "@mui/material";

interface CertificateCardProps extends CardProps {
  name: string;
  organization: string;
  status?: string;
  certificationUrl?: string;
}

export default CertificateCardProps;