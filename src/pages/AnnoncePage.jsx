import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class AnnoncePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annonces: [],
    };
  }

  componentDidMount() {
    this.setState({
      annonces: [
        { id: 1, titre: 'Annonce 1', description: 'Description de l\'annonce 1' },
        { id: 2, titre: 'Annonce 2', description: 'Description de l\'annonce 2' },
      ],
    });
  }

  handleViewAnnonce = (id) => {
    this.props.navigate(`/annonceDetails/${id}`);
  };

  handleDeleteAnnonce = (id) => {
    console.log("Supprimer annonce avec ID:", id);
  };

  render() {
    const { annonces } = this.state;

    const columns = [
      { field: 'titre', headerName: 'Titre', width: 200 },
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
              onClick={() => this.handleViewAnnonce(params.id)}
            >
              Voir plus
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => this.handleDeleteAnnonce(params.id)}
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
              Liste des annonces
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
              <DataGrid rows={annonces} columns={columns} pageSize={5} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

const AnnoncePageWithNavigate = (props) => {
  const navigate = useNavigate();
  return <AnnoncePage {...props} navigate={navigate} />;
};

export default AnnoncePageWithNavigate;
