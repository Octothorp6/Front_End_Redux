import Checkout from "./checkoutView"
import { connect } from "react-redux";
import {
  creditCheckout,
  cryptoCheckout,
  addItemToCart,
  removeItemFromCart,
} from "../../store/actions";

const mapStateToProps = state => {
  return {
    cart: state.checkout.cart,
    orderTotal: state.checkout.orderTotal
  };
};

const mapDispatchToProps = {
  creditCheckout,
  cryptoCheckout,
  addItemToCart,
  removeItemFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
