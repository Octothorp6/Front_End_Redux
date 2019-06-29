import { checkoutState } from "../initialState";
import {
  GET_TOTAL,
  CRYPTO_CHECKOUT,
  CRYPTO_CHECKOUT_SUCCESS,
  CRYPTO_CHECKOUT_ERROR,
  CREDIT_CHECKOUT,
  CREDIT_CHECKOUT_ERROR,
  CREDIT_CHECKOUT_SUCCESS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  PRE_ORDER,PRE_ORDER_ERROR,
  PRE_ORDER_SUCCESS
} from "../actions/types";

export default function checkoutReducer(state = checkoutState, action) {
  let tempCart = state.cart;
  let updatedItemIndex;
  let total = null;

  switch (action.type) {
    case ADD_ITEM_TO_CART:
      updatedItemIndex = tempCart.findIndex(
        item => item.id === action.payload.itemId
      );
      if (updatedItemIndex < 0) {
        tempCart.push({ ...action.payload });
      } else {
        const updatedItem = {
          ...tempCart[updatedItemIndex]
        };
        tempCart[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        cart: [...tempCart]
      };
    case REMOVE_ITEM_FROM_CART:
      updatedItemIndex = tempCart.findIndex(
        item => item.itemId === action.payload
      );
      const updatedItem = {
        ...tempCart[updatedItemIndex]
      };
      if (updatedItemIndex !== -1) {
        tempCart.splice(updatedItemIndex, 1);
      } else {
        tempCart[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        cart: [...tempCart]
      };
    case GET_TOTAL:
      if (tempCart.length === 0) {
        return {
          ...state,
          orderTotal: total
        };
      } else {
        tempCart.reduce((currentTotal, item) => {
          let parsedTotal = parseInt(item.itemCost);
          total = parsedTotal + currentTotal;
          return total;
        }, 0);
      }
      return {
        ...state,
        orderTotal: total
      };
    case CREDIT_CHECKOUT:
      return {
        ...state,
        orderStatus: "pending"
      };
    case CREDIT_CHECKOUT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        madeOrder: true,
        orderStatus: "paid"
      };
    case CREDIT_CHECKOUT_ERROR:
      return {
        ...state,
        error: true
      };
    case CRYPTO_CHECKOUT:
      return {
        ...state,
        orderStatus: "pending"
      };
    case CRYPTO_CHECKOUT_ERROR:
      return {
        ...state,
        error: true
      };
    case CRYPTO_CHECKOUT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        madeOrder: true,
        orderStatus: "paid"
      }
    case PRE_ORDER:
        return {
        ...state,
        orderStatus: "PREORDER"
      };
    case PRE_ORDER_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.payload.message
      };
    case PRE_ORDER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        madeOrder: true,
      };
    default:
      return state;
  }
}
