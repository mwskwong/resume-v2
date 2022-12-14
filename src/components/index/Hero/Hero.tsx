import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import resume from "assets/documents/resume.pdf";
import SocialMedia from "components/common/SocialMedia";
import jobTitles from "constants/jobTitles";
import { firstName, lastName } from "constants/name";
import { HOME } from "constants/nav";
import { FC, useEffect, useMemo, useRef } from "react";
import TypeIt from "typeit";
import { SectionProps } from "types";

import useSx from "./useHeroSx";

const Hero: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);
  const motion = useMediaQuery("(prefers-reduced-motion: no-preference)");
  const typeItRef = useRef();

  const strings = useMemo(() => [
    ...jobTitles.map(jobTitle => `A ${jobTitle}.`),
    `${firstName} ${lastName}.`
  ], []);

  useEffect(() => {
    if (motion) {
      const delays = {
        beforeTyping: 375,
        afterTyping: 1500
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: TypeIt is not working with TS yet
      const typeIt = new TypeIt(typeItRef.current, {
        startDelay: delays.afterTyping,
        startDelete: true,
        breakLines: false,
        loop: true,
        nextStringDelay: 0,
        loopDelay: 0
      })
        .delete(null, { delay: delays.beforeTyping });

      for (let i = 0; i < strings.length; i++) {
        typeIt.type(strings[i], { delay: delays.afterTyping });
        if (i !== strings.length - 1) {
          typeIt.delete(null, { delay: delays.beforeTyping });
        }
      }

      typeIt.go();

      return () => typeIt.destroy();
    }
  }, [motion, strings]);

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Typography component="div" sx={sx.greetings}>
        Greetings
      </Typography>
      <Typography variant="h1" sx={sx.title}>
        {"I Am "}
        <Box ref={typeItRef} component="span" sx={sx.typeIt}>
          {strings[strings.length - 1]}
        </Box>
      </Typography>
      <SocialMedia sx={sx.socialMedia} />
      <Button
        variant="contained"
        size="large"
        component="a"
        href={resume}
        target="_blank"
        data-cy="resume"
      >
        Download Resume
      </Button>
    </Container>
  );
};

if (process.env.NODE_ENV === "development") Hero.whyDidYouRender = true;

export default Hero;
