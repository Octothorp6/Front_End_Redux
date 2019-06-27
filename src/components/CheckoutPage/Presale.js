import React from "react";
import { TextField } from "formik-material-ui";
import { Field } from "formik";
import GridContainer from "../UI/Grid/GridContainer";
import GridItem from "../UI/Grid/GridItem";
import "./checkoutPages.css";

const Presale = ({ errors, touched }) => (
  <div className="textFields">
    <GridContainer spacing={24}>
      <GridItem lg={6} sm={12}>
        <Field
          type="text"
          name="userFirst"
          className="Field"
          variant="outlined"
          component={TextField}
          helperText={touched.userFirst && errors.userFirst && errors.userFirst}
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={6} sm={12}>
        <Field
          type="number"
          name="userLast"
          className="Field"
          variant="outlined"
          component={TextField}
          helperText={touched.userLast && errors.userLast && errors.userLast}
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={12} sm={12}>
        <Field
          type="text"
          name="userEmail"
          className="Field"
          variant="outlined"
          component={TextField}
          helperText={touched.userEmail && errors.userEmail && errors.userEmail}
          fullwidth="true"
        />
      </GridItem>
      <GridItem lg={12} sm={12} />
      <GridItem lg={12} sm={12}>
        <Field
          type="text"
          name="password"
          className="Field"
          variant="outlined"
          component={TextField}
          helperText={touched.password && errors.password && errors.password}
          fullwidth="true"
        />
      </GridItem>
    </GridContainer>
  </div>
);

export default Presale;
