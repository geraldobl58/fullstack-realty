"use client";

import { createContext, useState } from "react";

interface ModalContenType {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext({} as ModalContenType);

export function ModalProvider({ children }: ModalProviderProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        handleClickOpen,
        handleClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
