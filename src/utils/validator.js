const addressRegex = RegExp(/\d+\w+\s\w+\s\w+/);
const dateRegex = RegExp(/^(19|20)\d\d[- /.](0[1-9]|1[012])$/);
const creditCardRegex = RegExp(/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/);
const zipCodeRegex = RegExp(/[0-9]{5}(?:-[0-9]{4})?$/);
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


export const formValid = ({ errors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(errors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

//validate form by step

// validate inputs
export default function validate(errors, name, value) {
  switch (name) {
    case "userFirst":
      errors.userFirst =
        value.length < 3 ? "minimum 3 characters required" : "";
      break;
    case "userLast":
      errors.userLast = value.length < 3 ? "minimum 3 characters required" : "";
      break;
    case "userEmail":
      errors.userEmail = emailRegex.test(value) ? "" : "invalid email address";
      break;
    case "shippingAddress1":
      errors.shippingAddress1 = addressRegex.test(value)
        ? ""
        : "incorrect address format";
      break;
    case "shippingState":
      errors.shippingState = 
        value.length < 2   
        ? "incorrect state format"
        : "";
      break;
    case "shippingCity":
      errors.shippingCity =
        value.length < 2 ? "minimum 2 characters required" : "";
      break;
    case "shippingZip":
      errors.shippingZip = zipCodeRegex.test(value)
        ? ""
        : "incorrect zip format";
      break;
    case "shippingCountry":
      errors.shippingCountry =
        value.length < 2 ? "incorrect country format" : "";
      break;
    case "cardNumber":
      errors.cardNumber = creditCardRegex.test(value)
        ? ""
        : "minimum 16 characters required";
      break;
    case "cvv":
      errors.cvv = value.length < 3 ? "minimum 3 characters required" : "";
      break;
    case "expiration":
      errors.expiration = dateRegex.test(value) ? "" : "invalid date format";
      break;
    default:
      break;
  }
}

export const validateStep = (activeStep, state, setNext) => {
  switch (activeStep) {
    case activeStep === 0:
      if (state.cart.length === 0) {
        return activeStep;
      }
      break;
    case activeStep === 1:
      if (
        state.userFirst.length === 0 ||
        state.userLast.length === 0 ||
        state.userEmail.length === 0 ||
        state.shippingAddress1.length === 0 ||
        state.shippingCity.length === 0 ||
        state.shippingState.length === 0 ||
        state.shippingZip.length === 0 ||
        state.shippingCountry.length === 0
      ) {
        return activeStep;
      } else {
        setNext(activeStep + 1);
      }
      break;
    case activeStep === 2:
      if (
        state.cardNumber.length !== 16 ||
        state.cvv.length < 3 ||
        state.expiration.length === 0
      ) {
        return activeStep;
      } else {
        setNext(activeStep + 1);
      }
      break;
    default:
      return activeStep;
  }
};
