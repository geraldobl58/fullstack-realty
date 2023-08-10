import { Yup } from "../config/yup";

export const schemaRegister = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
