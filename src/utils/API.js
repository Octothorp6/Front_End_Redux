import axios from "axios";

export default {
  sendEmail: function(email) {
    return axios.post(process.env.REACT_APP_ENCOMMERCE_API+'/mailRPC/mailRPC', email)
  },
  register: function(user) {
    return axios.post(process.env.REACT_APP_ENCOMMERCE_API+'/accountRPC/accounts', user)
  },
  newOrder: function(orderData) {
    return axios.post(process.env.REACT_APP_ENCOMMERCE_API+'/authRPC/authnet', orderData)
  },
  newInvoice: function(query) {
    return axios.post(process.env.REACT_APP_ENCOMMERCE_API+'/btcpayRPC/btcpayRPC', query)
  },
  newTransaction: function(txData) {
    return axios.post(process.env.REACT_APP_ENCOMMERCE_API+'/orderRPC/orderRPC', txData)
  },
  login: function(user) {
    return axios.post(process.env.REACT_APP_ENCOMMERCE_API, user)
  }
};
