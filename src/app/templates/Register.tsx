"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { enqueueSnackbar } from "notistack";

import axios from "axios";

import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Grid, Typography } from "@mui/material";
import { GitHub, Google } from "@mui/icons-material";

import ModalUI from "../components/Modal";

import InputField from "../components/InputField";

import { schemaRegister } from "../schemas/register";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
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
        enqueueSnackbar("Houve um erro ao realizar o cadastro!", {
          variant: "error",
          preventDuplicate: true,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
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
          Entre e acesse os anúncios que você contatou, seus favoritos e as
          pesquisas salvas
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <InputField
          id="fullname"
          label="Nome completo"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          errorMessage={errors.fullname?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          id="email"
          type="email"
          label="E-mail"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          errorMessage={errors.email?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          id="password"
          type="password"
          label="Senha"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          errorMessage={errors.password?.message}
        />
      </Grid>
    </Grid>
  );

  return (
    <ModalUI
      title="Cadastrar-se"
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
  );
};

export default Register;
