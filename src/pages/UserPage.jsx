import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { allUsers } from "../api";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [], // Liste des utilisateurs à partir de l'API
    };
  }

  componentDidMount() {
    allUsers().then((users) => {
      this.setState({ users });
    })
  }

  handleViewProfile = (id) => {
    this.props.navigate(`/userDetails/${id}`);
  };

  handleDeleteUser = (id) => {
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
        width: 290,
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
      <Grid container sx={{ minHeight: "100vh", backgroundColor: "#ffffff" }} spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, color: "#283593" }}>
              Liste des utilisateurs
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
              <DataGrid rows={users} columns={columns} pageSize={5} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

const UserPageWithNavigate = (props) => {
  const navigate = useNavigate();
  return <UserPage {...props} navigate={navigate} />;
};

export default UserPageWithNavigate;
