import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allLogements, validateLogement, rejectLogement } from "../api";

const ValidationLogementPage = () => {
  const [logements, setLogements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Appel à la fonction allLogements pour récupérer les données depuis la base de données
    allLogements()
      .then((logementsAvecStatut) => {
        setLogements(
          logementsAvecStatut.filter((logement) => !logement.adminValid)
        );
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des logements:", error);
        // Gestion des erreurs si nécessaire
      });
  }, []);

  const handleValidate = async (id) => {
   validateLogement(id).then((data) => {
    console.log(data);
    window.location.href="/validation/logement";

   })
  };

  const handleReject = (id) => {
    rejectLogement(id).then((data) => {
      console.log(data);
      window.location.href="/validation/logement";
    });
  };

  const handleViewLogement =  (id) => {
    navigate(`/logementDetails/${id}`);
  };

  const columns = [
    { field: "titre", headerName: "Titre", width: 200 },
    { field: "localisation", headerName: "Localisation", width: 300 },
    {
      field: "actions",
      headerName: "Actions",
      width: 450,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
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
    <Grid
      container
      sx={{ minHeight: "100vh", backgroundColor: "#ffffff" }}
      spacing={3}
    >
      <Grid item xs={12}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 3, color: "#283593" }}>
            Validation des Logements
          </Typography>
          <Box sx={{ height: "calc(100vh - 200px)", width: "100%" }}>
            <DataGrid rows={logements} columns={columns} pageSize={5} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ValidationLogementPage;
