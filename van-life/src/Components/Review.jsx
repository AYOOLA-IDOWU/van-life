import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import NavbarC from './NavbarC';

const Review = () => {
  return (
    <>
    <NavbarC/>
      <div className="row mt-4 px-4 w-100">
        <div className="col-md-3">
          <a href="/" className="text-dark" style={{ textDecoration: 'none' }}>
            Dashboard
          </a>
        </div>
        <div className="col-md-3">
          <a href="/" className="text-dark" style={{ textDecoration: 'none' }}>
            Income
          </a>
        </div>
        <div className="col-md-3">
          <a href="/" className="text-dark">
            <b>Vans</b>
          </a>
        </div>
        <div className="col-md-3 mt-2">
          <a href="/" className="text-dark" style={{ textDecoration: 'none' }}>
            Reviews
          </a>
        </div>
      </div>

      <div className="p-5 container">
        <div className="d-flex">
          <h3 style={{ fontWeight: 900 }}>Your reviews</h3>
          <a href="/" className="ms-3 pt-2">
            last 30 days
          </a>
        </div>

        <div className="mt-4 w-75">
          <img src="./image/Group 306.png" alt="" />
        </div>

        <div>
          <div className="star-container">
            <img src="./image/Star 4.png" alt="" />
            <img src="./image/Star 4.png" alt="" />
            <img src="./image/Star 4.png" alt="" />
            <img src="./image/Star 4.png" alt="" />
            <img src="./image/Star 4.png" alt="" />
          </div>

          <p className="w-100">
            <b>Elliot</b> December 1, 2022 <br /> <br />
            The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks, and there was not a single issue. Super clean when we picked it up, and the host is very comfortable and understanding. Highly recommend!
          </p>
          <hr />
        </div>

        <div>
          <div className="star-container">
            <img src="./image/Star 4.png" alt="" />
            <img src="./image/Star 4.png" alt="" />
            <img src="./image/Star 4.png" alt="" />
            <img src="./image/Star 4.png" alt="" />
            <img src="./image/Star 4.png" alt="" />
          </div>

          <p className="w-100">
            <b>Sandy </b> December 23, 2022 <br /> <br />
            This is our third time using the Modest Explorer for our travels, and we love it! No complaints, absolutely perfect!
          </p>
          <hr />
        </div>
      </div>
      <Footer/>
      <Outlet/>
    </>
  );
};

export default Review;
