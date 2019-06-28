import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  GET_TOTAL,
  CREDIT_CHECKOUT,
  CREDIT_CHECKOUT_SUCCESS,
  CREDIT_CHECKOUT_ERROR,
  CRYPTO_CHECKOUT,
  CRYPTO_CHECKOUT_SUCCESS,
  CRYPTO_CHECKOUT_ERROR,
  PRE_ORDER,
  PRE_ORDER_ERROR,
  PRE_ORDER_SUCCESS
} from "./types";
import {
  signUpInfo,
  checkoutInfo,
  ccTxInfo,
  txInfo,
  invoiceInfo,
  confirmOrder,
  preOrderInfo
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

const getTotal = cart => {
  return {
    type: GET_TOTAL,
    payload: cart
  };
};

//===================================================================
// CRYPTO CHECKOUT ACTIONS

export const cryptoCheckout = payload => {
  let customer = invoiceInfo(payload);
  let user = signUpInfo(payload);

  return async dispatch => {
    dispatch({ type: CRYPTO_CHECKOUT });
    try {
      let invoiceLink = await API.newInvoice(customer);
      let txData = txInfo(payload, invoiceLink.data.result);
      let newTx = await API.newTransaction(txData);
      let saveUser = await API.register(user);
      if (invoiceLink.status && newTx.status && saveUser.status === 200) {
        dispatch(cryptoCheckoutSuccess(payload));
        window.location.assign(invoiceLink.data.result);
      }
    } catch (error) {
      dispatch(cryptoCheckoutError(error));
    }
  };
};

const cryptoCheckoutSuccess = payload => ({
  type: CRYPTO_CHECKOUT_SUCCESS,
  payload: payload
});

const cryptoCheckoutError = error => ({
  type: CRYPTO_CHECKOUT_ERROR,
  payload: error
});

//=================================================================
// CREDIT CHECKOUT ACTIONS

export const creditCheckout = payload => {
  let user = signUpInfo(payload);
  let userData = checkoutInfo(payload);

  return async dispatch => {
    dispatch({ type: CREDIT_CHECKOUT });
    try {
      let checkout = await API.newOrder(userData);
      let register = await API.register(user);
      if (
        checkout.data.result.messages.resultCode === "Ok" &&
        register.status === 200
      ) {
        let ccTxData = ccTxInfo(payload, checkout);
        let saveTx = await API.newTransaction(ccTxData);
        dispatch(creditCheckoutSuccess(payload));
        console.log(saveTx.statusText);
      }
    } catch (error) {
      dispatch(creditCheckoutError(error));
    }
  };
};

const creditCheckoutSuccess = payload => ({
  type: CREDIT_CHECKOUT_SUCCESS,
  payload: payload
});

const creditCheckoutError = error => ({
  type: CREDIT_CHECKOUT_ERROR,
  payload: error
});

// PREORDER FUNCTIONS

export const preOrder = payload => {
  let user = preOrderInfo(payload);
  return async dispatch => {
    dispatch({ type: PRE_ORDER });
  };
};
