"use client";

import { createTheme } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

import { palette } from "./palette";
import { typography } from "./typography";

export const theme = createTheme(
  {
    palette,
    typography,
    components: {
      MuiTextField: {
        defaultProps: {
          size: "small",
        },
      },
      MuiSelect: {
        defaultProps: {
          size: "small",
        },
      },
      MuiFormControl: {
        defaultProps: {
          size: "small",
        },
      },
      MuiAutocomplete: {
        defaultProps: {
          size: "small",
        },
      },
    },
    shape: {
      borderRadius: 5,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  },
  ptBR
);
