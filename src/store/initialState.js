let unixDate = Math.round(+new Date()/1000);
//INTIIAL CHECKOUTSTATE
export const checkoutState = {
  orderTotal: null,
  orderId: unixDate,
  orderStatus: "",
  cart: [],
  salesTax: 0,
  payType: "",
  shippingCost: 0,
  difShipping: false,
  madeOrder: false
};

//INITIAL STATE FOR THE LOGIN REDUCER
//MUST CHECK FOR AUTH, TOKEN, PERMISSIONS
export const authState = {
  user: "",
  isLoading: false,
  isAuthenticated: !!sessionStorage.getItem("token"),
  error: null,
  errorMsg: null
};

//======================================================
//SIDEBAR STATE
export const sideBarState = {
  isSidebarOpened: false
};

//======================================================
// ERROR INITIAL STATE
export const errorState = {
  msg: {},
  status: null
};

//======================================================
//CONTACT FORM INITIAL STATE
export const contactState = {
  name: "",
  email: "",
  message: ""
}

//====================================================================
//FIELD STATE
export const fieldState = {
  userEmail: "",
  userRole: "customer",
  password: "arbitraryValue",
  userFirst: "",
  userLast: "",
  cardHolder: "",
  cardNumber: "",
  cvv: "",
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
}
