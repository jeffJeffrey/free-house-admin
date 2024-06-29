// UserPage.jsx
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { Component } from "react";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [], // Liste des utilisateurs à partir de l'API
    };
  }

  componentDidMount() {
    // Remplacez par un appel API réel pour récupérer les utilisateurs
    this.setState({
      users: [
        { id: 1, nom: "Utilisateur 1", adresse: "Adresse 1" },
        { id: 2, nom: "Utilisateur 2", adresse: "Adresse 2" },
        // Ajoutez d'autres utilisateurs ici
      ],
    });
  }

  handleViewProfile = (id) => {
    // Gérer l'affichage du profil utilisateur
    console.log("Voir profil de l'utilisateur avec ID:", id);
  };

  handleDeleteUser = (id) => {
    // Gérer la suppression de l'utilisateur
    console.log("Supprimer l'utilisateur avec ID:", id);
  };

  render() {
    const { users } = this.state;

    const columns = [
      { field: "nom", headerName: "Nom", width: 200 },
      { field: "adresse", headerName: "Adresse", width: 400 },
      {
        field: "actions",
        headerName: "Actions",
        width: 290, // Ajustement de la largeur pour inclure les boutons
        renderCell: (params) => (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              startIcon={<VisibilityIcon />}
              onClick={() => this.handleViewProfile(params.id)}
            >
              Voir plus
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => this.handleDeleteUser(params.id)}
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
            Liste des utilisateurs
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
            <DataGrid rows={users} columns={columns} pageSize={5} />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default UserPage;
