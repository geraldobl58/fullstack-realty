"use client";

import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  fontFamily: ["Roboto", "sans-serif"].join(","),
  h1: {
    fontSize: 96,
    fontWeight: 300,
    letterSpacing: -1.5,
  },
  h2: {
    fontSize: 60,
    fontWeight: 300,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 48,
    fontWeight: 400,
    letterSpacing: 0,
  },
  h4: {
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: 0.25,
  },
  h5: {
    fontSize: 24,
    fontWeight: 400,
    letterSpacing: 0,
  },
  h6: {
    fontSize: 20,
    fontWeight: 400,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.1,
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.15,
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.15,
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0.4,
  },
  overline: {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
};
