import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core"
import GridContainer from "../../UI/Grid/GridContainer";
import GridItem from "../../UI/Grid/GridItem";
import { connect } from "react-redux";
import { contactUs } from "../../../store/actions";


class Form extends Component {
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    this.props.contactUs(this.state);
    console.log(this.state)
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} lg={6}>
            <h2>Contact us</h2>
            <span>
              <h5>
                Questions, feedback or concerns? We'd love to hear all about it
                and help you find the right solution. Shoot us a message and
                we'll get back to you as soon as possible.{" "}
              </h5>
            </span>
          </GridItem>
          <GridItem xs={12} lg={6}>
            <form>
              <TextField
                type="text"
                id="filled-name"
                label="Name"
                name="name"
                margin="normal"
                variant="filled"
                value={this.props.name}
                onChange={this.handleChange}
                style={{ backgroundColor: "#e2e2e2 " }}
                fullWidth
              />{" "}
              <TextField
                id="filled-email"
                type="email"
                label="Email"
                name="email"
                margin="normal"
                variant="filled"
                value={this.props.email}
                onChange={this.handleChange}
                style={{ backgroundColor: "white" }}
                fullWidth
              />{" "}
              <TextField
                id="filled-message"
                label="Message"
                rows="4"
                margin="normal"
                variant="filled"
                name="message"
                value={this.props.message}
                onChange={this.handleChange}
                style={{ backgroundColor: "white" }}
                fullWidth
                multiline
              />
            </form>
            <Button
              variant="contained"
              color="default"
              onClick={() => this.handleSubmit(this.state)}
              type="submit"
            >
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <br />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    email: state.email,
    message: state.message
  };
};

const mapDispatchToProps = {
  contactUs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
