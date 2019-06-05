import * as Yup from "yup";

export const CheckoutSchema = Yup.object().shape({
  userFirst: Yup.string().required("First name is required."),
  userLast: Yup.string().required("Last name is required"),
  userEmail: Yup.string()
    .email("Incorrect email format.")
    .required("Email is required."),
  shippingAddress1: Yup.string()
    .min(10)
    .required("Please enter your address."),
  shippingAddress2: Yup.string(),
  shippingCity: Yup.string().required("City is required."),
  shippingState: Yup.string().required("State is required."),
  shippingCountry: Yup.string().required("Country is required."),
  shippingZip: Yup.string().required("Zip code is required."),
  cardHolder: Yup.string().required("Card holder is required."),
  cardNumber: Yup.number()
    .integer()
    .min(16)
    .required("Card number is required."),
  expiration: Yup.date().required("Expiration is required"),
  cvv: Yup.number().integer().min(3).required("Cvv is required."),
  billingAddress1: Yup.string().min(10),
  billingAddress2: Yup.string().min(10),
  billingState: Yup.string().min(10),
  billingCity: Yup.string().min(10),
  billingCountry: Yup.string().min(10),
  billingZip: Yup.number()
    .integer()
    .min(5)
    .max(5)
});
