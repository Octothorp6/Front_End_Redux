import React from "react";
import PropTypes from "prop-types";
import GridContainer from "../../components/UI/Grid/GridContainer";
import GridItem from "../../components/UI/Grid/GridItem";
import {
  Confirm,
  PickYourNode,
  AddressForm,
  PaymentDetails,
  // DifBilling,
  // Presale
} from "../../components/CheckoutPage";
import { CheckoutSchema } from "../../components/CheckoutPage/validation";
import { Form, Formik } from "formik";
import { fieldState } from "../../store/initialState";
import { Button, Paper, Typography, withStyles } from "@material-ui/core";
import { steps } from "../../components/CheckoutPage/products";

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
  
  // handlePreorder = values => {
  //   this.props.
  // }
  

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
        return <AddressForm errors={errors} touched={touched} />;
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
    const { classes, orderTotal, cart } = this.props;

    return (
      <>
        <Formik
          initialValues={{ ...fieldState }}
          onSubmit={this.creditCheckout}
          validationSchema={CheckoutSchema}
          validateOnChange={true}
        >
          {({ values, errors, touched, validateForm }) => (
            <GridContainer spacing={24} justify="center">
              <main className={classes.layout}>
                <Paper className={classes.paper}>
                  <Form>
                    <br />
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <Typography variant="subheading">
                        Cart total: {orderTotal} &nbsp; Items: {cart.length}
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
                      {/* {this.state.step === 1 ? (
                        <Button
                          color="primary"
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
                      <br />
                      <br />
                    </GridItem>
                  </Form>
                </Paper>
              </main>
            </GridContainer>
          )}
        </Formik>
      </>
    );
  }
}

const styles = theme => ({
  layout: {
    display: "flex",
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingBottom: "6.6rem",
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto"
    }
  },
  paper: {
    margin: "auto",
    padding: theme.spacing.unit * 2,
    overflowX: "hidden",
    alignItems: "center",
    textAlign: "center",
    width: 600,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      padding: theme.spacing.unit * 3
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto"
    }
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
