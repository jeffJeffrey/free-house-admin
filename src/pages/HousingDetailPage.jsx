import { Box, Paper, Typography, Grid, Avatar, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HouseIcon from '@mui/icons-material/House';

const HousingDetailPage = ({ logements }) => {
  const { id } = useParams();
  const [housingDetails, setHousingDetails] = useState(null);

  useEffect(() => {
    const logement = logements.find(l => l.id === parseInt(id));
    setHousingDetails(logement);
  }, [id, logements]);

  if (!housingDetails) {
    return <Typography variant="h6">Logement non trouvé</Typography>;
  }

  const columns = [
    { field: 'titre', headerName: 'Titre', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('Voir plus', params.id)}
        >
          Voir plus
        </Button>
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        p: 4,
      }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ mt: 2, mb: 4 }}>
        Détails du Logement
      </Typography>

      {/* Content */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
              background: 'linear-gradient(to right, #3f51b5, #5c6bc0)', // Fond dégradé bleu
              color: '#ffffff', // Texte en blanc pour contraste
            }}
          >
            <Avatar sx={{ bgcolor: '#3f51b5', mb: 2 }}>
              <HouseIcon />
            </Avatar>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {housingDetails.nom}
            </Typography>
            <Typography variant="body1">
              {housingDetails.description}
            </Typography>
            <Typography variant="body1">
              Localisation : {housingDetails.localisation}
            </Typography>
            <Typography variant="body1">
              Type : {housingDetails.typeLogement}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Liste des annonces
            </Typography>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={housingDetails.annonces || []}
                columns={columns}
                pageSize={5}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HousingDetailPage;
