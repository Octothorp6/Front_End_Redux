import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withLayout } from "./components/UI/Layout";
import themes, { overrides } from "./themes";
import Layout from "./components/DashboardPage/Layout";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout/index";
import Lazy3d from "./components/3DCanvas/View";

const theme = createMuiTheme({ ...themes.default, ...overrides });

const PrivateRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Redirect
            to={{
              pathname: "/admin"
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
};

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => withLayout(Home)} />
        <Route exact path="/checkout" render={() => withLayout(Checkout)} />
        <Route
          exact
          path="/admin"
          render={() => <Redirect to="/admin/dashboard" />}
        />
        <PrivateRoute path="/admin" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route path="/enkeep" component={Lazy3d} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default compose(
  connect(state => ({
    isAuthenticated: state.login.isAuthenticated
  }))
)(App);
