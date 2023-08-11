"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { yupResolver } from "@hookform/resolvers/yup";

import { SnackbarProvider, enqueueSnackbar } from "notistack";

import { Button, Grid, Typography } from "@mui/material";
import { GitHub, Google } from "@mui/icons-material";

import ModalUI from "../components/Modal";
import InputField from "../components/InputField";

import { schemaLogin } from "../schemas/login";

import { useModal } from "../hooks/useModal";

const Login = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { setModalClose } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const toggle = useCallback(() => {
    // Abrir modal de cadastro e fechar o login
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        enqueueSnackbar("Login realizado com sucesso!", {
          variant: "success",
          preventDuplicate: true,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
        router.refresh();
        setModalClose();
      }

      if (callback?.error) {
        enqueueSnackbar("Houve um erro ao realizar o login", {
          variant: "error",
          preventDuplicate: true,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      }
    });
    setIsLoading(false);
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
    <>
      <SnackbarProvider />
      <ModalUI
        title="Entrar"
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
                onClick={() => signIn("google")}
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
                onClick={() => signIn("github")}
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
                Ainda não tem conta?
              </Typography>
              <Typography onClick={toggle}>Cadadstrar</Typography>
            </Grid>
          </Grid>
        }
      />
    </>
  );
};

export default Login;
