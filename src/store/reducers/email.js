import { CONTACT_US, CONTACT_US_SUCCESS, CONTACT_US_ERROR, SEND_EMAIL, SEND_EMAIL_SUCCESS, SEND_EMAIL_ERROR} from "../actions/types";
import { contactState } from "../initialState";

export default function emailReducer(state = contactState, action) {
  switch (action.type) {
    case CONTACT_US:
      return {
        ...state,
        status: "query"
      };
    case CONTACT_US_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        message: action.payload.message
      }
    case CONTACT_US_ERROR:
      return {
        ...state,
        error: true
      }
    case SEND_EMAIL:
      return {
        ...state,
        status: "pending"
      }
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        status: "sent",
        ...action.payload
      }
    case SEND_EMAIL_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state;
  } 
}
