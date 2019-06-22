import React from "react";
import loadable from "@loadable/component";
import { Route, Switch, Redirect } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Checkout from "./Checkout";
import { withLayout } from "../components/UI/Layout";

//LAZY LOADING ROUTES ONLY AS THEY ARE NEEDED
const LazyLogin = loadable(() => 
  import("./Login")
);

const LazyAdmin = loadable(() =>
  import("../components/DashboardPage/Layout")
);

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

const asyncComponent = Component => {
    return props => (
      <React.Fragment>
        <Component {...props} />
      </React.Fragment>
    );
  }

export const AppRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => withLayout(Home)} />
    <Route exact path="/checkout" render={() => withLayout(Checkout)} />
    <Route exact path="/admin" render={() => <Redirect to="/admin/dashboard" />} />
    <PublicRoute exact path="/login" component={asyncComponent(LazyLogin)} />
    <PrivateRoute exact path="/admin" component={asyncComponent(LazyAdmin)} />
    <Route component={Error} />
  </Switch>
);
