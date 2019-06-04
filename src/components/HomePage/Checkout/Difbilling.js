import React from "react";
import GridContainer from '../UI/Grid/GridContainer';
import GridItem from '../UI/Grid/GridItem';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";

const DifBilling = ({ handleChange, state }) => {
  return (
    <GridContainer spacing={24}>
      <GridItem xs={12}>
        <TextField
          type="text"
          id="address1"
          label="Address line 1"
          name="billingAddress1"
          value={state.billingAddress1}
          autoComplete="billing address-line1"
          onChange={handleChange}
          required
          fullWidth
        />
      </GridItem>
      <GridItem xs={12}>
        <TextField
          type="text"
          id="address2"
          label="Address line 2"
          name="billingAddress2"
          value={state.billingAddress2}
          autoComplete="billing address-line2"
          onChange={handleChange}
          fullWidth
        />
      </GridItem>
      <GridItem xs={12} sm={6}>
        <TextField
          type="text"
          id="city"
          label="City"
          name="billingCity"
          value={state.billingCity}
          autoComplete="billing address-level2"
          onChange={handleChange}
          fullWidth
          required
        />
      </GridItem>
      <GridItem xs={12} sm={6}>
        <TextField
          type="text"
          id="homeState"
          label="State/Province"
          name="billingState"
          value={state.billingState}
          onChange={handleChange}
          fullWidth
          required
        />
      </GridItem>
      <GridItem xs={12} sm={6}>
        <TextField
          type="number"
          id="zip"
          label="Zip / Postal code"
          name="billingZip"
          value={state.billingZip}
          autoComplete="billing postal-code"
          onChange={handleChange}
          fullWidth
          required
        />
      </GridItem>
      <GridItem xs={12} sm={6}>
        <TextField
          type="text"
          id="country"
          label="Country"
          name="billingCountry"
          value={state.billingCountry}
          autoComplete="billing country"
          onChange={handleChange}
          fullWidth
          required
        />
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = state => {
  return {
    billingAddress1: state.billingAddress1,
    billingAddress2: state.billingAddress2,
    billingCity: state.billingCity,
    billingState: state.billingState,
    billingZip: state.billingZip,
    billingCountry: state.billingCountry,
    errors: {...state.errors}
  };
};

export default connect(
  mapStateToProps
)(DifBilling);

