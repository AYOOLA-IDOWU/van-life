import React from 'react'
import Footer from './Footer'
import NavbarC from './NavbarC'
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
    <NavbarC/>
      <div>
      <div className="container mt-5 pt-5 justify-content-center w-50">
    <div className="text-left">
        <h1>Sorry, the page you were <br/> looking for was not found.</h1>
        <Link to="/home" className="btn btn- btn-block mt-5 w-75 text-white bg-dark p-4">Return to home</Link>
    </div>
</div>

    </div>
    <Footer/>  
    </>
  )
}

export default Page404