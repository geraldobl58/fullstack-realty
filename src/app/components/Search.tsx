"use client";

import { Search } from "@mui/icons-material";
import { Box, Button, Paper, TextField } from "@mui/material";

const SearchAndFilter = () => {
  return (
    <Paper sx={{ height: 100, m: 3, p: 3 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <TextField
          fullWidth
          variant="outlined"
          label="Digite cidades ou bairros ou caracteristicas (ex: piscina)"
        />
        <Button type="submit" variant="contained" startIcon={<Search />}>
          Buscar
        </Button>
      </Box>
    </Paper>
  );
};

export default SearchAndFilter;
