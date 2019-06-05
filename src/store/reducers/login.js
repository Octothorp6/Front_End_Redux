import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, RETURN_ERRORS, LOG_OUT_SUCCESS } from "../actions/types"
import { authState } from "../initialState"

export default function LoginReducer(state = authState, action) {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          isLoading: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoading: false,
          isAuthenticated: true,
          error: null
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: true
        };
      case RETURN_ERRORS:
        return {
          ...state,
          error: true,
          errorText: "Sorry, there appears to be an error"
        };
      case LOG_OUT_SUCCESS:
        return {
          ...state,
          isAuthenticated: false
        };
      default:
        return state;
    }
  }
  