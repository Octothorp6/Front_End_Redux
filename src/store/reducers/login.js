import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT_SUCCESS } from "../actions/types"
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
      case LOGIN_ERROR:
        return {
          ...state,
          isLoading: false,
          error: true
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
  