import React from "react";
import { TextField } from "formik-material-ui";
import { Field } from "formik";
import GridContainer from "../UI/Grid/GridContainer";
import GridItem from "../UI/Grid/GridItem";
import "./checkoutPages.css";

const PaymentDetails = ({ errors, touched }) => (
  <div className="textFields">
    <GridContainer spacing={24}>
      <GridItem lg={6} sm={12}>
        <Field
          type="text"
          name="cardHolder"
          className="Field"
          variant="outlined"
          label="Card holder"
          component={TextField}
          helperText={
            touched.cardHolder && 
            errors.cardHolder && 
            errors.cardHolder
          }
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={6} sm={12}>
        <Field
          type="number"
          name="cardNumber"
          className="Field"
          variant="outlined"
          label="Card number"
          component={TextField}
          helperText={
            touched.cardNumber && 
            errors.cardNumber && 
            errors.cardNumber
          }
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={6} sm={12}>
        <Field
          type="text"
          name="expiration"
          className="Field"
          variant="outlined"
          label="Expiration YYYY-MM"
          component={TextField}
          helperText={
            touched.expiration && 
            errors.expiration && 
            errors.expiration
          }
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={6} sm={12}>
        <Field
          type="number"
          name="cvv"
          className="Field"
          variant="outlined"
          label="CVV"
          component={TextField}
          helperText={
            touched.cvv &&
            errors.cvv &&
            errors.cvv
          }
          fullwidth="true"
        />
      </GridItem>
    </GridContainer>
  </div>
);

export default PaymentDetails;
