import React from 'react';
import NavbarB from './NavbarB';
import Footer from './Footer';

const Signin = () => {
  return (
    <>
<NavbarB/>
      <div className='mt-5'>
        <h2 className="text-center"><b>Sign in to your account</b></h2>
      </div>

      <div className="container mt-4 pt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control w-100" placeholder="Email Address"></input>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control w-100" placeholder="Password"></input>
              </div>
              <button type="submit" className="btn btn- w-100 text-white" style={{ backgroundColor: '#ff8c38' }}><b>Sign In</b></button>
              <p className="text-center mt-5 mb-5">Don’t have an account? <a href="" style={{ textDecoration: 'none', color: '#ff8c38' }}>Create one now</a> </p>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Signin;
