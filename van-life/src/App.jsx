import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Signin from './Components/Signin';
import About from './Components/About';
import Van from './Components/Van';
import Simple from './Components/Simple';
import Page404 from './Components/Page404';
import Welcome from './Components/Dashboard';

// Nested Components
import VansDashboard from './Components/VansDashboard';
import ReviewsDashboard from './Components/ReviewsDashboard';
import IncomeDashboard from './Components/IncomeDashboard';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/van/*" element={<Van />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/dashboard/*" element={<Welcome />} />
        <Route path="*" element={<Page404 />} />

        {/* Nested Routes */}
        <Route
          path="/dashboard/vans/*"
          element={<VansDashboard />}
        />
        <Route
          path="/dashboard/reviews/*"
          element={<ReviewsDashboard />}
        />
        <Route
          path="/dashboard/income/*"
          element={<IncomeDashboard />}
        />
      </Routes>
    </>
  );
};

export default App;
