"use client";

import { Alert, Snackbar } from "@mui/material";

import { useSnackBar } from "../hooks/useSnackBar";

interface AlertSnackProps {
  title: string;
  severity: "error" | "warning" | "info" | "success";
  autoHideDuration?: number;
}

const AlertSnack = ({
  title,
  severity,
  autoHideDuration = 3000,
}: AlertSnackProps) => {
  const { open, handleClose } = useSnackBar();

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {title}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnack;
