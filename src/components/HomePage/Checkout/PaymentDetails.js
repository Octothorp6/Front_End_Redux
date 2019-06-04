import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core"
import { connect } from "react-redux";

const PaymentDetails = ({ state, handleChange }) => {
  const { errors } = state;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            type="text"
            id="cardName"
            label="Name on card"
            name="cardHolder"
            value={state.cardHolder}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            type="number"
            id="cardNumber"
            label="Card number"
            name="cardNumber"
            maxLength="16"
            value={state.cardNumber}
            onChange={handleChange}
            helperText={
              errors.cardNumber.length > 0 ? `${errors.cardNumber}` : ""
            }
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="expiration">
            <TextField
              type="text"
              id="expDate"
              label="Expiration Date"
              helperText="YYYY-MM"
              name="expiration"
              value={state.expiration}
              onChange={handleChange}
              fullWidth
              required
            />
            {errors.expiration.length > 0 && (
              <span className="errorMessage">{errors.expiration}</span>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="cvv">
            <TextField
              id="cvv"
              label="CVV"
              name="cvv"
              type="number"
              value={state.cvv}
              helperText="Last three digits on the back of card"
              onChange={handleChange}
              fullWidth
              required
            />
            {errors.cvv.length > 0 && (
              <span className="errorMessage">{errors.cvv}</span>
            )}
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    cardHolder: state.cardHolder,
    cardNumber: state.cardNumber,
    expiration: state.expiration,
    cvv: state.cvv,
    errors: state.errors
  };
};

export default connect(mapStateToProps)(PaymentDetails);
