//INTIIAL CHECKOUTSTATE
export const checkoutState = {
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
  orderId: Date.now(),
  orderStatus: "pending",
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
  madeOrder: false
};

//INITIAL STATE FOR THE LOGIN REDUCER
//MUST CHECK FOR AUTH, TOKEN, PERMISSIONS
export const authState = {
  isLoading: false,
  isAuthenticated: !!localStorage.getItem("token"),
  error: null
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