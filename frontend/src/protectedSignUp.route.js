import React, {Component} from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext"

class ProtectedSignUpRoute extends Component {

  constructor(props){
    super(props)
  }

  render(){
    const {auth} = this.context;
    const { component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={(props) => {
          if (!auth) {
            return <Component {...props} />;
          } else {
            //   localStorage.setItem("pathname", props.location.pathname);
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
  }
};

ProtectedSignUpRoute.contextType = AuthContext

export default ProtectedSignUpRoute;
