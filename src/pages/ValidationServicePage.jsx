import { Box, Button, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ValidationServicePage = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setServices([
      { id: 1, titre: 'Service 1', description: 'Description 1', dateAnnonce: new Date(), adminValid: false },
      { id: 2, titre: 'Service 2', description: 'Description 2', dateAnnonce: new Date(), adminValid: false },
    ]);
  }, []);

  const handleValidate = (id) => {
    console.log("Service validé avec ID:", id);
    // Logique pour valider le service
  };

  const handleReject = (id) => {
    console.log("Service rejeté avec ID:", id);
    // Logique pour rejeter le service
  };

  const handleViewService = (id) => {
    navigate(`/serviceDetails/${id}`);
  };

  const columns = [
    { field: 'titre', headerName: 'Titre', width: 150 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'dateAnnonce', headerName: 'Date', width: 150, type: 'date' },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 450,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleViewService(params.id)}
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
            Validation des Services
          </Typography>
          <Box sx={{ height: 'calc(100vh - 200px)', width: '100%' }}>
            <DataGrid rows={services} columns={columns} pageSize={5} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ValidationServicePage;
