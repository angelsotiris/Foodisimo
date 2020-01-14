import React from "react";
import { Route, Redirect } from "react-router-dom";
import LoginValue from "./LoginValue";

export const LoginProtected = ({component: Component,...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (LoginValue.getLoginValue()) {
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
