// App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './Layout/Sidebar';
import AnnoncePage from './pages/AnnoncePage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserPage from './pages/UserPage'; // Assurez-vous que le chemin est correct

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: 20}}>
          <Routes>
          <Route path="/" element={<Dashboard/>} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/anonce" element={<AnnoncePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            {/* Autres routes ici si nécessaire */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
