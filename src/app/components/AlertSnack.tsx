"use client";

import { Alert, Snackbar } from "@mui/material";

import { useSnackBar } from "../hooks/useSnackBar";

interface AlertSnackProps {
  title: string;
}

const AlertSnack = ({ title }: AlertSnackProps) => {
  const { open, handleClose } = useSnackBar();

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {title}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnack;
