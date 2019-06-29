import axios from "axios";

const baseUrl = process.env.REACT_APP_ENCOMMERCE_API;

//POST REQUEST HELPERS
function postWithToken(suffix, data, token) {
  return axios.post(baseUrl + suffix, data, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

function postWithoutToken(suffix, data) {
  return axios.post(baseUrl + suffix, data);
}

// GET REQUEST HELPERS
function getWithToken(suffix, token) {
  return axios.get(baseUrl + suffix, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

function getWithoutToken(suffix, data) {
  return axios.get(baseUrl + suffix, data);
}

export default {
  // POST REQUESTS WITHOUT TOKEN
  sendEmail: function(email) {
    return postWithoutToken("/mailRPC/mailRPC", email);
  },
  register: function(user) {
    return postWithoutToken("/accountRPC/acc", user);
  },
  login: function(user) {
    return postWithoutToken("/accountRPC/acc", user);
  },
  // POST REQUESTS WITH TOKEN
  sendPreorderEmail: function(data, token) {
    return postWithToken("/mailRPC/mailRPC", data, token);
  },
  newOrder: function(orderData, token) {
    return postWithToken("/authRPC/authnet", orderData, token);
  },
  newInvoice: function(query, token) {
    return postWithToken("/btcpayRPC/btcpayRPC", query, token);
  },
  newTransaction: function(txData, token) {
    return postWithToken("/orderRPC/orderRPC", txData, token);
  },
  // GET REQUESTS WITH TOKEN
  getUsers: function(token) {
    return getWithToken("/accountRPC/admin", token);
  }
};
