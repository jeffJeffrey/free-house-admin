import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class LogementPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logements: [],
    };
  }

  componentDidMount() {
    this.setState({
      logements: [
        { id: 1, titre: 'Logement 1', localisation: 'Localisation 1', typeLogement: 'Type 1' },
        { id: 2, titre: 'Logement 2', localisation: 'Localisation 2', typeLogement: 'Type 2' },
      ],
    });
  }

  handleViewLogement = (id) => {
    this.props.navigate(`/logementDetails/${id}`);
  };

  handleDeleteLogement = (id) => {
    console.log("Supprimer logement avec ID:", id);
  };

  render() {
    const { logements } = this.state;

    const columns = [
      { field: 'titre', headerName: 'Titre', width: 200 },
      { field: 'localisation', headerName: 'Localisation', width: 200 },
      { field: 'typeLogement', headerName: 'Type de Logement', width: 200 },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 290,
        renderCell: (params) => (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              startIcon={<VisibilityIcon />}
              onClick={() => this.handleViewLogement(params.id)}
            >
              Voir plus
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => this.handleDeleteLogement(params.id)}
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
              Liste des logements
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
            <Box sx={{ height: "calc(100vh - 240px)", width: "100%" }}>
              <DataGrid rows={logements} columns={columns} pageSize={5} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

const LogementPageWithNavigate = (props) => {
  const navigate = useNavigate();
  return <LogementPage {...props} navigate={navigate} />;
};

export default LogementPageWithNavigate;
