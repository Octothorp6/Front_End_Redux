import React from "react";
import { TextField } from "formik-material-ui";
import { Field } from "formik";
import GridContainer from "../UI/Grid/GridContainer";
import GridItem from "../UI/Grid/GridItem";

const DifBilling = ({ errors, touched }) => (
  <React.Fragment>
    <GridContainer spacing={24}>
      <GridItem lg={6} sm={12}>
        <Field
          type="text"
          name="cardHolder"
          component={TextField}
          helperText={
            touched.cardHolder && errors.cardHolder && errors.cardHolder
          }
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={6} sm={12}>
        <Field
          type="number"
          name="cardNumber"
          component={TextField}
          helperText={
            touched.cardNumber && errors.cardNumber && errors.cardNumber
          }
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={12} sm={12}>
        <Field
          type="text"
          name="expiration"
          component={TextField}
          helperText={
            touched.expiration && errors.expiration && errors.expiration
          }
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={12} sm={12}>
        <Field
          type="text"
          name="shippingAddress1"
          component={TextField}
          helperText={
            touched.shippingAddress1 &&
            errors.shippingAddress1 &&
            errors.shippingAddress1
          }
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={12} sm={12}>
        <Field
          type="text"
          name="shippingAddress2"
          component={TextField}
          helperText={
            touched.shippingAddress2 &&
            errors.shippingAddress2 &&
            errors.shippingAddress2
          }
          fullwidth="true"
        />
      </GridItem>
    </GridContainer>
  </React.Fragment>
);

export default DifBilling;