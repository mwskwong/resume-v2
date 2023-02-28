import { Box, Typography } from "@mui/material";
import { FC } from "react";

import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import selfIntroduction from "@/constants/selfIntroduction";

import useSx from "./useMessageSx";

const Message: FC = () => {
  const sx = useSx();

  return (
    <div>
      <Typography sx={sx.hello} variant="h3" data-cy="greeting">
        {"Hello again! "}
        <Box sx={sx.name} component="span">
          {`I'm ${firstName} ${lastName}.`}
        </Box>
      </Typography>
      <Box sx={sx.jobTitleContainer} data-cy="jobTitles">
        {jobTitles.join(" & ")}
      </Box>
      <Typography sx={sx.intro} data-cy="selfIntroduction">
        {selfIntroduction}
      </Typography>
    </div>
  );
};

export default Message;
