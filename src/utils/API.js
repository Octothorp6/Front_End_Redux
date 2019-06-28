import axios from "axios";

export default {
  // ROUTES WITHOUT TOKEN
  sendEmail: function(email) {
    return axios.post(
      process.env.REACT_APP_ENCOMMERCE_API + "/mailRPC/mailRPC",
      email
    );
  },
  register: function(user) {
    return axios.post(
      process.env.REACT_APP_ENCOMMERCE_API + "/accountRPC/acc",
      user
    );
  },
  login: function(user) {
    return axios.post(
      process.env.REACT_APP_ENCOMMERCE_API + "/accountRPC/acc",
      user
    );
  },
  // ROUTES WITH TOKEN
  sendPreorderEmail: function(data, token) {
    return axios.post(
      process.env.REACT_APP_ENCOMMERCE_API + "/mailRPC/mailRPC",
      data,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  },
  newOrder: function(orderData, token) {
    return axios.post(
      process.env.REACT_APP_ENCOMMERCE_API + "/authRPC/authnet",
      orderData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  },
  newInvoice: function(query, token) {
    return axios.post(
      process.env.REACT_APP_ENCOMMERCE_API + "/btcpayRPC/btcpayRPC",
      query,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  },
  newTransaction: function(txData, token) {
    return axios.post(
      process.env.REACT_APP_ENCOMMERCE_API + "/orderRPC/orderRPC",
      txData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  },
  getUsers: function(token) {
    return axios.get(
      process.env.REACT_APP_ENCOMMERCE_API +
        "/accountRPC/admin" +
        { headers: { Authorization: `Bearer ${token}` } }
    );
  }
};
