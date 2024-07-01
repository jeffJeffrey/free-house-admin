import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './Layout/Sidebar';
import Dashboard from './pages/Dashboard';
import HousingDetailPage from './pages/HousingDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LogementPage from './pages/LogementPage';
import Login from './pages/Login';
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
            <Route
              path="/userDetails/:id"
              element={<UserDetails users={[
                { id: 1, nom: "Utilisateur 1", adresse: "Adresse 1", annonces: [{ id: 1, titre: "Annonce 1", description: "Description de l'annonce 1" }] },
                { id: 2, nom: "Utilisateur 2", adresse: "Adresse 2", annonces: [{ id: 2, titre: "Annonce 2", description: "Description de l'annonce 2" }] },
              ]} />}
            />
            <Route
              path="/logementDetails/:id"
              element={<HousingDetailPage logements={[
                { id: 1, nom: "Logement 1", description: "Description du Logement 1", localisation: "Localisation 1", typeLogement: "Type 1" },
                { id: 2, nom: "Logement 2", description: "Description du Logement 2", localisation: "Localisation 2", typeLogement: "Type 2" },
              ]} />}
            />
            <Route
              path="/serviceDetails/:id"
              element={<ServiceDetailPage services={[
                { id: 1, nom: "Service 1", description: "Description du Service 1", localisation: "Localisation 1", typeService: "Type 1" },
                { id: 2, nom: "Service 2", description: "Description du Service 2", localisation: "Localisation 2", typeService: "Type 2" },
              ]} />}
            />
            
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
