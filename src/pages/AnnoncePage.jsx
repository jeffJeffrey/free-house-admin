// AnnoncePage.jsx
import React, { Component } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';

class AnnoncePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annonces: [], // Liste des annonces à partir de l'API
    };
  }

  componentDidMount() {
    // Remplacez par un appel API réel pour récupérer les annonces
    this.setState({
      annonces: [
        { id: 1, titre: 'Annonce 1', description: 'Description de l\'annonce 1' },
        { id: 2, titre: 'Annonce 2', description: 'Description de l\'annonce 2' },
        // Ajoutez d'autres annonces ici
      ],
    });
  }

  handleViewAnnonce = (id) => {
    // Gérer l'affichage de l'annonce
    console.log("Voir annonce avec ID:", id);
  };

  handleDeleteAnnonce = (id) => {
    // Gérer la suppression de l'annonce
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
        width: 290, // Ajustement de la largeur pour inclure les boutons
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Occuper toute la hauteur de la page
          backgroundColor: "#ffffff",
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 3, color: '#283593' }}>
            Liste des annonces
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                variant="outlined"
                label="Rechercher"
                fullWidth
                // Ajouter ici la fonctionnalité de recherche
              />
            </Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ ml: 2 }}
              // Ajouter ici la fonctionnalité pour le bouton Ajouter
            >
              Ajouter
            </Button>
          </Box>
          <Box sx={{ height: "calc(100vh - 240px)", width: "100%" }}>
            <DataGrid rows={annonces} columns={columns} pageSize={5} />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default AnnoncePage;
