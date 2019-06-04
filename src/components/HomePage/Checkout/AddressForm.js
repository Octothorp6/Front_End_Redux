import React, { useState } from "react";
import GridContainer from "../UI/Grid/GridContainer";
import GridItem from "../UI/Grid/GridItem";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from "@material-ui/core";
import DifBilling from "./Difbilling";
import { connect } from "react-redux";

const AddressForm = ({ state, handleChange }) => {
  const [difShip, setShip] = useState(false);
  const { errors } = state;

  const difBilling = () => {
    setShip(true);
    console.log();
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <GridContainer spacing={24}>
        <GridItem xs={12} sm={6}>
          <TextField
            type="text"
            id="firstName"
            name="userFirst"
            label="First name"
            value={state.userFirst}
            autoComplete="fname"
            onChange={handleChange}
            required
            helperText={
              errors.userFirst.length > 0 ? `${errors.userFirst}` : ""
            }
            fullWidth
          />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <TextField
            type="text"
            id="lastName"
            label="Last name"
            name="userLast"
            value={state.userLast}
            autoComplete="lname"
            onChange={handleChange}
            fullWidth
            helperText={errors.userLast.length > 0 ? `${errors.userLast}` : ""}
            required={true}
          />
        </GridItem>
        <GridItem xs={12} sm={12} lg={12}>
          <TextField
            type="email"
            id="email"
            label="Email"
            name="userEmail"
            value={state.userEmail}
            autoComplete="email"
            onChange={handleChange}
            helperText={
              errors.userEmail.length > 0 ? `${errors.userEmail}` : ""
            }
            required={true}
            fullWidth
          />
        </GridItem>
        <GridItem xs={12} sm={12} lg={12}>
          <TextField
            type="text"
            id="address1"
            label="Address line 1"
            name="shippingAddress1"
            value={state.shippingAddress1}
            autoComplete="billing address-line1"
            onChange={handleChange}
            helperText={
              errors.shippingAddress1.length > 0
                ? `${errors.shippingAddress1}`
                : ""
            }
            required
            fullWidth
          />
        </GridItem>
        <GridItem xs={12} sm={12} lg={12}>
          <TextField
            type="text"
            id="address2"
            label="Address line 2"
            name="shippingAddress2"
            value={state.shippingAddress2}
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
            name="shippingCity"
            value={state.shippingCity}
            autoComplete="billing address-level2"
            onChange={handleChange}
            helperText={
              errors.shippingCity.length > 0 ? `${errors.shippingCity}` : ""
            }
            fullWidth
            required
          />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <TextField
            type="text"
            id="shippingState"
            label="State/Province/Region"
            name="shippingState"
            value={state.shippingState}
            onChange={handleChange}
            helperText={
              errors.shippingState.length > 0 ? `${errors.shippingState}` : ""
            }
            required
            fullWidth
          />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <TextField
            type="number"
            id="zip"
            label="Zip / Postal code"
            name="shippingZip"
            value={state.shippingZip}
            autoComplete="billing postal-code"
            onChange={handleChange}
            helperText={
              errors.shippingZip.length > 0 ? `${errors.shippingZip}` : ""
            }
            required
            fullWidth
          />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <TextField
            type="text"
            id="country"
            label="Country"
            name="shippingCountry"
            value={state.shippingCountry}
            autoComplete="billing country"
            onChange={handleChange}
            helperText={
              errors.shippingCountry.length > 0
                ? `${errors.shippingCountry}`
                : ""
            }
            fullWidth
            required
          />
        </GridItem>
        <GridItem xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                value="yes"
                onClick={() => difBilling()}
              />
            }
            label="Different billing address?"
          />
        </GridItem>
        {difShip === true && <DifBilling />}
      </GridContainer>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    userFirst: state.userFirst,
    userLast: state.userLast,
    userEmail: state.email,
    shippingAddress1: state.shippingAddress1,
    shippingAddress2: state.shippingAddress2,
    shippingCity: state.shippingCity,
    shippingState: state.shippingState,
    shippingZip: state.shippingZip,
    shippingCountry: state.shippingCountry,
    errors: { ...state.errors }
  };
};

export default connect(mapStateToProps)(AddressForm);
