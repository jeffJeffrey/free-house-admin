import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './Layout/Sidebar';
import Dashboard from './pages/Dashboard';
import HousingDetailPage from './pages/HousingDetailPage';
import LogementPage from './pages/LogementPage';
import Login from './pages/Login';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ServicePage from './pages/ServicePage';
import Signup from './pages/Signup';
import UserDetails from './pages/UserDetails';
import UserPage from './pages/UserPage';
import ValidationLogementPage from './pages/ValidationLogementPage';
import ValidationServicePage from './pages/ValidationServicePage';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: 20 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userDetails/:id" element={<UserDetails />} />
            <Route path="/logementDetails/:id" element={<HousingDetailPage />} />
            <Route path="/serviceDetails/:id" element={<ServiceDetailPage />} />
            <Route path="/anonce/logement" element={<LogementPage />} />
            <Route path="/anonce/service" element={<ServicePage />} />
            <Route path="/validation/logement" element={<ValidationLogementPage />} />
            <Route path="/validation/service" element={<ValidationServicePage/>} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
