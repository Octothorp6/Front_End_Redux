import API from "../../utils/API";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT_SUCCESS,
  TOGGLE_SIDEBAR,
  REGISTER_USER,
  REGISTER_SUCCESS,
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
  let auth = signUpInfo({
    userFirst: user.userFirst,
    userLast: user.userLast,
    userEmail: user.userEmail,
    password: user.password
  });

  return async dispatch => {
    dispatch({ type: REGISTER_USER });
    try {
      let authRequest = await API.register(auth);
      console.log(authRequest.data);
      if (authRequest.data.result.status === "success") {
        let token = authRequest.data.result.token;
        sessionStorage.setItem("token", token);
        dispatch(registerSuccess({ userEmail: user.userEmail, token }));
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

export const login = user => {
  let auth = authData({ username: user.username, password: user.password });

  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      let authRequest = await API.login(auth);
      if (authRequest.data.result.message === "Auth Success") {
        let token = authRequest.data.result.token;
        sessionStorage.setItem("token", token);
        dispatch(loginSuccess({ username: user.username, token }));
      } else {
        dispatch(loginError({ message: authRequest.data.result.message }));
        window.alert(authRequest.data.result.message);
      }
    } catch (error) {
      window.alert(error);
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
