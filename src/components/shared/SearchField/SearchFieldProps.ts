import { InputBaseProps } from "@mui/material";
import { MouseEventHandler } from "react";

interface SearchFieldProps extends InputBaseProps {
  onClear?: MouseEventHandler<HTMLButtonElement>;
}

export default SearchFieldProps;
