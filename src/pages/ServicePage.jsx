import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
  }

  componentDidMount() {
    this.setState({
      services: [
        { id: 1, typeService: 'Service 1', description: 'Description 1' },
        { id: 2, typeService: 'Service 2', description: 'Description 2' },
      ],
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
      { field: 'typeService', headerName: 'Type de Service', width: 200 },
      { field: 'description', headerName: 'Description', width: 400 },
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
