import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT_SUCCESS,
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../actions/types";
import { authState } from "../initialState";

export default function AuthReducer(state = authState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.username,
        token: action.payload.token,
        isLoading: false,
        isAuthenticated: true,
        error: null
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMsg: action.payload.message
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.username,
        token: action.payload.token,
        isLoading: false,
        isAuthenticated: true,
        error: null
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMsg: action.payload.message
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
