import { CREATE_MESSAGE, RETURN_ERRORS } from "./types";

// CREATE MESSAGE
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
  return {
    type: RETURN_ERRORS,
    payload: { msg, status }
  };
};