import React from "react";
import { TextField } from "formik-material-ui";
import { Field } from "formik";
import GridContainer from "../UI/Grid/GridContainer";
import GridItem from "../UI/Grid/GridItem";

const AddressForm = ({ errors, touched }) => (
  <React.Fragment>
    <GridContainer spacing={24}>
      <GridItem lg={6} sm={12}>
        <Field
          type="text"
          name="userFirst"
          component={TextField}
          helperText={touched.userFirst && errors.userFirst && errors.userFirst}
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={6} sm={12}>
        <Field
          type="text"
          name="userLast"
          component={TextField}
          helperText={touched.userLast && errors.userLast && errors.userLast}
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={12} sm={12}>
        <Field
          type="text"
          name="userEmail"
          component={TextField}
          helperText={touched.userEmail && errors.userEmail && errors.userEmail}
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
      <GridItem lg={6} sm={12}>
        <Field
          type="text"
          name="shippingCity"
          component={TextField}
          helperText={
            touched.shippingCity && errors.shippingCity && errors.shippingCity
          }
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={6} sm={12}>
        <Field
          type="text"
          name="shippingState"
          component={TextField}
          helperText={
            touched.shippingState &&
            errors.shippingState &&
            errors.shippingState
          }
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={6} sm={12}>
        <Field
          type="text"
          name="shippingZip"
          component={TextField}
          helperText={
            touched.shippingZip && errors.shippingZip && errors.shippingZip
          }
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={6} sm={12}>
        <Field
          type="text"
          name="shippingCountry"
          component={TextField}
          helperText={
            touched.shippingCountry &&
            errors.shippingCountry &&
            errors.shippingCountry
          }
          fullwidth="true"
        />
      </GridItem>
    </GridContainer>
  </React.Fragment>
);

export default AddressForm;