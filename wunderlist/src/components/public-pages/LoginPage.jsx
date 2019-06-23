import React from "react";
import FormikRegistrationForm from "./Registration";
import FormikLoginForm from "./Login";
import { connect } from "react-redux";
import { registerUser, loginUser } from "./../../state/actions";

const LoginPage = props => {
  return (
    <div>
      <FormikRegistrationForm registerUser={props.registerUser} />
      <FormikLoginForm loginUser={props.loginUser} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticating: state.isAuthenticating,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { loginUser, registerUser }
)(LoginPage);
