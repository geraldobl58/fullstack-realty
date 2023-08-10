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
  description?: string | ReactNode;
  content: ReactNode;
  contentFull?: ReactNode;
}

const ModalUI = ({
  icon,
  title,
  description,
  contentFull,
  content,
}: ModalUIProps) => {
  const { open, setModalClose } = useModal();

  return (
    <Dialog open={open} onClose={setModalClose} fullWidth>
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
        <IconButton onClick={setModalClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent>
        {contentFull && contentFull}
        {description && <Typography gutterBottom>{description}</Typography>}
      </DialogContent>
      <Divider />
      <DialogActions sx={{ p: 2 }}>{content}</DialogActions>
    </Dialog>
  );
};

export default ModalUI;
