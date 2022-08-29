import { Card, CardActionArea, CardContent, CardProps, SvgIconProps, Typography } from "@mui/material";
import { ElementType, FC, memo } from "react";

import EnterpriseDB from "../icons/EnterpriseDB";
import Microsoft from "../icons/Microsoft";
import MongoDB from "../icons/MongoDB";
import Oracle from "../icons/Oracle";
import Udemy from "../icons/Udemy";
import camelCase from "camelcase";
import useSx from "./useSx";

type CertAndCourseCardProps = CardProps & {
  name: string,
  organization: string,
  status?: string,
  certificationUrl?: string
}

const Icons: Record<string, ElementType<SvgIconProps>> = {
  microsoft: Microsoft,
  oracle: Oracle,
  udemy: Udemy,
  enterpriseDb: EnterpriseDB,
  mongoDb: MongoDB
};

const CertAndCourseCard: FC<CertAndCourseCardProps> = ({ name, organization, status, certificationUrl, ...props }) => {
  const sx = useSx();
  const organizationCamelCase = camelCase(organization);
  const Icon = Icons[organizationCamelCase];
  const cardContent = (
    <CardContent sx={sx.cardContent}>
      {Icon && <Icon fontSize="large" sx={sx.icon} />}
      <div>
        <Typography>{name}</Typography>
        <Typography variant="body2" color={`${organizationCamelCase}.main`}>{organization}</Typography>
        {status && <Typography variant="body2" sx={sx.status}>{status}</Typography>}
      </div>
    </CardContent>
  );

  return (
    <Card {...props}>
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

if (process.env.NODE_ENV === "development") CertAndCourseCard.whyDidYouRender = true;

export default memo(CertAndCourseCard);