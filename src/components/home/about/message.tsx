import { Box, Typography } from "@mui/material";
import { FC } from "react";

import {
  firstName,
  jobTitles,
  lastName,
  selfIntroduction,
} from "@/constants/data";

const Message: FC = () => (
  <Box sx={{ textAlign: "center" }}>
    <Typography variant="h3" data-cy="greeting">
      {"Hello again! "}
      <Box sx={{ color: "primary.main" }} component="span">
        {`I'm ${firstName} ${lastName}.`}
      </Box>
    </Typography>
    <Typography
      variant="subtitle1"
      component="div"
      sx={{ my: 2 }}
      data-cy="jobTitles"
    >
      {jobTitles.join(" & ")}
    </Typography>
    <Typography data-cy="selfIntroduction">{selfIntroduction}</Typography>
  </Box>
);

export default Message;
