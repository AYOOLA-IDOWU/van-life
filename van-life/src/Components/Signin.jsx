import React from 'react';
import NavbarB from './NavbarB';
import Footer from './Footer';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Valid email address").required("Required"),
      password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, "Invalid password. Minimum eight characters, at least one letter and one number"),
    }),

    onSubmit: (values) => {
      console.log(values);

      Swal.fire({
        icon: 'success',
        title: 'Sign-in Successful!',
        text: 'You have successfully signed in.',
      });
    },
  });

  return (
    <>
      <NavbarB />
      <form onSubmit={formik.handleSubmit}>
        <div className='mt-5'>
          <h2 className="text-center"><b>Sign in to your account</b></h2>
        </div>

        <div className="container mt-4 pt-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="mb-3">
                <input
                  type="text"
                  id="email"
                  className="form-control w-100"
                  placeholder="Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <span className="text-danger">{formik.errors.email}</span>

              <div className="mb-3">
                <input
                  type="password"
                  id="password"
                  className="form-control w-100"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <span className="text-danger">{formik.errors.password}</span>

              <button type="submit" className="btn btn- w-100 text-white" style={{ backgroundColor: '#ff8c38' }}><b>Sign In</b></button>
              <p className="text-center mt-5 mb-5">Don’t have an account? <a href="" style={{ textDecoration: 'none', color: '#ff8c38' }}>Create one now</a> </p>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Signin;
