import { CREDIT_CHECKOUT, CRYPTO_CHECKOUT, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, GET_TOTAL } from "./types";

export const handleCryptoCheckout = payload => {
  return {
    type: CRYPTO_CHECKOUT,
    payload: payload
  };
};

export const handleCreditCheckout = payload => {
  return {
    type: CREDIT_CHECKOUT,
    payload: payload
  }
}

export const addItemToCart = item => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  };
};

export const removeItemFromCart = itemId => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: itemId
  };
};

export const getTotal = payload => {
  return {
    type: GET_TOTAL,
    payload: [...payload.cart]
  };
};


