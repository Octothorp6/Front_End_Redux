import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  message: Yup.string()
});
