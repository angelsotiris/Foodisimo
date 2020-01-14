import React from "react";
import { Route, Redirect } from "react-router-dom";
import CartValue from "./CartValue";

export const ConfirmOrderProtected = ({component: Component,...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (CartValue.getSinolikiTimiValue()!==0) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          );
        }
      }}
    />
  );
};
