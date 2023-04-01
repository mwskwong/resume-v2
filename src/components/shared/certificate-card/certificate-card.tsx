import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { FC } from "react";

import getBrandIconById from "@/components/shared/icons/get-brand-icon-by-id";

import CertificateCardProps from "./certificate-card-props";

const CertificateCard: FC<CertificateCardProps> = ({
  name,
  organization,
  status,
  certificateUrl,
  ...props
}) => {
  const Icon = getBrandIconById(organization.id);

  return (
    <Card data-cy="certificateCard" {...props}>
      <CardActionArea
        disabled={!certificateUrl}
        href={certificateUrl ?? ""}
        target="_blank"
      >
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Icon fontSize="large" />
          <div>
            <Typography data-cy="name">{name}</Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              data-cy="organization"
            >
              {organization.name}
            </Typography>
            {status && (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {status}
              </Typography>
            )}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CertificateCard;
