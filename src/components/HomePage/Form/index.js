import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { GridContainer, GridItem } from "../../UI/Grid";
import { contactEthernode } from "../../../store/actions";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import { contactState } from "../../../store/initialState";
import { ContactSchema } from "./validationSchema";
import "./Form.css";

class ContactForm extends Component {
  handleSubmit = values => {
    this.props.contactEthernode(values);
  };

  render() {
    return (
      <React.Fragment>
        <Formik
          initialValues={{ ...contactState }}
          validationSchema={ContactSchema}
        >
          {({ values, validateForm, resetForm }) => (
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
                  <br />
                  <Field
                    type="text"
                    name="name"
                    margin="normal"
                    className="Field"
                    variant="filled"
                    label="Name"
                    component={TextField}
                    fullwidth="true"
                  />
                  <Field
                    type="email"
                    name="email"
                    margin="normal"
                    className="Field"
                    label="Email"
                    variant="filled"
                    component={TextField}
                    fullwidth="true"
                  />
                  <Field
                    type="text"
                    name="message"
                    margin="normal"
                    className="Field"
                    label="Message"
                    variant="filled"
                    component={TextField}
                    fullwidth="true"
                  />
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => {
                      validateForm().then(() => this.handleSubmit(values));
                      resetForm(contactState)
                    }}
                  >
                    Submit
                  </Button>
                </GridItem>
              </GridContainer>
              <br />
            </Form>
          )}
        </Formik>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  name: state.email.name,
  email: state.email.email,
  message: state.email.message
});

const mapDispatchToProps = {
  contactEthernode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
