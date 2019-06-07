import { emailContact, contactUs } from "../../utils/sanitizer";
import {
  SEND_EMAIL,
  SEND_EMAIL_ERROR,
  SEND_EMAIL_SUCCESS,
  CONTACT_US,
  CONTACT_US_ERROR,
  CONTACT_US_SUCCESS
} from "../actions/types";

import API from "../../utils/API";

//=================================================================
// SEND EMAIL TO USERS AFTER A PURCHASE

export const sendEmailRequest = () => ({
  type: SEND_EMAIL
});

export const sendEmailSuccess = payload => ({
  type: SEND_EMAIL_SUCCESS,
  payload: payload
});

export const sendEmailError = error => ({
  type: SEND_EMAIL_ERROR,
  payload: error
});

export const sendEmail = payload => {
  let customer = emailContact(payload);
  return async dispatch => {
    dispatch(sendEmailRequest());
    try {
      dispatch(sendEmailSuccess(payload));
      let thankYou = await API.sendEmail(customer);
        console.log(thankYou.statusText)
    } catch (error) {
      dispatch(sendEmailError(error));
    }
  };
};

//===================================================================
// RECIEVE INCOMING MESSAGE FROM USERS VIA FORM

export const contactUsRequest = () => ({
  type: CONTACT_US
});

export const contactUsError = error => ({
  type: CONTACT_US_ERROR,
  payload: error
});

export const contactUsSuccess = payload => ({
  type: CONTACT_US_SUCCESS,
  payload: payload
});

export const contactEthernode = payload => {
  let user = contactUs(payload);
  return async dispatch => {
    try {
      dispatch(contactUsRequest());
      let contact = await API.sendEmail(user);
      dispatch(contactUsSuccess(payload));
      console.log(contact.statusText);
    } catch (error) {
      dispatch(contactUsError(error));
    }
  };
};
