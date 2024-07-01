import { Avatar, Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = ({ users }) => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const user = users.find(u => u.id === parseInt(id));
    setUserDetails(user);
  }, [id, users]);

  if (!userDetails) {
    return <Typography variant="h6">Utilisateur non trouvé</Typography>;
  }

  const handleViewMore = (id) => {
    console.log("Voir plus pour l'annonce avec ID:", id);
    // Logique pour afficher plus de détails sur l'annonce
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
            onClick={() => handleViewMore(params.id)}
          >
            Voir plus
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Paper
        sx={{
          padding: 3,
          mb: 2,
          background: 'linear-gradient(to right, #6a11cb, #2575fc)', // Fond dégradé
          color: '#ffffff', // Texte en blanc pour contraste
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
        <Box sx={{ height: 'calc(100vh - 200px)', width: '100%' }}>
          <DataGrid rows={userDetails.annonces} columns={columns} pageSize={5} />
        </Box>
      </Paper>
    </Box>
  );
};

export default UserDetails;
