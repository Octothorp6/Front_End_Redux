import React from "react";
import loadable from "@loadable/component";
import { Route, Switch, Redirect } from "react-router-dom";
import { withLayout } from "../components/UI/Layout";
import { WithAsyncComponent } from "./Helpers";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";

//LAZY LOADING ROUTES ONLY AS THEY ARE NEEDED
const LazyLogin = loadable(() => 
  import("../pages/Login")
);

const LazyAdmin = loadable(() =>
  import("../components/DashboardPage/Layout")
);

//ROUTE FUNCTIONS
export const PrivateRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem("token") ? (
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

export const PublicRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem("token") ? (
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

export const AppRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => withLayout(Home)} />
    <Route exact path="/checkout" render={() => withLayout(Checkout)} />
    <Route exact path="/admin" render={() => <Redirect to="/admin/dashboard" />} />
    <PublicRoute path="/login" component={WithAsyncComponent(LazyLogin)} />
    <PrivateRoute path="/admin" component={WithAsyncComponent(LazyAdmin)} />
    <Route component={Error} />
  </Switch>
);