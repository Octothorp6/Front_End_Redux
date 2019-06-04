import { SEND_MESSAGE, UPDATE_FIELD } from "../actions/types";
import { contactState } from "../initialState";

export default function contactReducer(state = contactState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    case SEND_MESSAGE:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        message: action.payload.message
      };
    default:
      return state;
  }
}
