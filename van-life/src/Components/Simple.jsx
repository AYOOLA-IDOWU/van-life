import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



const Simple = () => {
  return (
    <>
    <Navbar/>
<div style={{marginBottom: '120px'}}>
    
<div class="container pt-4">
    <div class="ms-5">
        <Link to="/Van" class="text-dark"><b>Back to all vans</b></Link>

    </div>
    </div>

<div class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="text-center">
                <img src="src/assets/Rectangle 162.png" class="card-img-top p-3 rounded" alt="Van Image"/>
            </div>

            <div class="">
                <button class="btn btn- mt-3 ms-3 text-white" style={{backgroundColor: '#e17654'}}>Simple</button>
                <h3 class="ms-3">Modest Explorer</h3>
                <h3 class="ms-3">$60/day</h3>
            </div>

            <div>
                <p class="ms-3">The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
            </div>

            <div class="text-center">
                <button class="btn btn- mt-3 w-100 mb-5 text-white" style={{backgroundColor: '#ff8c38'}}>Rent this van</button>
            </div>
        </div>
    </div>
</div>
</div>
<Footer/>
    </>
  )
}

export default Simple