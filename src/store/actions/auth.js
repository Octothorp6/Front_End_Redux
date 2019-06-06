import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT_SUCCESS,
  TOGGLE_SIDEBAR
} from "../actions/types";

export const login = () => ({
  type: LOGIN,
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload: payload
});

export const loginError = () => ({
  type: LOGIN_ERROR
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

export const loginUser = (username, password) => dispatch => {
  dispatch(login());

  if (!!username && !!password) {
    setTimeout(() => {
      localStorage.setItem("token", username);
      dispatch(loginSuccess(username));
    }, 2000);
  } else {
    dispatch(loginError());
  }
};


export const logOut = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(logOutSuccess());
};


export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS
});
