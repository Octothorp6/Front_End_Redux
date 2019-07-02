import React from "react";
import PropTypes from "prop-types";
import { Button, Paper, Typography, withStyles } from "@material-ui/core";
import { Form, Formik } from "formik";
import { GridContainer, GridItem } from "../../components/UI/Grid";
import {
  AddressForm,
  Confirm,
  PickYourNode
  //PaymentDetails
  // DifBilling,
  // Presale
} from "../../components/CheckoutPage";
import { CheckoutSchema } from "../../components/CheckoutPage";
import { fieldState } from "../../store/initialState";

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

  handlePreorder = values => {
    Promise.resolve(this.props.preOrder(values)).then(() => this.handleNext());
  };

  creditCheckout = values => {
    this.props.creditCheckout(values);
  };

  //======================================================================
  // ACTUAL CHECKOUT CODE
  // getStepContent = (step, errors, touched, values) => {
  //   switch (step) {
  //     case 0:
  //       return (
  //         <PickYourNode
  //           addItemToCart={this.props.addItemToCart}
  //           removeItemFromCart={this.props.removeItemFromCart}
  //         />
  //       );
  //     case 1:
  //       return <AddressForm errors={errors} touched={touched} />;
  //     case 2:
  //       return <PaymentDetails errors={errors} touched={touched} />;
  //     case 3:
  //       return (
  //         <Confirm
  //           values={values}
  //           cart={this.props.cart}
  //           orderTotal={this.props.orderTotal}
  //         />
  //       );
  //     default:
  //       throw new Error("Invalid Step");
  //   }
  // };
  //=======================================================================
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
        return <AddressForm errors={errors} touched={touched} />;
      case 2:
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
    const { classes, orderTotal, cart, orderId } = this.props;

    return (
      <React.Fragment>
        <GridContainer spacing={24} justify="center">
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Formik
                initialValues={{ ...fieldState }}
                validationSchema={CheckoutSchema}
                validateOnChange={true}
              >
                {({ values, errors, touched, validateForm }) => (
                  <Form>
                    <br />
                    <span>
                      <Typography
                        variant="subheading"
                        color="textPrimary"
                        align="center"
                      >
                        Cart total: {orderTotal ? "$" + orderTotal : 0} &nbsp;
                        Items: {cart.length}
                      </Typography>{" "}
                    </span>
                    <br />
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      {this.state.step === 3 ? (
                        <React.Fragment>
                          <Typography variant="h5" gutterBottom>
                            Thank you for joining our presale.
                          </Typography>
                          <Typography variant="subtitle1">
                            Your order number is {orderId}. Once we have
                            sufficient preorders to kick off production, we will
                            contact you with details and will send you an update
                            once your order has shipped.
                          </Typography>
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={this.handleBack}
                            className={classes.button}
                          >
                            Back
                          </Button>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <GridItem xs={12} sm={12} md={12} lg={12}>
                            {this.getStepContent(
                              this.state.step,
                              errors,
                              touched,
                              values
                            )}
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12} lg={12}>
                            <div className="buttons">
                              {this.state.step !== 0 ? (
                                <Button
                                  color="primary"
                                  className={classes.button}
                                  onClick={this.handleBack}
                                >
                                  Back
                                </Button>
                              ) : (
                                ""
                              )}
                              {this.state.step === 2 ? (
                                <Button
                                  color="primary"
                                  className={classes.button}
                                  onClick={() =>
                                    validateForm().then(() =>
                                      this.handlePreorder(values)
                                    )
                                  }
                                >
                                  Pre Order
                                </Button>
                              ) : (
                                <Button
                                  color="primary"
                                  className={classes.button}
                                  onClick={() => this.handleNext()}
                                  disabled={
                                    this.state.step !== 0 || cart.length === 0
                                      ? values.userFirst === "" ||
                                        values.userLast === "" ||
                                        values.userEmail === "" ||
                                        values.shippingAddress1 === "" ||
                                        values.shippingState === "" ||
                                        values.shippingCity === "" ||
                                        values.shippingCountry === ""
                                      : false
                                  }
                                >
                                  Next
                                </Button>
                              )}
                            </div>
                            <br />
                          </GridItem>
                        </React.Fragment>
                      )}

                      {/* {this.state.step === 1 ? (
                        <Button
                          color="primary"
                          className={classes.button}
                          onClick={() =>
                            validateForm().then(() =>
                              this.cryptoCheckout(values)
                            )
                          }
                        >
                          Pay with BTC
                        </Button>
                      ) : (
                        ""
                      )} */}
                    </GridItem>
                  </Form>
                )}
              </Formik>
            </Paper>
            {this.state.step === 3 && <div><br /> <br /></div>}
          </main>
        </GridContainer>
      </React.Fragment>
    );
  }
}

const styles = theme => ({
  layout: {
    display: "flex",
    width: "auto",
    overflowX: "hidden",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingBottom: "6.6rem",
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      maxWidth: "100%",
      paddingBottom: "6.7rem"
    }
  },
  paper: {
    margin: "auto",
    maxHeight: "auto",
    padding: theme.spacing.unit * 2,
    alignItems: "center",
    textAlign: "center",
    width: 600,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      padding: theme.spacing.unit * 3
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto"
    }
  },
  buttons: {
    display: "flex"
  },
  button: {
    marginTop: theme.spacing.unit * 2
  }
});

//validate props format
Checkout.propTypes = {
  cart: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  creditCheckout: PropTypes.func.isRequired,
  cryptoCheckout: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
};

export default withStyles(styles)(Checkout);
