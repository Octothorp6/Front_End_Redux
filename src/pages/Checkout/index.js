import Checkout from "./checkoutView"
import { connect } from "react-redux";
import {
  creditCheckout,
  cryptoCheckout,
  addItemToCart,
  removeItemFromCart,
  getTotal
} from "../../store/actions";

const mapStateToProps = state => ({
  cart: state.cart,
  orderTotal: state.orderTotal
});

const mapDispatchToProps = {
  creditCheckout,
  cryptoCheckout,
  addItemToCart,
  removeItemFromCart,
  getTotal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
