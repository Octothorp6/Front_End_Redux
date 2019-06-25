import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AppRoutes } from "./utils/Routes";
import themes, { overrides } from "./themes";


const theme = createMuiTheme({ ...themes.default, ...overrides });

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <AppRoutes />
    </Router>
  </MuiThemeProvider>
);

export default compose(
  connect(state => ({
    isAuthenticated: state.login.isAuthenticated
  }))
)(App);
