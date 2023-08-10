import { Yup } from "../config/yup";

export const schemaRegister = Yup.object().shape({
  fullname: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
