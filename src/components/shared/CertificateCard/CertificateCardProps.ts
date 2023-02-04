import { CardProps } from "@mui/material";

import { Brand } from "@/types";

interface CertificateCardProps extends CardProps {
  name: string;
  organization: Brand;
  status?: string;
  certificateUrl?: string;
}

export default CertificateCardProps;