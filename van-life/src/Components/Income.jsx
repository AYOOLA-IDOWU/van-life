import React from 'react';
import NavbarC from './NavbarC';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Income = () => {
  return (
    <>
      <NavbarC />
      <div className="container row mt-4 p-4 w-100">
        <div className="col-md-3">
          <a href="/" className="text-dark" style={{ textDecoration: 'none' }}>
            Dashboard
          </a>
        </div>
        <div className="col-md-3">
          <a href="/" className="text-dark">
            <b>Income</b>
          </a>
        </div>
        <div className="col-md-3">
          <a href="/" className="text-dark" style={{ textDecoration: 'none' }}>
            Vans
          </a>
        </div>
        <div className="col-md-3 mt-2">
          <a href="/" className="text-dark" style={{ textDecoration: 'none' }}>
            Reviews
          </a>
        </div>
      </div>

      <div className="p-5 container">
        <h1>Income</h1>

        <div className="mt-3">
          <h5 className="col-md-8">
            Last <a href="/" className="text-dark">
              30 days
            </a>
          </h5>
        </div>

        <h1 style={{ fontWeight: 900 }} className="mt-3">
          $2,260
        </h1>

        <img src="./image/Group 313.png" className="w-75 mt-5" alt="" />

        <div className="flex-container mt-5 mb-4">
          <h3 className="col-md-8" style={{ fontWeight: 900 }}>
            Your transactions (3)
          </h3>
          <h5 className="col-lg-4">Last 30 days</h5>
        </div>

        <div style={{ backgroundColor: '#fff7ed' }} className="p-4">
          <div className="flex-container mt-5 bg-white rounded">
            <div className="d-flex p-3">
              <h5 className="p-2">$720 </h5>
            </div>
            <h5 className="col-lg-4 pt-4">1/12/22</h5>
          </div>

          <div className="flex-container mt-5 bg-white rounded">
            <div className="d-flex p-3">
              <h5 className="p-2">$560</h5>
            </div>
            <h5 className="col-lg-4 pt-4">10/11/22</h5>
          </div>

          <div className="flex-container mt-5 bg-white rounded">
            <div className="d-flex p-3">
              <h5 className="p-2">$980</h5>
            </div>
            <h5 className="col-lg-4 pt-4">23/11/22</h5>
          </div>
        </div>
      </div>
      <Footer />
      <Outlet />
    </>
  );
};

export default Income;
