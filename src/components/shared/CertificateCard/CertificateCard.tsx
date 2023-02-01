import { Card, CardActionArea, CardContent, CardProps, SvgIconProps, Typography } from "@mui/material";
import { ElementType, FC } from "react";

import DataCamp from "../icons/DataCamp";
import EnterpriseDB from "../icons/EnterpriseDB";
import Google from "../icons/Google";
import Microsoft from "../icons/Microsoft";
import MongoDB from "../icons/MongoDB";
import Oracle from "../icons/Oracle";
import Udemy from "../icons/Udemy";
import useSx from "./useSx";

type CertificateCardProps = CardProps & {
  name: string;
  organization: string;
  status?: string;
  certificationUrl?: string;
}

const Icons: Record<string, ElementType<SvgIconProps>> = {
  microsoft: Microsoft,
  oracle: Oracle,
  udemy: Udemy,
  enterpriseDB: EnterpriseDB,
  mongoDB: MongoDB,
  dataCamp: DataCamp,
  google: Google
};

const CertificateCard: FC<CertificateCardProps> = ({ name, organization, status, certificationUrl, ...props }) => {
  const sx = useSx(organization);
  const Icon = Icons[organization];
  const cardContent = (
    <CardContent sx={sx.cardContent}>
      {Icon && <Icon fontSize="large" sx={sx.icon} />}
      <div>
        <Typography>{name}</Typography>
        <Typography sx={sx.organization}>{organization}</Typography>
        {status && <Typography variant="body2" sx={sx.status}>{status}</Typography>}
      </div>
    </CardContent>
  );

  return (
    <Card {...props} data-cy={name}>
      {certificationUrl
        ? (
          <CardActionArea href={certificationUrl} target="_blank">
            {cardContent}
          </CardActionArea>
        )
        : cardContent
      }
    </Card>
  );
};

if (process.env.NODE_ENV === "development") CertificateCard.whyDidYouRender = true;

export default CertificateCard;
