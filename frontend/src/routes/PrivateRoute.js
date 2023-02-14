import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isUserLoggedIn } from "../stores/authStore";
import { checkAndReturnAuthObject } from "../utilities/validator";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isUserLoggedIn(checkAndReturnAuthObject()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
