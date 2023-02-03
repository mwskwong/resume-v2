import { Box, Typography } from "@mui/material";
import { FC, Fragment } from "react";

import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import selfIntroduction from "@/constants/selfIntroduction";

import useSx from "./useMessageSx";

const Message: FC = () => {
  const sx = useSx();

  return (
    <div>
      <Typography sx={sx.hello} variant="h3" data-cy="greetingMessage">
        {"Hello again! "}
        <Box sx={sx.name} component="span">
          {`I'm ${firstName} ${lastName}.`}
        </Box>
      </Typography>
      <Box sx={sx.occupationContainer} data-cy="jobTitles">
        {jobTitles.map((title, index) => (
          <Fragment key={title}>
            {index !== 0 && <Box sx={sx.dot} />}
            <Typography sx={sx.jobTitle} component="div">
              {title}
            </Typography>
          </Fragment>
        ))}
      </Box>
      <Typography sx={sx.intro} data-cy="selfIntroduction">
        {selfIntroduction}
      </Typography>
    </div>
  );
};

if (process.env.NODE_ENV === "development") {
  Message.whyDidYouRender = true;
}

export default Message;