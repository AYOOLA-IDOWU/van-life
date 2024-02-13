import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Signin from './Components/Signin';
import About from './Components/About';
import Van from './Components/Van';
import Simple from './Components/Simple';
import Page404 from './Components/Page404';




import Host from './Components/Host';
import HostVans from'./Components/Host';
import Review from './Components/Review';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/van/" element={<Van />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="*" element={<Page404 />} />




        <Route path="/host/*" element={<Host />} />

        <Route path="/host/vans/*" element={<HostVans />}/>

        <Route path="/host/review/*" element={<Review />}/>

        {/* <Route path="/host//*" element={< />}/> */}


      </Routes>
    </>
  );
};

export default App;
