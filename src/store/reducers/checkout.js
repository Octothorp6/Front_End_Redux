import { checkoutState } from "../initialState";
import {
  CRYPTO_CHECKOUT,
  CREDIT_CHECKOUT,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  GET_TOTAL
} from "../actions/types";

export default function checkoutReducer(state = checkoutState, action) {
  let tempCart = [...state.cart];
  let updatedItemIndex;
  let total = 0;

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
        cart: tempCart
      };
    case REMOVE_ITEM_FROM_CART:
      let index = tempCart
        .map(function(item) {
          return item.itemId;
        })
        .indexOf(action.payload);
      if (tempCart.length === 0) {
        return tempCart;
      } else if (index !== -1) {
        tempCart.splice(index, 1);
      }
      return {
        ...state,
        cart: tempCart
      };
    case GET_TOTAL:
      if (tempCart.length === 0) {
        return total;
      } else {
        tempCart.reduce((currentTotal, item) => {
          let parsedTotal = parseInt(item.itemCost);
          total = parsedTotal + currentTotal;
          return total;
        });
      }
      return {
        ...state,
        orderTotal: total
      };
    case CREDIT_CHECKOUT:
      return {
        ...state,
        ...action.payload
      };
    case CRYPTO_CHECKOUT:
      return {
        ...state,
        payType: "BTC",
        ...action.payload
      };
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        madeOrder: true,
        orderStatus: "pending",
        ...action.payload
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
