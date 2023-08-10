"use client";

import { MouseEvent, useState } from "react";

import { signOut } from "next-auth/react";

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

import { useModal } from "../hooks/useModal";

import { SafeUser } from "../types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const { setModalOpen } = useModal();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Configurações">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={currentUser?.name || ""}
            src={currentUser?.image || "/images/placeholder.jpeg"}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {currentUser ? (
          <Box>
            <MenuItem>
              <Typography>Minhas propriedades</Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Typography>Meus favoritos</Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleSignOut}>
              <Typography>Sair</Typography>
            </MenuItem>
          </Box>
        ) : (
          <Box>
            <MenuItem onClick={setModalOpen}>
              <Typography>Entrar</Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Typography>Cadastre-se</Typography>
            </MenuItem>
          </Box>
        )}
      </Menu>
    </Box>
  );
};

export default UserMenu;
