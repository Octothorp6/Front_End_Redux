import API from "../../utils/API";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT_SUCCESS,
  TOGGLE_SIDEBAR
} from "../actions/types";
import { authData } from "../../utils/sanitizer";

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload: payload
});

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: error
});

export const login = (username, password) => {
  let admin = authData(username, password);

  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      let authRequest = await API.login(admin);
      if (authRequest.data.result.message === "Auth Success") {
        let token = authRequest.data.result.token;
        sessionStorage.setItem("token", token);
        dispatch(loginSuccess(username, token));
      }
    } catch (error) {
      dispatch(loginError(error));
    }
  };
};

export const logOut = () => dispatch => {
  sessionStorage.removeItem("token");
  dispatch(logOutSuccess());
};

export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS
});
