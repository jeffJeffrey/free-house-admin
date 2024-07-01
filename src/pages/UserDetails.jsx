import { Avatar, Box, Button, Paper, Typography, Tabs, Tab } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Simulated data source
const mockUsers = [
  { id: 1, nom: "Utilisateur 1", adresse: "Adresse 1", role: { name: "Admin" }, annonces: [{ id: 1, titre: "Logement 1", type: "Logement", description: "Description du logement 1", dateAnnonce: new Date() }, { id: 2, titre: "Service 1", type: "Service", description: "Description du service 1", dateAnnonce: new Date() }] },
  { id: 2, nom: "Utilisateur 2", adresse: "Adresse 2", role: { name: "User" }, annonces: [{ id: 3, titre: "Logement 2", type: "Logement", description: "Description du logement 2", dateAnnonce: new Date() }, { id: 4, titre: "Service 2", type: "Service", description: "Description du service 2", dateAnnonce: new Date() }] },
];

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    // Simulating data fetching
    const user = mockUsers.find(u => u.id === parseInt(id));
    setUserDetails(user);
  }, [id]);

  if (!userDetails) {
    return <Typography variant="h6">Utilisateur non trouvé</Typography>;
  }

  const handleViewMore = (annonce) => {
    if (annonce.type === "Logement") {
      navigate(`/logementDetails/${annonce.id}`);
    } else if (annonce.type === "Service") {
      navigate(`/serviceDetails/${annonce.id}`);
    }
  };

  const columns = [
    { field: 'titre', headerName: 'Titre', width: 150 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'dateAnnonce', headerName: 'Date', width: 150, type: 'date' },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleViewMore(params.row)}
          >
            Voir plus
          </Button>
        </Box>
      ),
    },
  ];

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const annonces = userDetails.annonces.filter(annonce => 
    selectedTab === 0 ? annonce.type === "Logement" : annonce.type === "Service"
  );

  return (
    <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Paper
        sx={{
          padding: 3,
          mb: 2,
          background: 'linear-gradient(to right, #6a11cb, #2575fc)', // Background gradient
          color: '#ffffff', // White text for contrast
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ width: 60, height: 60, mr: 2 }}>{userDetails.nom[0]}</Avatar>
          <Typography variant="h4">
            {userDetails.nom}
          </Typography>
        </Box>
        <Typography variant="body1">
          Adresse : {userDetails.adresse}
        </Typography>
        <Typography variant="body1">
          Rôle : {userDetails.role?.name || 'N/A'}
        </Typography>
      </Paper>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Annonces
        </Typography>
        <Tabs value={selectedTab} onChange={handleChange} indicatorColor="primary" textColor="primary">
          <Tab label="Logement" />
          <Tab label="Service" />
        </Tabs>
        <Box sx={{ height: 'calc(100vh - 300px)', width: '100%' }}>
          <DataGrid rows={annonces} columns={columns} pageSize={5} />
        </Box>
      </Paper>
    </Box>
  );
};

export default UserDetails;
