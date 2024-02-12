import React from 'react'
import './Navbar.css';
import Footer from './Footer';
import NavbarC from './NavbarC';
import { Outlet } from 'react-router-dom';


const VansDashboard = () => {
  return (
    <div>
            <>
    <NavbarC/>
    <div  style={{marginBottom: '120px'}}>
      <div className="row mt-4 w-100 container mx-4">
        <div className="col-md-2">
          <a href="" className="text-dark" >
            <b>Dashboard</b>
          </a>
        </div>
        <div className="col-md-2">
          <a href="" className="text-dark" style={{ textDecoration: 'none' }}>
            Income
          </a>
        </div>
        <div className="col-md-2">
          <a href="" className="text-dark"style={{ textDecoration: 'none' }}>
            Vans
          </a>
        </div>
        <div className="col-md-2">
          <a href="" className="text-dark" style={{ textDecoration: 'none' }}>
            Reviews
          </a>
        </div>
      </div>

      <div style={{ backgroundColor: '#ffead0' }} className="p-5">
        <h1>WDashboard!</h1>

        <div className="flex-container mt-5" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h5 className="col-md-8">Income last <a href="">30 days</a></h5>
          <h5 className="col-lg-4">Details</h5>
        </div>

        <h1 style={{ fontWeight: 900 }}>$2,260</h1>
      </div>

      <div style={{ backgroundColor: '#ffddb2' }} className="p-5">
        <div className="flex-container">
          <h3 className="col-md-8" style={{ fontWeight: 900 }}>
            Review score <img src="src/assets/Star 4.png" alt="" /> 5.0/5
          </h3>
          <h5 className="col-lg-4">Details</h5>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff7ed' }} className="p-4">
        <div className="flex-container mt-5">
          <h3 className="col-md-8" style={{ fontWeight: 900 }}>
            Your listed vans
          </h3>
          <h5 className="col-lg-4">View all</h5>
        </div>
        <div className="flex-container mt-5 bg-white rounded">
            <div className="d-flex p-3">
              <img className="rounded ms-4" src="src/assets/Rectangle 162.png" width="60px" alt="" />
              <h5 className="p-2">Modest Explorer <br /> <p style={{ fontWeight: 200 }}>$60/day</p> </h5>
            </div>
            <h5 className="col-lg-4 pt-4">Edit</h5>
          </div>

          <div className="flex-container mt-5 bg-white rounded">
            <div className="d-flex p-3">
              <img className="rounded ms-4" src="src/assets/Rectangle 163.png" width="60px" alt="" />
              <h5 className="p-2">Beach Bum<br /> <p style={{ fontWeight: 200 }}>$80/day</p></h5>
            </div>
            <h5 className="col-lg-4 pt-4">Edit</h5>
          </div>

          <div className="flex-container mt-5 bg-white rounded">
            <div className="d-flex p-3">
              <img className="rounded ms-4" src="src/assets/Rectangle 156.png" width="60px" alt="" />
              <h5 className="p-2">Green Wonder <br /> <p style={{ fontWeight: 200 }}>$70/day</p> </h5>
            </div>
            <h5 className="col-lg-4 pt-4">Edit</h5>
          </div>
        </div>
      </div>
      <Footer/>
      <Outlet/>
    </>
    </div>
  )
}

export default VansDashboard