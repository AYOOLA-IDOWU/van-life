import React from 'react';

const List = () => {
  return (
    <>
      <div style={{ backgroundColor: '#fff7ed' }} className="p-4">
        <div className="row mt-4">
          <div className="col-md-3">
            <a href="" className="text-dark" style={{ textDecoration: 'none' }}>
              Dashboard
            </a>
          </div>
          <div className="col-md-3">
            <a href="" className="text-dark" style={{ textDecoration: 'none' }}>
              Income
            </a>
          </div>
          <div className="col-md-3">
            <a href="" className="text-dark">
              <b>Vans</b>
            </a>
          </div>
          <div className="col-md-3 mt-2">
            <a href="" className="text-dark" style={{ textDecoration: 'none' }}>
              Reviews
            </a>
          </div>
        </div>

        <div className="flex-container mt-5">
          <h3 className="col-md-8" style={{ fontWeight: 900 }}>
            Your listed vans
          </h3>
        </div>

        <div className="flex-container mt-5 bg-white rounded">
          <div className="d-flex p-3">
            <img className="rounded ms-4" src="src/assets/alpert-wang-rxQL0ieF_Bs-unsplash 2.png" width="60px" alt="" />
            <h5 className="p-2">Modest Explorer</h5>
          </div>
        </div>

        <div className="flex-container mt-5 bg-white rounded">
          <div className="d-flex p-3">
            <img className="rounded ms-4" src="src/assets" width="60px" alt="" />
            <h5 className="p-2">Beach Bum</h5>
          </div>
        </div>

        <div className="flex-container mt-5 bg-white rounded">
          <div className="d-flex p-3">
            <img className="rounded ms-4" src="src/assets" width="60px" alt="" />
            <h5 className="p-2">Green Wonder</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
