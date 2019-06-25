import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const RegistrationForm = ({ errors, touched }) => {
  return (
    <div>
      <h3>Welcome</h3>
      <Form>
        <div>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type="text" name="username" placeholder="Username" />
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>

        <button type="submit">Join</button>
        <button type="reset">Clear</button>
      </Form>
    </div>
  );
};

const registrationFormValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Username must be 5 characters or longer.")
    .required("Username is required."),
  password: Yup.string()
    .min(6, "Password must be 6 characters or longer.")
    .required("Password is required.")
});

const FormikRegistrationForm = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: registrationFormValidationSchema,
  handleSubmit(values, { props, resetForm }) {
    props.registerUser(values);
    resetForm();
  }
})(RegistrationForm);

export default FormikRegistrationForm;
