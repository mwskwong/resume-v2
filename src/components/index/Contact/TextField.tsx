import { FilledInput, FormControl, FormHelperText, InputLabel, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { FC, useId } from "react";
import { Control, useController } from "react-hook-form";

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
  } = useController<FormValues>({ name, control });

  const inputId = useId();
  const helperTextId = useId();

  return (
    <FormControl fullWidth error={Boolean(error)} disabled={disabled} data-cy={name}>
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
      <FormHelperText id={helperTextId}>{error?.message ?? "\u200B"}</FormHelperText>
    </FormControl>
  );
};

if (process.env.NODE_ENV === "development") TextField.whyDidYouRender = true;

export default TextField;