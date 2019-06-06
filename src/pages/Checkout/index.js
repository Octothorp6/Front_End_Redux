import React from "react";
import {
  creditCheckout,
  cryptoCheckout,
  addItemToCart,
  removeItemFromCart,
  getTotal
} from "../../store/actions";
import { Button } from "@material-ui/core";
import { CheckoutSchema } from "../../components/CheckoutPage/validation";
import { connect } from "react-redux";
import { Form, Formik } from "formik";
import { fieldState } from "../../store/initialState";
import {
  Card,
  Step,
  MobileStepper,
  Typography,
  StepLabel
} from "@material-ui/core";
import { steps } from "../../components/CheckoutPage/products";
import GridContainer from "../../components/UI/Grid/GridContainer";
import GridItem from "../../components/UI/Grid/GridItem";
import PickYourNode from "../../components/CheckoutPage/PickYourNode";
import AddressForm from "../../components/CheckoutPage/AddressForm";
import PaymentDetails from "../../components/CheckoutPage/PaymentDetails";
import Confirm from "../../components/CheckoutPage/Confirm";
import "./Checkout.css"

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
    this.props.cryptoCheckout(values);
  };

  creditCheckout = values => {
    this.props.creditCheckout(values);
  };

  getStepContent = (step, errors, touched, values) => {
    switch (step) {
      case 0:
        return (
          <PickYourNode
            addItemToCart={this.props.addItemToCart}
            removeItemFromCart={this.props.removeItemFromCart}
          />
        );
      case 1:
        return (
          <AddressForm
            errors={errors}
            touched={touched}
            cryptoCheckout={cryptoCheckout}
          />
        );
      case 2:
        return <PaymentDetails errors={errors} touched={touched} />;
      case 3:
        return (
          <Confirm
            values={values}
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
        onSubmit={this.creditCheckout}
        validationSchema={CheckoutSchema}
      >
        {({ values, errors, touched, validateForm }) => (
          <div className="container">
            <Card className="Card">
              <GridContainer spacing={24}>
                <Form>
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
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <br />
                    {this.getStepContent(
                      this.state.step,
                      errors,
                      touched,
                      values
                    )}
                    <br />
                    {this.state.step !== 0 ? (
                      <Button color="primary" onClick={this.handleBack}>
                        Back
                      </Button>
                    ) : (
                      ""
                    )}
                    {this.state.step === steps.length - 1 ? (
                      <Button color="primary" type="submit">
                        Checkout
                      </Button>
                    ) : (
                      <Button
                        color="primary"
                        onClick={() =>
                          validateForm().then(() => this.handleNext())
                        }
                      >
                        Next
                      </Button>
                    )}

                    {this.state.step === 1 ? (
                      <Button
                        color="primary"
                        onClick={() =>
                          validateForm().then(() => this.cryptoCheckout(values))
                        }
                      >
                        Pay with BTC
                      </Button>
                    ) : (
                      ""
                    )}
                    <br />
                    <br />
                  </GridItem>
                </Form>
              </GridContainer>
            </Card>
          </div>
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
