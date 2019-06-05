import React from "react";
import {
  handleCreditCheckout,
  handleCryptoCheckout,
  addItemToCart,
  removeItemFromCart
} from "../../store/actions";
import { Form, Formik } from "formik";
import { connect } from "react-redux";
import { fieldState } from "../../store/initialState";
import PickYourNode from "./PickYourNode";
import AddressForm from "./AddressForm";
import PaymentDetails from "./PaymentDetails";
import Confirm from "./Confirm";
import { Button } from "@material-ui/core";
import { CheckoutSchema } from "./validation";

const pages = [
  "Pick Your Node",
  "Address Details",
  "Payment Details",
  "Confirm"
];

class Checkout extends React.PureComponent {
  state = {
    step: 0
  };

  handleNext = () => {
    this.setState(state => ({ step: state.step + 1 }));
  };

  handleBack = () => {
    this.setState(state => ({ step: state.step - 1 }));
  };

  cryptoCheckout = values => {
    console.log("value:", values);
    this.props.handleCryptoCheckout(values);
  };

  checkout = values => {
    console.log("value:", values);
    this.props.handleCreditCheckout(values);
  };

  getStepContent = (step, ...rest) => {
    switch (step) {
      case 0:
        return (
          <PickYourNode
            addItemToCart={this.props.addItemToCart}
            removeItemFromCart={this.props.removeItemFromCart}
          />
        );
      case 1:
        return <AddressForm errors={rest.errors} touched={rest.touched} />;
      case 2:
        return <PaymentDetails errors={rest.errors} touched={rest.touched} />;
      case 3:
        return <Confirm />;
      default:
        throw new Error("Invalid Step");
    }
  };

  render() {
    return (
      <Formik
        initialValues={{ ...fieldState }}
        onSubmit={this.checkout}
        validationSchema={CheckoutSchema}
      >
        {({ values, errors, touched, validateForm }) => (
          <Form>
            {this.getStepContent(this.state.step, errors, touched)}

            {this.state.step === pages.length - 1 ? (
              <Button color="primary" type="submit">
                Checkout
              </Button>
            ) : (
              <Button
                color="primary"
                onClick={() => validateForm().then(() => this.handleNext())}
              >
                Next
              </Button>
            )}
            {this.state.pages === pages[1] ? (
              <Button type="primary" onClick={this.cryptoCheckout(values)} />
            ) : (
              ""
            )}
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  handleCreditCheckout,
  handleCryptoCheckout,
  addItemToCart,
  removeItemFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
