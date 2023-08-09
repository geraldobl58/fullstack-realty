"use client";

import { createContext, useState } from "react";

interface SnackBarContentType {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
}

interface SnackBarProviderProps {
  children: React.ReactNode;
}

export const SnackBarContext = createContext({} as SnackBarContentType);

export function SnackBarProvider({ children }: SnackBarProviderProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
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
        handleClickOpen,
        handleClose,
      }}
    >
      {children}
    </SnackBarContext.Provider>
  );
}
