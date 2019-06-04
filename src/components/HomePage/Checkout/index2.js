import React, { Component } from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";
import AddressForm from "./AddressForm";
import PaymentDetails from "./PaymentDetails";
import Confirm from "./Confirm";
import PickYourNode from "./PickYourNode";
import validate from "../../../utils/validator";
import PropTypes from "prop-types";

import {
  handleCryptoCheckout,
  handleCreditCheckout
} from "../../../store/actions";
import { steps } from "./products";
import { connect } from "react-redux";

class Checkout extends Component {
  handleChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    validate(errors, name, value);
    this.setState({
      errors,
      [name]: value
    });
  };

  handleCreditCheckout = () => {
    this.props.handleCreditCheckout(this.state);
  };

  handleCryptoCheckout = () => {
    this.props.handleCryptoCheckout(this.state);
  };
  handleNext = () => {
    this.setState(this.state.activeStep + 1);
  };

  handleBack = () => {
    this.setState(this.state.activeStep - 1);
  };

  getStepContent = step => {
    switch (step) {
      case 0:
        return <PickYourNode state={this.state} handleChange={this.handleChange} />
      case 1:
        return <AddressForm state={this.state} handleChange={this.handleChange} />
      case 2:
        return <PaymentDetails state={this.state} handleChange={this.handleChange} />
      case 3:
        return <Confirm state={this.state} />;
      default:
        throw new Error("Unknown step");
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <span>
              <Typography component="h1" variant="h4" align="center">
                Checkout &nbsp;{" "}
              </Typography>
              <Button
                color="secondary"
                className={styles.close}
                onClick={this.props.handleClose}
              >
                x
              </Button>
            </span>
            {/* Map through the steps of the step array to display them as labels */}
            <Stepper
              steps={4}
              activeStep={this.props.activeStep}
              className={classes.stepper}
            >
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Typography variant="subheading">
              Cart total: {this.props.orderTotal}
            </Typography>{" "}
            <br />
            {/* Ternary Operator to render confirmation text, or allow user to progress through checkout */}
            <React.Fragment>
              {this.props.activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for shopping with Ethernode.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is {this.props.orderId}. We will email
                    your order confirmation shortly, and will send you an update
                    once your order has shipped.
                  </Typography>
                  <Button onClick={this.handleBack} className={classes.button}>
                    Back
                  </Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(this.props.activeStep)}
                  <div className={classes.buttons}>
                    {/* Pay with BTC */}
                    {this.props.activeStep === 2 && (
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleCryptoCheckout}
                      >
                        Pay with BTC
                      </Button>
                    )}
                    {/* Display back Button if the user is anywhere except 1st page */}
                    {this.props.activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                        color="primary"
                        variant="contained"
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={
                        this.props.activeStep === steps.length - 1
                          ? this.handleCreditCheckout
                          : this.handleNext
                      }
                      className={classes.button}
                    >
                      {this.props.activeStep === steps.length - 1
                        ? "Place order"
                        : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

const styles = theme => ({
  layout: {
    width: "auto",
    overflowX: "hidden",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "red",
    [theme.breakpoints.down("sm")]: {
      top: 10,
      right: 20
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden"
    }
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    activeStep: state.activeStep,
    orderTotal: state.orderTotal,
    orderId: state.orderId
  };
};

const mapDispatchToProps = {
  handleCreditCheckout,
  handleCryptoCheckout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Checkout));
