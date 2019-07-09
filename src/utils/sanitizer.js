import { ContactTemp, PurchaseTemp, NewSalesTemp } from "./EmailTemplates";

//==========================================================================
//SANITIZE USER INFORMATION FOR REGISTRATION
export const signUpInfo = user => {
  let userInfo = {
    jsonrpc: "2.0",
    method: "createUser",
    params: [
      user.userEmail,
      user.userFirst,
      user.userLast,
      user.password,
      "customer"
    ],
    id: 4
  };
  return userInfo;
};

//===========================================================================
//CLEAN UP USER EMAIL BEFORE CONTACTING THEM AFTER A PURCHASE
export const emailContact = info => {
  let userObj = {
    email: info.userEmail,
    name: `${info.userFirst} ${info.userLast}`
  };

  let contact = {
    jsonrpc: "2.0",
    method: "sendEmail",
    params: [
      [userObj],
      process.env.REACT_APP_SALES_EMAIL,
      "Thank You for Your Recent Preorder.",
      PurchaseTemp
    ],
    id: 500
  };
  return contact;
};

//===========================================================================
//CLEAN UP USER EMAIL INFORMATION BEFORE SENDING TO SENDGRID
export const contactUs = info => {
  let userObj = {
    email: process.env.REACT_APP_SUPPORT_EMAIL,
    name: `EtherNode Support`
  };

  let contact = {
    jsonrpc: "2.0",
    method: "sendEmail",
    params: [
      [userObj],
      info.email,
      `Website Contact from User: ${info.name}`,
      ContactTemp(info.message)
    ],
    id: 500
  };
  return contact;
};

//===========================================================================
//CLEAN USER BEFORE SENDING TO PAYMENT API
export const checkoutInfo = user => {
  let userData = {
    jsonrpc: "2.0",
    method: "processcc",
    params: [
      user.difShipping,
      user.cardNumber,
      user.expiration,
      user.cvv,
      "none",
      user.userFirst,
      user.userLast,
      "none",
      user.shippingAddress1,
      user.shippingCity,
      user.shippingState,
      user.shippingZip,
      user.shippingCountry,
      user.cart,
      user.salesTax,
      user.userFirst,
      user.userLast,
      "none",
      user.billingAddress1,
      user.billingCity,
      user.BillingState,
      user.billingZip,
      user.billingCountry,
      user.shippingCost,
      "USPS Ground",
      "USPS Priority Ground",
      "AUTHCAPTURETRANSACTION",
      user.orderTotal
    ],
    id: 200
  };
  return userData;
};

//=========================================================================
//SANITIZE USER BEFORE SENDING TO DB AFTER ORDER
export const ccTxInfo = (user, response) => {
  let txText = response.data.result.messages.resultCode;
  let transID = response.data.result.transactionResponse.transId;
  let [{ text }] = response.data.result.messages.message;

  let ccTx = {
    orderId: `${user.orderId}`,
    paymentType: "Credit card",
    txResult: `${text}`,
    txCode: `${transID}`,
    txText: `${txText}`,
    items: [user.cart],
    billing: {
      billFirst: user.userFirst,
      billLast: user.userLast,
      company: "null",
      address1: user.billingAddress1,
      address2: user.billingAddress2,
      city: user.billingCity,
      state: user.billingState,
      country: user.billingCountry,
      phone: "212-222-2222"
    },
    shipping: {
      shipFirst: user.userFirst,
      shipLast: user.userLast,
      company: "null",
      address1: user.shippingAddress1,
      address2: user.shippingAddress2,
      city: user.shippingCity,
      state: user.shippingState,
      country: user.shippingCountry,
      phone: "212-222-2222"
    },
    orderTotal: user.orderTotal,
    orderStatus: user.orderStatus
  };

  let ccTxData = {
    jsonrpc: "2.0",
    method: "newOrder",
    params: [user.userEmail, ccTx],
    id: 3
  };
  return ccTxData;
};

