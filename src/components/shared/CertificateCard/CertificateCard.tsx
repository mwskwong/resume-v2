import { Card, CardActionArea, CardContent, SvgIconProps, Typography } from "@mui/material";
import { ElementType, FC } from "react";

import DataCamp from "@/components/shared/icons/DataCamp";
import EnterpriseDB from "@/components/shared/icons/EnterpriseDB";
import Google from "@/components/shared/icons/Google";
import Microsoft from "@/components/shared/icons/Microsoft";
import MongoDB from "@/components/shared/icons/MongoDB";
import Oracle from "@/components/shared/icons/Oracle";
import Udemy from "@/components/shared/icons/Udemy";
import { Course } from "@/types";

import CertificateCardProps from "./CertificateCardProps";
import useSx from "./useSx";

const Icons: Record<Course["institution"], ElementType<SvgIconProps>> = {
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
  const Icon = Icons[organization as Course["institution"]];
  const cardContent = (
    <CardContent sx={sx.cardContent}>
      <Icon fontSize="large" sx={sx.icon} />
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
