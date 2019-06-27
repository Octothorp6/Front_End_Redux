import API from "../../utils/API";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT_SUCCESS,
  TOGGLE_SIDEBAR,
  REGISTER_ERROR
} from "../actions/types";
import { authData, signUpInfo } from "../../utils/sanitizer";

// TOGGLE SIDEBAR FOR DASHBOARD
export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

//===========================================================================
// USER REGISTER  ACTIONS

export const register = user => {
  let info = signUpInfo(user);

  return async dispatch => {
    dispatch({ type: REGISTER_USER });
    try {
      let authRequest = await API.register(info);
      if (authRequest.data.result.result.status === "success") {
        let token = authRequest.data.result.token;
        sessionStorage.setItem("token", token);
        dispatch(registerSuccess(username, token));
      }
    } catch (error) {
      dispatch(registerError(error));
    }
  };
};

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload: payload
});

export const registerError = error => ({
  type: REGISTER_ERROR,
  payload: error
});

//============================================================================
// USER LOGIN && LOGOUT ACTIONS

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

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload: payload
});

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: error
});

export const logOut = () => dispatch => {
  sessionStorage.removeItem("token");
  dispatch(logOutSuccess());
};

export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS
});
