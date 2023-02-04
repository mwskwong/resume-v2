import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { FC } from "react";

import getBrandIconById from "@/components/shared/icons/getBrandIconById";

import CertificateCardProps from "./CertificateCardProps";
import useSx from "./useSx";

const CertificateCard: FC<CertificateCardProps> = ({ name, organization, status, certificateUrl, ...props }) => {
  const sx = useSx({ organization });
  const Icon = getBrandIconById(organization.id);
  const cardContent = (
    <CardContent sx={sx.cardContent}>
      <Icon fontSize="large" sx={sx.icon} />
      <div>
        <Typography>{name}</Typography>
        <Typography sx={sx.organization}>{organization.name}</Typography>
        {status && <Typography variant="body2" sx={sx.status}>{status}</Typography>}
      </div>
    </CardContent>
  );

  return (
    <Card {...props}>
      {certificateUrl
        ? (
          <CardActionArea href={certificateUrl} target="_blank">
            {cardContent}
          </CardActionArea>
        )
        : cardContent
      }
    </Card>
  );
};

if (process.env.NODE_ENV === "development") {
  CertificateCard.whyDidYouRender = true;
}

export default CertificateCard;
