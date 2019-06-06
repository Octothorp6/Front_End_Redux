import {
  CREDIT_CHECKOUT,
  CRYPTO_CHECKOUT,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  GET_TOTAL,
  CREDIT_CHECKOUT_SUCCESS,
  CREDIT_CHECKOUT_ERROR
} from "./types";
import API from "../../utils/API";
import {
  signUpInfo,
  checkoutInfo,
  ccTxInfo,
  txInfo,
  invoiceInfo
} from "../../utils/sanitizer";

//=================================================================
// USER CART ACTIONS
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

//===================================================================
// CRYPTO CHECKOUT ACTIONS
export const cryptoCheckoutRequest = () => ({
  type: CRYPTO_CHECKOUT
});

export const cryptoCheckoutSuccess = payload => ({
  type: CREDIT_CHECKOUT_SUCCESS,
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
    dispatch(cryptoCheckoutRequest());
    try {
      let invoiceLink = await API.newInvoice(customer);
      let txData = await txInfo(payload, invoiceLink.data.result);
      let newTx = await API.newTransaction(txData);
      let saveUser = await API.register(user)
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
export const creditCheckoutRequest = () => ({
  type: CREDIT_CHECKOUT
});

export const creditCheckoutSuccess = payload => ({
  type: CREDIT_CHECKOUT_SUCCESS,
  payload: payload
});

export const creditCheckoutError = error => ({
  type: CREDIT_CHECKOUT_SUCCESS,
  payload: error
});

export const makePayment = payload => {
  let user = signUpInfo(payload);
  let userData = checkoutInfo(payload);

  return async dispatch => {
    dispatch(creditCheckoutRequest());

    try {
      let checkout = await API.newOrder(userData);
      let register = await API.register(user);
      if (
        checkout.data.result.messages.resultCode === "Ok" &&
        register.status === 200
      ) {
        let ccTxData = ccTxInfo(state, checkout);
        let saveTx = await API.newTransaction(ccTxData);
        dispatch(creditCheckoutSuccess(saveTx.status));
      }
    } catch (error) {
      dispatch(creditCheckoutError(error));
    }
  };
};
