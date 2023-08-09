"use client";

import { useContext } from "react";

import { SnackBarContext } from "../contexts/SnackbarContext";

export function useSnackBar() {
  const context = useContext(SnackBarContext);

  return context;
}
