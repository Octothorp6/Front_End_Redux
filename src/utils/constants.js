let today = Date.now();

//INITIALIZE STATE
export const initialState = {
  activeStep: 0,
  userEmail: "",
  userRole: "customer",
  userFirst: "",
  userLast: "",
  userPassword: "",
  cardHolder: "",
  cardNumber: "",
  cvv: "",
  expiration: "",
  orderTotal: "0",
  orderId: today,
  orderStatus: "",
  cart: [],
  salesTax: "0",
  payType: "Credit Card",
  billingAddress1: "",
  billingAddress2: "",
  billingCity: "",
  billingState: "",
  billingZip: "",
  billingCountry: "",
  shippingAddress1: "",
  shippingAddress2: "",
  shippingCity: "",
  shippingState: "",
  shippingZip: "",
  shippingCountry: "",
  shippingCost: 10,
  difShipping: false,
  madeOrder: false,
  errors: {
    userFirst: "",
    userLast: "",
    userEmail: "",
    shippingAddress1: "",
    shippingCity: "",
    shippingState: "",
    shippingZip: "",
    shippingCountry: "",
    cardNumber: "",
    cvv: "",
    expiration: ""
  }
};

//===========================================================================
//SANITIZE USER INFORMATION FOR REGISTRATION
export const signUpInfo = user => {
  let userInfo = {
    jsonrpc: "2.0",
    method: "createUser",
    params: [
      user.userEmail,
      user.userFirst,
      user.userLast,
      user.userPassword,
      user.userRole
    ],
    id: 4
  };
  return userInfo;
};

//===========================================================================
//Clean up contact email Data
export const emailContact = (info, template) => {
  let userObj = {
    email: info.userEmail,
    name: `${info.userFirst} ${info.userLast}`
  };

  let contact = {
    jsonrpc: "2.0",
    method: "sendEmail",
    params: [[userObj], process.env.REACT_APP_SALES_EMAIL, "Thank You for Your Recent Purchase.", template],
    id: 500
  };
  return contact;
};


//===========================================================================
//Clean up contact email Data
export const contactUs = (info, template) => {
  let userObj = {
    email: process.env.REACT_APP_SUPPORT_EMAIL,
    name:  `EtherNode Support`
  };

  let contact = {
    jsonrpc: "2.0",
    method: "sendEmail",
    params: [[userObj], info.userEmail,`Website Contact from User: ${info.userName}`, template(info.message)],
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
      "https://dev.ethernode.io",
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
