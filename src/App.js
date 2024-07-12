import React from "react";
import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form:', values);
      if (Object.keys(values).length === 2) {
        alert('Login Successful!!!');
      }
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if (!values.password) {
        errors.password = 'Field required';
      }
      console.log(errors);
      return errors;
    }
  });

  return (
    <div className="login__page">
      <div className="container__login">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="login__title">Welcome</h1>
          <div>Username:</div>
          <input
            type="text"
            name="email"
            id="emailField"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div id="emailError" className="error">{formik.errors.email}</div> : null}
          <div>Password:</div>
          <input
            type="password"
            name="password"
            id="pswField"
            onChange={formik.handleChange}
            value={formik.values.password}
          /><br/>
          {formik.errors.password ? <div id="pswError" className="error">{formik.errors.password}</div> : null}
          <button type="submit" id="submitBtn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
