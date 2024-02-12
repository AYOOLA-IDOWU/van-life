import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Van = () => {
  return (
    <>
    <Navbar/>
    <div className="container" style={{marginBottom: '120px'}}>
        <h2 className="pt-4"><b>Explore our van options</b></h2>

        <div className="row mt-4 mx-auto w-75 px-5">
            <div className="col-md-3">
              <Link to="/Simple">
              <button className="btn btn- w-100 mt-2 custom-button">Simple</button>
              </Link>
            </div>
            <div className="col-md-3">
                <button className="btn btn- w-100 mt-2 lux">Luxury</button>
            </div>
            <div className="col-md-3">
                <button className="btn btn- w-100 mt-2 rug">Rugged</button>
            </div>
            <div className="col-md-3 mt-2">
                <a href="" className="text-dark">Clear filters</a>
            </div>
        </div>

        <div className="row mt-4 w-100">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="card border-0">
                    <img src="src/assets/Rectangle 162.png" className="card-img-top p-3 rounded" alt="Van Image"/>
                    <div className="card-body">
                        <div className="d-flex gap-5">
                            <h5 className="card-title w-75"><b>Modest Explorer</b></h5>
                            <p className="card-text w-25"><b>$60 </b><br/> <b>/day</b></p>
                        </div>
                        <Link to="/Simple">
                        <button className="btn btn- w-75 p-3 bg-danger text-white">Simple</button>
                        </Link>                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="card border-0">
                    <img src="src/assets/Rectangle 163.png" className="card-img-top p-3 rounded" alt="Van Image"/>
                    <div className="card-body">
                        <div className="d-flex gap-5">
                            <h5 className="card-title w-75"><b>Beach Bum</b></h5>
                            <p className="card-text w-25"><b>$80</b> <br/> <b>/day</b></p>
                        </div>
                        <button className="btn btn- w-75 p-3 text-white" style={{backgroundColor: '#115e59'}}>Rugged</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="card border-0">
                    <img src="src/assets/alpert-wang-rxQL0ieF_Bs-unsplash 2.png" className="card-img-top p-3 rounded" alt="Van Image"/>
                    <div className="card-body">
                        <div className="d-flex gap-5">
                            <h5 className="card-title w-75"><b>Reliable Red</b></h5>
                            <p className="card-text w-25"><b>$100</b> <br/> <b>/day</b></p>
                        </div>
                        <button className="btn btn- w-75 p-3 bg-dark text-white">Luxury</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="card border-0">
                    <img src="src/assets/image 57.png" className="card-img-top p-3 rounded" alt="Van Image"/>
                    <div className="card-body">
                        <div className="d-flex gap-5">
                            <h5 className="card-title w-75"><b>Dreamer Finder</b></h5>
                            <p className="card-text w-25"><b>$65</b> <br/> <b>/day</b></p>
                        </div>
                        <button className="btn btn- w-75 p-3 bg-danger text-white">Simple</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="card border-0">
                    <img src="src/assets/Rectangle 155.png" className="card-img-top p-3 rounded" alt="Van Image"/>
                    <div className="card-body">
                        <div className="d-flex gap-5">
                            <h5 className="card-title w-75"><b>The crusier</b></h5>
                            <p className="card-text w-25"><b>$120 </b><br/> <b>/day</b></p>
                        </div>
                        <button className="btn btn- w-75 p-3 bg-dark text-white">Luxury</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="card border-0">
                    <img src="src/assets/Rectangle 156.png" className="card-img-top p-3 rounded" alt="Van Image"/>
                    <div className="card-body">
                        <div className="d-flex gap-5">
                            <h5 className="card-title w-75"><b>Green Wonder</b></h5>
                            <p className="card-text w-25"><b>$70 </b><br/> <b>/day</b></p>
                        </div>
                        <button className="btn btn- w-75 p-3 text-white" style={{backgroundColor: '#115e59'}}>Rugged</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Van