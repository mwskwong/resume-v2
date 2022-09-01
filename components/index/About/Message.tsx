import { Box, Typography } from "@mui/material";
import { firstName, lastName } from "constants/name";

import type { FC } from "react";
import { Fragment } from "react";
import jobTitles from "constants/jobTitles";
import selfIntro from "constants/selfIntro";
import useSx from "./useMessageSx";

const Message: FC = () => {
  const sx = useSx();

  return (
    <div>
      <Typography sx={sx.hello} variant="h3">
        {"Hello again! "}
        <Box sx={sx.name} component="span">
          {`I'm ${firstName} ${lastName}.`}
        </Box>
      </Typography>
      <Box sx={sx.occupationContainer}>
        {jobTitles.map((title, index) => (
          <Fragment key={title}>
            {index !== 0 && <Box sx={sx.dot} />}
            <Typography sx={sx.jobTitle} component="div">
              {title}
            </Typography>
          </Fragment>
        ))}
      </Box>
      <Typography sx={sx.intro}>
        {selfIntro}
      </Typography>
    </div>
  );
};

if (process.env.NODE_ENV === "development") Message.whyDidYouRender = true;

export default Message;