//===========================================================================
//SANITIZE USER INFORMATION BEFORE REQUESTING A NEW INVOICE
export const invoiceInfo = user => {
  let invoiceData = {
    jsonrpc: "2.0",
    method: "create_invoice",
    params: [
      user.orderTotal,
      "USD",
      `${user.orderId}`,
      "Enkeep",
      process.env.REACT_APP_BTCPAY_REDIRECT_LINK,
      true,
      user.userFirst,
      user.shippingAddress1,
      user.shippingAddress2,
      user.shippingCity,
      user.shippingState,
      user.shippingZip,
      user.shippingCountry,
      user.userEmail,
      "212233233"
    ],
    id: 600
  };
  return invoiceData;
};

//===========================================================================
//SANITIZE BTC TRANSACTION DATA BEFORE SENDING TO DB
export const txInfo = (user, url) => {
  let initial = url.split("=");
  let invoiceId = initial[1];

  let tx = {
    orderId: `${user.orderId}`,
    paymentType: "BTC",
    txResult: `${user.orderStatus}`,
    txCode: `${invoiceId}`,
    txText: "BTC Payment",
    items: [user.cart],
    billing: {
      billFirst: user.userFirst,
      billLast: user.userLast,
      company: "null",
      address1: user.billingAddress1,
      address2: user.billingAddress2,
      city: user.billingCity,
      state: user.billingState,
      country: user.billingCountry,
      phone: "212-222-2222"
    },
    shipping: {
      shipFirst: user.userFirst,
      shipLast: user.userLast,
      company: "null",
      address1: user.shippingAddress1,
      address2: user.shippingAddress2,
      city: user.shippingCity,
      state: user.shippingState,
      country: user.shippingCountry,
      phone: "212-222-2222"
    },
    orderTotal: user.orderTotal,
    orderStatus: user.orderStatus
  };

  let txData = {
    jsonrpc: "2.0",
    method: "newOrder",
    params: [user.userEmail, tx],
    id: 3
  };
  return txData;
};

//==========================================================================
// SANITIZE LOGIN && REGISTER DATA
export const authData = user => {
  let admin = {
    jsonrpc: "2.0",
    method: "login",
    params: [
      user.username, 
      user.password
    ],
    id: 2
  };
  return admin;
};
//===========================================================================
// PREORDER ONLY BELOW
//===========================================================================
//SANITIZE USER BEFORE SENDING TO DB AFTER ORDER
export const preOrderInfo = user => {
  let txText = "PRESALE";
  let transID = "PRESALE";
  let text = "PRESALE REGISTRATION";

  let presaleTx = {
    orderId: `${user.orderId}`,
    paymentType: "PRESALE",
    txResult: `${text}`,
    txCode: `${transID}`,
    txText: `${txText}`,
    items: user.cart,
    billing: {
      billFirst: user.userFirst,
      billLast: user.userLast,
      company: "null",
      address1: user.billingAddress1,
      address2: user.billingAddress2,
      city: user.billingCity,
      state: user.billingState,
      country: user.billingCountry,
      phone: "212-222-2222"
    },
    shipping: {
      shipFirst: user.userFirst,
      shipLast: user.userLast,
      company: "null",
      address1: user.shippingAddress1,
      address2: user.shippingAddress2,
      city: user.shippingCity,
      state: user.shippingState,
      country: user.shippingCountry,
      phone: "212-222-2222"
    },
    orderTotal: user.orderTotal,
    orderStatus: user.orderStatus
  };

  let ccTxData = {
    jsonrpc: "2.0",
    method: "newOrder",
    params: [user.userEmail, presaleTx],
    id: 3
  };
  return ccTxData;
};

//===========================================================================
// CLEAN UP ORDER && PREORDER CONFIRMATION EMAIL DATA
export const confirmOrder = user => {
  let userObj = {
    email: process.env.REACT_APP_SALES_EMAIL,
    name: `New Preorder`
  };

  let contact = {
    jsonrpc: "2.0",
    method: "sendEmail",
    params: [
      [userObj],
      user.userEmail,
      `New Preorder from User: ${user.userFirst}, orderId: ${user.orderId}`,
      NewSalesTemp(user.userFirst, user.userLast, user.userEmail, user.orderTotal)
    ],
    id: 500
  };
  return contact;
};
