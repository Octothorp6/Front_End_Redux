import { compose, withState, withHandlers, lifecycle } from "recompose";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import LoginView from "./LoginView";
import {
  login,
  loginError,
  register,
  registerError
} from "../../store/actions";

export default compose(
  connect(
    state => ({
      isLoading: state.auth.isLoading,
      isAuthenticated: state.auth.isAuthenticated,
      error: state.auth.error
    }),
    { login, loginError, register, registerError }
  ),
  withRouter,
  withState("activeTabId", "setActiveTabId", 0),
  withState("firstName", "setFirstNameValue", ""),
  withState("lastName", "setLastNameValue", ""),
  withState("username", "setUsernameValue", ""),
  withState("password", "setPasswordValue", ""),
  withHandlers({
    handleTabChange: props => (e, id) => {
      props.setActiveTabId(id);
    },
    handleInput: props => (e, input = "login") => {
      if (props.error) {
        props.loginError(props.error);
      }
      
      if (input === "username") {
        props.setUsernameValue(e.target.value);
      } else if (input === "password") {
        props.setPasswordValue(e.target.value);
      } else if (input === "firstName") {
        props.setFirstNameValue(e.target.value);
      } else if (input === "lastName") {
        props.setLastNameValue(e.target.value)
      }
    },
    handleLoginButtonClick: props => () => {
      props.login(props.username, props.password);
    },
    handleRegisterButtonClick: props => () => {
      props.register(
        props.firstName,
        props.lastName,
        props.username,
        props.password
      );
    }
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (!this.props.error && nextProps.error) {
        this.props.setPasswordValue("");
      }
    }
  })
)(LoginView);
