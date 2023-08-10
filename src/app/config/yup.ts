import * as BaseYup from "yup";
import { ptForm } from "yup-locale-pt";

export const Yup = BaseYup;

Yup.setLocale({
  ...ptForm,
  number: {
    ...ptForm.number,
    max: (param) => `O campo deve ser menor ou igual a ${param.max}.`,
  },
  mixed: {
    ...ptForm.mixed,
    notType: "O campo é inválido.",
  },
});
