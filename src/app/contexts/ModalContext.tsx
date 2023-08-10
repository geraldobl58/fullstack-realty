"use client";

import { createContext, useState } from "react";

interface ModalContentType {
  open: boolean;
  setModalOpen: () => void;
  setModalClose: () => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext({} as ModalContentType);

export function ModalProvider({ children }: ModalProviderProps) {
  const [open, setOpen] = useState(false);

  const setModalOpen = () => {
    setOpen(true);
  };
  const setModalClose = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        setModalOpen,
        setModalClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
