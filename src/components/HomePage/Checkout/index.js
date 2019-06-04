import React, { useReducer, useState, useContext } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentDetails from "./PaymentDetails";
import Confirm from "./Confirm";
import PickYourNode from "./PickYourNode";
import validate from "../../../utils/validator";
import { checkoutState } from "../../../store/initialState"
import { handleCryptoCheckout, handleCreditCheckout } from "../../../store/actions"
import ShopContext from "../../../context/shopContext"


function Checkout(props) {
  const context = useContext(ShopContext);
  
  const [state, dispatch] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { ...checkoutState }
  );

  const handleChange = event => {
    const { name, value } = event.target;
    let errors = state.errors;
    validate(errors, name, value);
    dispatch({
      errors,
      [name]: value
    });

  const [activeStep, setNext] = useState(0)

  const handleNext = () => {
    setNext(activeStep + 1); 
  }

  const handleBack = () => {
    setNext(activeStep - 1)
  }
  //get current step for checkout form to render content accordingly
  const getStepContent = step => {
    switch (step) {
      case 0:
        return <PickYourNode state={state} handleChange={handleChange} />;
      case 1:
        return <AddressForm state={state} handleChange={handleChange} dispatch={dispatch} />;
      case 2:
        return <PaymentDetails state={state} handleChange={handleChange} />;
      case 3:
        return <Confirm state={state}/>;
      default:
        throw new Error("Unknown step");
    }
  };
  
  const { classes, handleClose } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <span>
            <Typography component="h1" variant="h4" align="center">
              Checkout &nbsp;{" "}
              <Button
                color="secondary"
                className={classes.close}
                onClick={handleClose}
              >
                x
              </Button>
            </Typography>
          </span>
          {/* Map through the steps of the step array to display them as labels */}
          <Stepper
            steps={4}
            activeStep={activeStep}
            className={classes.stepper}
          >
            {context.steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Typography variant="subheading">
            Cart total: {state.orderTotal}
          </Typography>{" "}
          <br />
          {/* Ternary Operator to render confirmation text, or allow user to progress through checkout */}
          <React.Fragment>
            {activeStep === context.steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for shopping with Ethernode.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is {state.orderId}. We will email your order
                  confirmation shortly, and will send you an update once your
                  order has shipped.
                </Typography>
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {/* Pay with BTC */}
                  {activeStep === 2 && (
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={handleCryptoCheckout}
                    >
                      Pay with BTC
                    </Button>
                  )}
                  {/* Display back Button if the user is anywhere except 1st page */}
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
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
                      activeStep === context.steps.length - 1
                        ? handleCreditCheckout
                        : handleNext
                    }
                    className={classes.button}
                  >
                    {activeStep === context.steps.length - 1
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

export default withStyles(styles)(Checkout);
