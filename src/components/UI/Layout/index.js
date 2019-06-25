import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Layout function expression that will pass all components as children
const Layout = props => (
  <React.Fragment>
    <Header />
    <main>{props.children}</main>
    <Footer/>
  </React.Fragment>
);

//layout function with incoming Components as the parameter
export const withLayout = Component => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};