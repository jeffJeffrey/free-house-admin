import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { allServices } from '../api';

class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
  }

  componentDidMount() {
    allServices().then((services) => {
      const servicesAvecStatut = services.map(service => ({
        ...service,
        statutPublication: service.publier ? 'Publié' : 'Non publié'
      }));
      this.setState({ services: servicesAvecStatut });
    });
  }

  handleViewService = (id) => {
    this.props.navigate(`/serviceDetails/${id}`);
  };

  handleDeleteService = (id) => {
    console.log("Supprimer service avec ID:", id);
  };

  render() {
    const { services } = this.state;

    const columns = [
      { field: 'titre', headerName: 'Titre', width: 200 },
      { field: 'description', headerName: 'Description', width: 200 },
      { 
        field: 'statutPublication', 
        headerName: 'Statut', 
        width: 200,
        renderCell: (params) => (
          <Typography color={params.value === 'Publié' ? 'green' : 'red'}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 290,
        renderCell: (params) => (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              startIcon={<VisibilityIcon />}
              onClick={() => this.handleViewService(params.id)}
            >
              Voir plus
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => this.handleDeleteService(params.id)}
            >
              Supprimer
            </Button>
          </Box>
        ),
      },
    ];

    return (
      <Grid container sx={{ minHeight: "100vh", backgroundColor: "#ffffff" }} spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, color: "#283593" }}>
              Liste des services
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={8}>
                <TextField
                  variant="outlined"
                  label="Rechercher"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  fullWidth
                >
                  Ajouter
                </Button>
              </Grid>
            </Grid>
            <Box sx={{ height: "calc(100vh - 240px)", width: "100%" }} marginTop={5}>
              <DataGrid rows={services} columns={columns} pageSize={5} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

const ServicePageWithNavigate = (props) => {
  const navigate = useNavigate();
  return <ServicePage {...props} navigate={navigate} />;
};

export default ServicePageWithNavigate;
