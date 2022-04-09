import React, { Fragment } from "react";
import { Route } from "react-router-dom";

const AdminLayout = (props) => {
  return <Fragment>{props.children}</Fragment>;
};

export const AdminTemplate = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <AdminLayout>
            <Component {...props} />
          </AdminLayout>
        );
      }}
    />
  );
};
