import { Box, Container, Stack } from "@mui/material";
import { CSSProperties, FC } from "react";
import { firstName, lastName } from "constants/name";

import { ABOUT } from "constants/nav";
import Image from "next/image";
import Message from "./Message";
import SectionHeading from "components/common/SectionHeading";
import { SectionProps } from "types";
import SkillSet from "./SkillSet";
import personalPhoto from "assets/images/personal_photo.jpg";
import useSx from "./useAboutSx";

const About: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);
  const imageStyle: CSSProperties = { borderRadius: 38 };

  return (
    <Box sx={sx.root} component="section" id={ABOUT.id}>
      <Container>
        <Stack sx={sx.stack} spacing={6}>
          <SectionHeading heading="About" />
          <div>
            <Image
              src={personalPhoto}
              alt={`Picture of ${firstName} ${lastName}`}
              width={200}
              height={200}
              style={imageStyle}
            />
          </div>
          <Message />
          <SkillSet />
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") About.whyDidYouRender = true;

export default About;