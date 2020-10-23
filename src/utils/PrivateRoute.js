import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, role, status, removeToken, requiredRoles, ...rest }) => {
  const userHasRequiredRole = requiredRoles.includes(role);
  return (
    <Route {...rest} render={props => (
        (status === false) 
        ? removeToken()
        :localStorage.getItem('token') && userHasRequiredRole
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/verifytoken', state: { from: props.location } }} />
    )} />
  )
}