import { Control, useController } from "react-hook-form";
import { FilledInput, FormControl, FormHelperText, InputLabel, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import React, { FC, memo, useId } from "react";

import FormValues from "./FormValues";

type TextFieldProps = {
  name: keyof FormValues,
  control: Control<FormValues>,
  label: MuiTextFieldProps["label"],
  autoComplete?: MuiTextFieldProps["autoComplete"],
  multiline?: MuiTextFieldProps["multiline"],
  rows?: MuiTextFieldProps["rows"],
  disabled?: MuiTextFieldProps["disabled"]
}

/**
 * This is a stripped down version of the MUI TextField.
 * Only essential features for the contact form are kept.
 */
const TextField: FC<TextFieldProps> = ({ name, control, label, autoComplete, multiline, rows, disabled }) => {
  const {
    field: { ref, ...field },
    fieldState: { error }
  } = useController({ name, control });

  const inputId = useId();
  const helperTextId = useId();

  return (
    <FormControl fullWidth error={Boolean(error)} disabled={disabled}>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <FilledInput
        inputRef={ref}
        {...field}
        id={inputId}
        aria-describedby={helperTextId}
        autoComplete={autoComplete}
        multiline={multiline}
        rows={rows}
      />
      <FormHelperText id={helperTextId}>{error?.message || " "}</FormHelperText>
    </FormControl>
  );
};

if (process.env.NODE_ENV === "development") TextField.whyDidYouRender = true;

export default memo(TextField);