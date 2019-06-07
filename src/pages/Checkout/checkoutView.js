import React from "react";
import PropTypes from "prop-types";
import { CheckoutSchema } from "../../components/CheckoutPage/validation";
import { Form, Formik } from "formik";
import { fieldState } from "../../store/initialState";
import {
  Button,
  Paper,
  Typography,
  withStyles
} from "@material-ui/core";
import { steps } from "../../components/CheckoutPage/products";
import GridContainer from "../../components/UI/Grid/GridContainer";
import GridItem from "../../components/UI/Grid/GridItem";
import PickYourNode from "../../components/CheckoutPage/PickYourNode";
import AddressForm from "../../components/CheckoutPage/AddressForm";
import PaymentDetails from "../../components/CheckoutPage/PaymentDetails";
import Confirm from "../../components/CheckoutPage/Confirm";

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
            cart={this.props.cart}
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
            cart={this.props.cart}
            orderTotal={this.props.orderTotal}
          />
        );
      default:
        throw new Error("Invalid Step");
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Formik
        initialValues={{ ...fieldState }}
        onSubmit={this.creditCheckout}
        validationSchema={CheckoutSchema}
      >
        {({ values, errors, touched, validateForm }) => (
          <GridContainer spacing={24} justify="center">
            <main className={classes.layout}>
              <Paper className="paper">
                <div className="innerPaper">
                  <Form>
                      <br />
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <Typography variant="subheading">
                        Cart total: {this.props.orderTotal}
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
                            validateForm().then(() =>
                              this.cryptoCheckout(values)
                            )
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
                </div>
              </Paper>
            </main>
          </GridContainer>
        )}
      </Formik>
    );
  }
}

const styles = theme => ({
  layout: {
    width: "auto",
    overflowX: "hidden",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingBottom: "9.7rem",
    scrollBehavior: "smooth",
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.down("sm")]: {
        margin: "auto"
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
    overflowX: "hidden",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    display: "flex",
    margin: "auto",
    alignItems: "center",
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      padding: theme.spacing.unit * 3
    },
    [theme.breakpoints.down("sm")]: {
        margin: "auto"
    }
  }
});

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Checkout);
