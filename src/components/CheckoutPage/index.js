import React from "react";
import {
  handleCreditCheckout,
  handleCryptoCheckout,
  addItemToCart,
  removeItemFromCart,
  getTotal
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
import { Step, MobileStepper, Typography, StepLabel } from "@material-ui/core";
import { steps } from "./products";
import GridContainer from "../UI/Grid/GridContainer";
import GridItem from "../UI/Grid/GridItem";

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

  getStepContent = (step, errors, touched, values) => {
    switch (step) {
      case 0:
        return (
          <PickYourNode
            addItemToCart={this.props.addItemToCart}
            removeItemFromCart={this.props.removeItemFromCart}
            getTotal={this.props.getTotal}
          />
        );
      case 1:
        return <AddressForm errors={errors} touched={touched} />;
      case 2:
        return <PaymentDetails errors={errors} touched={touched} />;
      case 3:
        return (
          <Confirm
            values={values}
            getTotal={this.props.getTotal}
            cart={this.props.cart}
            orderTotal={this.props.orderTotal}
          />
        );
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
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <MobileStepper
                  variant="progress"
                  position="static"
                  steps={4}
                  activeStep={this.state.step}
                  style={{ display: "flex" }}
                >
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </MobileStepper>
                <Typography variant="subheading">
                  {/* Cart total: {state.orderTotal} */}
                </Typography>{" "}
              </GridItem>
              <GridItem>
                <br />
                {this.getStepContent(this.state.step, errors, touched, values)}
                <br />
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
                {this.state.step === pages[1] ? (
                  <Button
                    type="primary"
                    onClick={this.cryptoCheckout(values)}
                  />
                ) : (
                  ""
                )}
              </GridItem>
            </GridContainer>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  orderTotal: state.orderTotal
});
const mapDispatchToProps = {
  handleCreditCheckout,
  handleCryptoCheckout,
  addItemToCart,
  removeItemFromCart,
  getTotal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
