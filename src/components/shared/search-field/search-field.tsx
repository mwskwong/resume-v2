import {
  ClearRounded as Clear,
  SearchRounded as Search,
} from "@mui/icons-material";
import { Fade, IconButton, InputAdornment, InputBase } from "@mui/material";
import { FC } from "react";

import cx from "@/utils/cx";

import SearchFieldProps from "./search-field-props";

const SearchField: FC<SearchFieldProps> = ({ sx, onClear, ...props }) => (
  <InputBase
    placeholder="Search..."
    sx={cx(
      {
        display: "flex",
        alignItems: "center",
        borderRadius: 1,
        px: 2,
        maxWidth: 400,
        height: 56,
      },
      sx
    )}
    startAdornment={
      <InputAdornment position="start">
        <Search color="inherit" />
      </InputAdornment>
    }
    endAdornment={
      onClear && (
        <Fade in={Boolean(props.value)}>
          <InputAdornment position="end">
            <IconButton sx={{ mx: -1 }} onClick={onClear}>
              <Clear />
            </IconButton>
          </InputAdornment>
        </Fade>
      )
    }
    {...props}
  />
);

export default SearchField;
