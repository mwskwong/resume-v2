import {
  Card,
  CardActionArea,
  CardContent,
  CardProps,
  Typography,
} from "@mui/material";

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

export default function CertificateCard({
  name,
  organization,
  status,
  certificateUrl,
  ...props
}: Props) {
  const Icon = organization && getIconByContentfulId(organization.id);

  return (
    <Card data-cy="certificateCard" {...props}>
      <CardActionArea
        disabled={!certificateUrl}
        href={certificateUrl ?? ""}
        target="_blank"
      >
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {Icon && <Icon fontSize="large" />}
          <div>
            <Typography data-cy="name">{name}</Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              data-cy="organization"
            >
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
}
