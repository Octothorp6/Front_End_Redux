import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Checkout from "./Checkout";
import { withLayout } from "../components/UI/Layout";

const LazyLogin = React.lazy(() => import("./Login"));

const LazyAdmin = React.lazy(() =>
  import("../components/DashboardPage/Layout")
);

const LazyEnkeep = React.lazy(() => import("../components/3DCanvas/index"));

export default function asyncComponent(Component) {
  return props => (
    <Suspense fallback={<Home />}>
      <Component {...props} />
    </Suspense>
  );
}

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

export const AppRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => withLayout(Home)} />
    <Route exact path="/checkout" render={() => withLayout(Checkout)} />
    <Route exact path="/admin" render={() => <Redirect to="/admin/dashboard" />} />
    <Route exact path="/enkeep" component={asyncComponent(LazyEnkeep)} />
    <PublicRoute exact path="/login" component={asyncComponent(LazyLogin)} />
    <PrivateRoute exact path="/admin" component={asyncComponent(LazyAdmin)} />
    <Route component={Error} />
  </Switch>
);
