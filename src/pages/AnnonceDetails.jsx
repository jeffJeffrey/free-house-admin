import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const AnnonceDetails = ({ annonces }) => {
  const { id } = useParams();
  const annonce = annonces.find(a => a.idAnnonce === parseInt(id));

  if (!annonce) {
    return <Typography variant="h6">Annonce not found</Typography>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        {annonce.titre}
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {annonce.description}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>
        {annonce.medias.map((media, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper>
              <img src={media.url} alt={media.alt} style={{ width: '100%', borderRadius: '4px' }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box mt={2}>
        <Typography variant="subtitle1" gutterBottom>
          Posted by: {annonce.user.nom}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Contact
        </Button>
      </Box>
    </Box>
  );
};

export default AnnonceDetails;
