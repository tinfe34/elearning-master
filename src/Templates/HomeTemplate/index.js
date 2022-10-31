import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import BackToTop from "../../layout/BackToTop";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Header />
        {props.children}
      <Footer />
      <BackToTop/>
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
