"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";

import { InputAdornment, TextField } from "@mui/material";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  disabled?: boolean;
  required?: boolean;
  variant?: "outlined" | "standard" | "filled";
  register: UseFormRegister<any>;
  errors: FieldErrors;
  helperMessage?: string;
  errorMessage?: string;
  prefix?: string | React.ReactNode;
}

const InputField = ({
  id,
  label,
  type = "text",
  fullWidth = true,
  size = "medium",
  disabled,
  variant = "outlined",
  required,
  register,
  errorMessage,
  helperMessage,
  prefix,
}: InputFieldProps) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      fullWidth={fullWidth}
      size={size}
      required={required}
      disabled={disabled}
      variant={variant}
      {...register(id, { required })}
      helperText={errorMessage || helperMessage}
      error={Boolean(errorMessage)}
      InputProps={{
        startAdornment: prefix ? (
          <InputAdornment position="start">{prefix}</InputAdornment>
        ) : undefined,
      }}
    />
  );
};

export default InputField;
