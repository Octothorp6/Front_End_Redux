import {
  CREDIT_CHECKOUT,
  CRYPTO_CHECKOUT,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  GET_TOTAL,
  CREDIT_CHECKOUT_SUCCESS,
  CREDIT_CHECKOUT_ERROR,
  CRYPTO_CHECKOUT_SUCCESS
} from "./types";
import {
  signUpInfo,
  checkoutInfo,
  ccTxInfo,
  txInfo,
  invoiceInfo
} from "../../utils/sanitizer";
import API from "../../utils/API";

//=================================================================
// USER CART ACTIONS
export const addItemToCart = (item, cart) => {
  return dispatch => {
    dispatch({ type: ADD_ITEM_TO_CART, payload: item });
    dispatch(getTotal(cart));
  };
};

export const removeItemFromCart = (itemId, cart) => {
  return dispatch => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: itemId });
    dispatch(getTotal(cart));
  };
};

export const getTotal = cart => {
  return {
    type: GET_TOTAL,
    payload: cart
  };
};

//===================================================================
// CRYPTO CHECKOUT ACTIONS

export const cryptoCheckoutSuccess = payload => ({
  type: CRYPTO_CHECKOUT_SUCCESS,
  payload: payload
});

export const cryptoCheckoutError = error => ({
  type: CREDIT_CHECKOUT_ERROR,
  payload: error
});

export const cryptoCheckout = payload => {
  let customer = invoiceInfo(payload);
  let user = signUpInfo(payload);

  return async dispatch => {
    dispatch({ type: CRYPTO_CHECKOUT });
    try {
      let invoiceLink = await API.newInvoice(customer);
      let txData = await txInfo(payload, invoiceLink.data.result);
      let newTx = await API.newTransaction(txData);
      let saveUser = await API.register(user);
      if (invoiceLink.status && newTx.status === 200) {
        window.location.assign(invoiceLink.data.result);
        dispatch(creditCheckoutSuccess(saveUser.statusText));
      }
    } catch (error) {
      dispatch(creditCheckoutError(error));
    }
  };
};

//=================================================================
// CREDIT CHECKOUT ACTIONS
export const creditCheckoutSuccess = payload => ({
  type: CREDIT_CHECKOUT_SUCCESS,
  payload: payload
});

export const creditCheckoutError = error => ({
  type: CREDIT_CHECKOUT_SUCCESS,
  payload: error
});

export const creditCheckout = payload => {
  let user = signUpInfo(payload);
  let userData = checkoutInfo(payload);

  return async dispatch => {
    dispatch({ type: CREDIT_CHECKOUT });
    try {
      let checkout = await API.newOrder(userData);
      let register = await API.register(user);
      dispatch(creditCheckoutSuccess(payload));
      if (
        checkout.data.result.messages.resultCode === "Ok" &&
        register.status === 200
      ) {
        let ccTxData = ccTxInfo(payload, checkout);
        let saveTx = await API.newTransaction(ccTxData);
        console.log(saveTx.statusText);
      }
    } catch (error) {
      dispatch(creditCheckoutError(error));
    }
  };
};
