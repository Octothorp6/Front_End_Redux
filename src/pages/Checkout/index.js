import Checkout from "./checkoutView"
import { connect } from "react-redux";
import {
  preOrder,
  creditCheckout,
  cryptoCheckout,
  addItemToCart,
  removeItemFromCart,
} from "../../store/actions";

const mapStateToProps = state => {
  return {
    cart: state.checkout.cart,
    orderTotal: state.checkout.orderTotal,
    orderId: state.checkout.orderId
  };
};

const mapDispatchToProps = {
  creditCheckout,
  cryptoCheckout,
  addItemToCart,
  removeItemFromCart,
  preOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
