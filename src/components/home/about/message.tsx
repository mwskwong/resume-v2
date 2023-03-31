import { Box, Typography } from "@mui/material";
import { FC } from "react";

import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import selfIntroduction from "@/constants/selfIntroduction";

const Message: FC = () => (
  <div>
    <Typography variant="h3" align="center" data-cy="greeting">
      {"Hello again! "}
      <Box sx={{ color: "primary.main" }} component="span">
        {`I'm ${firstName} ${lastName}.`}
      </Box>
    </Typography>
    <Box typography="subtitle1" textAlign="center" my={2} data-cy="jobTitles">
      {jobTitles.join(" & ")}
    </Box>
    <Typography align="center" data-cy="selfIntroduction">
      {selfIntroduction}
    </Typography>
  </div>
);

export default Message;
