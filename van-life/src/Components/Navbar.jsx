import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const MyNavbar = () => {
  return (
    <div style={{margin: '0px'}}>
      <nav className="navbar bg-white text-dark p-3">
        <Link className="navbar-brand" to="/home"><img src="./src/assets/logog.png" alt="logo" width={'180px'} /></Link>
        <div className="d-flex">
          <Link className="nav-link text-dark mx-2 about" to="/about"><b>About</b></Link>
          <Link className="nav-link text-dark mx-5 van" to="/van"><b>Vans</b></Link>
        </div>
      </nav>
    </div>
  );
}

export default MyNavbar;
