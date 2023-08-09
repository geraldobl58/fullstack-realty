"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import axios from "axios";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { GitHub, Google } from "@mui/icons-material";

import { useSnackBar } from "../hooks/useSnackBar";

import ModalUI from "../components/Modal";
import AlertSnack from "../components/AlertSnack";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { handleClickOpen } = useSnackBar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);

    axios
      .post("/api/register", data)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        handleClickOpen();
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Bem-vindo ao Realty</Typography>
        <Typography variant="body1" color="text.secondary">
          Quero anúnciar meu imóvel.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="text"
          fullWidth
          size="medium"
          required
          disabled={isLoading}
          label="Nome completo"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="email"
          fullWidth
          size="medium"
          required
          disabled={isLoading}
          label="E-mail"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="password"
          fullWidth
          size="medium"
          required
          disabled={isLoading}
          label="Senha"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );

  return (
    <>
      <ModalUI
        title="Entrar ou Cadastrar-se"
        contentFull={bodyContent}
        content={
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                disabled={isLoading}
                onClick={handleSubmit(onSubmit)}
              >
                Continuar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                startIcon={<Google />}
                size="large"
                variant="outlined"
                onClick={() => {}}
              >
                Continuar com Google
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                startIcon={<GitHub />}
                size="large"
                variant="outlined"
                onClick={() => {}}
              >
                Continuar com Github
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
              >
                Já tenho conta! Entrar
              </Typography>
            </Grid>
          </Grid>
        }
      />
      {isError && (
        <AlertSnack
          title="Houve um erro ao realizar o cadastro!"
          severity="error"
        />
      )}
    </>
  );
};

export default Register;
