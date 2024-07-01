import { Box, Button, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ValidationLogementPage = () => {
  const [logements, setLogements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLogements([
      { id: 1, titre: 'Logement 1', localisation: 'Localisation 1', typeLogement: 'Type 1' },
      { id: 2, titre: 'Logement 2', localisation: 'Localisation 2', typeLogement: 'Type 2' },
    ]);
  }, []);

  const handleValidate = (id) => {
    console.log("Logement validé avec ID:", id);
    // Logique pour valider le logement
  };

  const handleReject = (id) => {
    console.log("Logement rejeté avec ID:", id);
    // Logique pour rejeter le logement
  };

  const handleViewLogement = (id) => {
    navigate(`/logementDetails/${id}`);
  };

  const columns = [
    { field: 'titre', headerName: 'Titre', width: 150 },
    { field: 'localisation', headerName: 'Localisation', width: 150 },
    { field: 'typeLogement', headerName: 'Type', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 450,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleViewLogement(params.id)}
          >
            Voir plus
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleValidate(params.id)}
          >
            Valider
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleReject(params.id)}
          >
            Rejeter
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Grid container sx={{ minHeight: '100vh', backgroundColor: '#ffffff' }} spacing={3}>
      <Grid item xs={12}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 3, color: '#283593' }}>
            Validation des Logements
          </Typography>
          <Box sx={{ height: 'calc(100vh - 200px)', width: '100%' }}>
            <DataGrid rows={logements} columns={columns} pageSize={5} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ValidationLogementPage;
