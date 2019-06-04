import { GET_ERRORS } from "../actions/types";
import { errorState } from "../initialState";

export default function ErrorReducer(state = errorState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: action.payload.msg,
        status: action.payload.status
      };
    default:
      return state;
  }
}
