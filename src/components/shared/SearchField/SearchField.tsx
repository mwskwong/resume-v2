import {
  ClearRounded as Clear,
  SearchRounded as Search,
} from "@mui/icons-material";
import { Fade, IconButton, InputAdornment, InputBase } from "@mui/material";
import { FC } from "react";

import cx from "@/utils/cx";

import SearchFieldProps from "./SearchFieldProps";
import useSx from "./useSx";

const SearchField: FC<SearchFieldProps> = ({
  sx: sxProps,
  onClear,
  ...props
}) => {
  const sx = useSx();

  return (
    <InputBase
      placeholder="Search..."
      sx={cx(sx.root, sxProps)}
      startAdornment={
        <InputAdornment position="start">
          <Search color="inherit" />
        </InputAdornment>
      }
      endAdornment={
        onClear && (
          <Fade in={Boolean(props.value)}>
            <InputAdornment position="end">
              <IconButton sx={sx.clearButton} onClick={onClear}>
                <Clear />
              </IconButton>
            </InputAdornment>
          </Fade>
        )
      }
      {...props}
    />
  );
};

export default SearchField;
