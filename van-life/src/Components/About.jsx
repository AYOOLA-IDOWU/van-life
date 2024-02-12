import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <Navbar/>
      <div style={{marginBottom: '120px'}}>
        <div>
          <img className="w-100" src="src/assets/image 55.png" alt="image"/>
        </div>

        <div className="container">
          <h1 style={{ fontSize: '50px' }} className='mt-5'><b>Don't squeeze in a sedan when you could relax in a van</b></h1>
          <p style={{ fontSize: '20px' }}>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉) <br/><br/>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

          <div style={{ backgroundColor: '#ffcc8d' }} className="rounded">
            <h3 className="mt-4 ps-5 p-4"><b>Your destination is waiting. <br/>
              Your van is ready.</b></h3>
            <div className="ps-5 p-4">
              <button className="btn btn-dark p-4"><b>Explore our vans</b></button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
