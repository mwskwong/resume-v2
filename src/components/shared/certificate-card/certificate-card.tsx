import {
  Card,
  CardActionArea,
  CardContent,
  CardProps,
  Typography,
} from "@mui/material";
import { FC } from "react";

import { getIconByContentfulId } from "../icons";

interface Props extends CardProps {
  name?: string;
  organization?: {
    id: string;
    name: string;
  };
  status?: string;
  certificateUrl?: string;
}

const CertificateCard: FC<Props> = ({
  name,
  organization,
  status,
  certificateUrl,
  ...props
}) => {
  const Icon = organization && getIconByContentfulId(organization.id);

  return (
    <Card {...props}>
      <CardActionArea
        disabled={!certificateUrl}
        href={certificateUrl ?? ""}
        target="_blank"
      >
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {Icon && <Icon fontSize="large" />}
          <div>
            <Typography>{name}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {organization?.name}
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
