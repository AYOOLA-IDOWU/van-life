import React from 'react'
import './Navbar.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <Navbar/>
      <div id='bg' className='container-fluid text-white'>
        <div className='container pt-5' style={{ padding: '0 15px' }}>
          <h1 className='' style={{ fontSize: '60px', fontFamily: 'sans-serif' }}>
            <b>You got the travel plans, we got the travel vans.</b>
          </h1>
          <p className='pt-3' style={{ fontSize: '20px' }}>
            Add adventure to your life by joining the #vanlife movement.
          </p>
          <p className='' style={{ fontSize: '20px', marginTop: '-19px' }}>
            Rent the perfect van to make your perfect road trip
          </p>
          <div className='py-5'>
          <Link to="/Van">
      <button className='mt-3 w-100 border-0 rounded p-4 text-white' style={{ backgroundColor: "#ff8c38" }}>
        <b>Find your van</b>
      </button>
    </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home