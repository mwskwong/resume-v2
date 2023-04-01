import { Box, Typography } from "@mui/material";
import { FC } from "react";

import jobTitles from "@/constants/job-titles";
import { firstName, lastName } from "@/constants/name";
import selfIntroduction from "@/constants/self-introduction";

const Message: FC = () => (
  <Box sx={{ textAlign: "center" }}>
    <Typography variant="h3" data-cy="greeting">
      {"Hello again! "}
      <Box sx={{ color: "primary.main" }} component="span">
        {`I'm ${firstName} ${lastName}.`}
      </Box>
    </Typography>
    <Box sx={{ typography: "subtitle1", my: 2 }} data-cy="jobTitles">
      {jobTitles.join(" & ")}
    </Box>
    <Typography data-cy="selfIntroduction">{selfIntroduction}</Typography>
  </Box>
);

export default Message;
