import React from "react";
import { Navigate } from "react-router-dom";

function withAuthorization(WrappedComponent) {
    function AuthenticatedComponent(props) {
      const isAuthenticated = false
      const isAuthorized = true;
  
      if (!isAuthenticated) {
        return <Navigate to="/login" />;
      } else if (!isAuthorized) {
        return <div>Access Denied</div>;
      } else {
        return <WrappedComponent {...props} data="Data with auth" />;
      }
    }
    return AuthenticatedComponent;
  }
export default withAuthorization