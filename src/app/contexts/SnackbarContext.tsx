"use client";

import { createContext, useState } from "react";

interface SnackBarContentType {
  open: boolean;
  setOpenSnackbar: () => void;
  setCloseSnackbar: () => void;
}

interface SnackBarProviderProps {
  children: React.ReactNode;
}

export const SnackBarContext = createContext({} as SnackBarContentType);

export function SnackBarProvider({ children }: SnackBarProviderProps) {
  const [open, setOpen] = useState(false);

  const setOpenSnackbar = () => {
    setOpen(true);
  };

  const setCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <SnackBarContext.Provider
      value={{
        open,
        setOpenSnackbar,
        setCloseSnackbar,
      }}
    >
      {children}
    </SnackBarContext.Provider>
  );
}
