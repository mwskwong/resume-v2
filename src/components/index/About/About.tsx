import { Box, Container, Stack } from "@mui/material";
import { firstName, lastName } from "constants/name";

import { ABOUT } from "constants/nav";
import { FC } from "react";
import Image from "next/image";
import Message from "./Message";
import { PersonRounded as Person } from "@mui/icons-material";
import SectionHeading from "components/common/SectionHeading";
import { SectionProps } from "types";
import SkillSet from "./SkillSet";
import personalPhoto from "assets/images/personal_photo.jpg";
import styles from "./about.module.css";
import useSx from "./useAboutSx";

const About: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Box sx={sx.root} component="section" id={ABOUT.id}>
      <Container>
        <Stack sx={sx.stack} spacing={6}>
          <SectionHeading heading="About" icon={<Person />} />
          <Image
            src={personalPhoto}
            alt={`Picture of ${firstName} ${lastName}`}
            width={200}
            height={200}
            className={styles.picture}
          />
          <Message />
          <SkillSet />
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") About.whyDidYouRender = true;

export default About;