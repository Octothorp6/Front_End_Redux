import React, { Component } from "react";
import GridContainer from "../../UI/Grid/GridContainer";
import GridItem from "../../UI/Grid/GridItem";
import { Button, Card } from "@material-ui/core";
import { connect } from "react-redux";
import { contactEthernode } from "../../../store/actions";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import { contactState } from "../../../store/initialState";
import { ContactSchema } from "./validationSchema";

class ContactForm extends Component {
  handleSubmit = values => {
    this.props.contactEthernode(values);
  };

  render() {
    return (
      <Formik
        initialValues={{ ...contactState }}
        onSubmit={this.handleSubmit}
        validationSchema={ContactSchema}
      >
        {({ values, errors, touched, validateForm }) => (
          <React.Fragment>
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={12} lg={6}>
                  <h2>Contact us</h2>
                  <span>
                    <h5>
                      Questions, feedback or concerns? We'd love to hear all
                      about it and help you find the right solution. Shoot us a
                      message and we'll get back to you as soon as possible.
                    </h5>
                  </span>
                </GridItem>
                <GridItem sm={12} lg={6}>
                  <Field
                    type="text"
                    name="name"
                    margin="normal"
                    className="Field"
                    variant="outlined"
                    component={TextField}
                    helperText={touched.name && errors.name && errors.name}
                    fullwidth="true"
                  />
                  <Field
                    type="text"
                    name="email"
                    margin="normal"
                    className="Field"
                    variant="outlined"
                    component={TextField}
                    helperText={touched.email && errors.email && errors.email}
                    fullwidth="true"
                  />
                  <br />
                  <Field
                    type="text"
                    name="message"
                    margin="normal"
                    className="Field"
                    variant="outlined"
                    component={TextField}
                    helperText={
                      touched.message && errors.message && errors.message
                    }
                    fullwidth="true"
                  />
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() =>
                      validateForm().then(() => this.handleSubmit(values))
                    }
                    type="submit"
                  >
                    Submit
                  </Button>
                </GridItem>
              </GridContainer>
            </Form>
          </React.Fragment>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  email: state.email,
  message: state.message
});

const mapDispatchToProps = {
  contactEthernode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
