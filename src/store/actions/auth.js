import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT_SUCCESS,
  TOGGLE_SIDEBAR
} from "../actions/types";

export const login = () => ({
  type: LOGIN
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

export const loginUser = (username, password) => dispatch => {
  dispatch(login());

  if (!!username && !!password) {
    setTimeout(() => {
      localStorage.setItem("token", username);
      dispatch(loginSuccess());
    }, 2000);
  } else {
    dispatch(loginFailure());
  }
};


export const logOut = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(logOutSuccess());
};


export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS
});
