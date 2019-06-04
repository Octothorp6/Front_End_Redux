import { checkoutState } from "../initialState";
import {
  UPDATE_FIELD,
  CRYPTO_CHECKOUT,
  CREDIT_CHECKOUT,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS
} from "../actions/types";

export default function checkoutReducer(state = checkoutState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldValue
      };
    case CREDIT_CHECKOUT:
      return {
        ...state
      };
    case CRYPTO_CHECKOUT:
      return {
        ...state
      };
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        madeOrder: true,
        orderStatus: "pending"
      };
    case CHECKOUT_FAILURE:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
