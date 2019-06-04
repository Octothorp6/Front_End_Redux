import { SEND_MESSAGE, UPDATE_FIELD } from "../actions/types";

export const contactUs = payload => {
  return {
    type: SEND_MESSAGE,
    payload: payload
  };
};

export const updateField = payload => {
  return {
    type: UPDATE_FIELD,
    payload: payload
  };
};
