import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import SideNav from '../components/sidenav';
import Dashboard from '../pages/dashboard';

const Routing = () => (

  <BrowserRouter>
    <SideNav>
      <Routes>
        <Route path="/finvault-test" element={<Dashboard />} />
      </Routes>
    </SideNav>
  </BrowserRouter>

);

export default Routing;
