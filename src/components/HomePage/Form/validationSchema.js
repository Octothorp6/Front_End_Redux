import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required("First name is required."),
  email: Yup.string()
    .email("Incorrect email format.")
    .required("Email is required."),
  message: Yup.string()
    .required("Message is required.")
});
