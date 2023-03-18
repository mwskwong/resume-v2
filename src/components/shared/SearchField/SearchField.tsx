import { SearchRounded as Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import { FC } from "react";

import cx from "@/utils/cx";

import SearchFieldProps from "./SearchFieldProps";
import useSx from "./useSx";

const SearchField: FC<SearchFieldProps> = ({ sx: sxProps, ...props }) => {
  const sx = useSx();

  return (
    <InputBase
      startAdornment={<Search />}
      sx={cx(sx.root, sxProps)}
      {...props}
    />
  );
};

export default SearchField;
