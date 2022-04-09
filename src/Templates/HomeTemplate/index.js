import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export const HomeTemplate = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <HomeLayout>
            <Component {...props} />
          </HomeLayout>
        );
      }}
    />
  );
};
