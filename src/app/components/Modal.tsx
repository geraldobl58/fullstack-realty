"use client";

import { ReactNode } from "react";

import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { useModal } from "../hooks/useModal";

interface ModalUIProps {
  icon?: React.ReactNode;
  title: string;
  description: string | ReactNode;
  content: ReactNode;
}

const ModalUI = ({ icon, title, description, content }: ModalUIProps) => {
  const { open, handleClose } = useModal();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {icon}
          <Typography variant="h6" fontWeight={400}>
            {title}
          </Typography>
        </Box>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Typography gutterBottom>{description}</Typography>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          padding={1}
        >
          {content}
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ModalUI;
