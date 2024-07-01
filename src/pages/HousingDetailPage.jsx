import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HouseIcon from '@mui/icons-material/House';
import { Avatar, Box, Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Simulated data source with image URLs
const mockLogements = [
  { 
    id: 1, 
    nom: "Logement 1", 
    description: "Description du Logement 1", 
    localisation: "Localisation 1", 
    typeLogement: "Type 1", 
    images: [
      "https://via.placeholder.com/800x400?text=Image+1",
      "https://via.placeholder.com/800x400?text=Image+2",
      "https://via.placeholder.com/800x400?text=Image+3",
      "https://via.placeholder.com/800x400?text=Image+4",
      "https://via.placeholder.com/800x400?text=Image+5",
      "https://via.placeholder.com/800x400?text=Image+6"
    ], 
  },
  { 
    id: 2, 
    nom: "Logement 2", 
    description: "Description du Logement 2", 
    localisation: "Localisation 2", 
    typeLogement: "Type 2", 
    images: [
      "https://via.placeholder.com/800x400?text=Image+7",
      "https://via.placeholder.com/800x400?text=Image+8",
      "https://via.placeholder.com/800x400?text=Image+9",
      "https://via.placeholder.com/800x400?text=Image+10",
      "https://via.placeholder.com/800x400?text=Image+11",
      "https://via.placeholder.com/800x400?text=Image+12"
    ], 
  },
];

const HousingDetailPage = () => {
  const { id } = useParams();
  const [housingDetails, setHousingDetails] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulating data fetching
    const logement = mockLogements.find(l => l.id === parseInt(id));
    setHousingDetails(logement);
  }, [id]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? housingDetails.images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === housingDetails.images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!housingDetails) {
    return <Typography variant="h6">Logement non trouvé</Typography>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        p: 4,
      }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ mt: 2, mb: 4 }}>
        Détails du Logement
      </Typography>

      {/* Content */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
              background: 'linear-gradient(to right, #6a11cb, #2575fc)', // Fond dégradé bleu
              color: '#ffffff', // Texte en blanc pour contraste
            }}
          >
            <Avatar sx={{ bgcolor: '#3f51b5', mb: 2 }}>
              <HouseIcon />
            </Avatar>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {housingDetails.nom}
            </Typography>
            <Typography variant="body1">
              {housingDetails.description}
            </Typography>
            <Typography variant="body1">
              Localisation : {housingDetails.localisation}
            </Typography>
            <Typography variant="body1">
              Type : {housingDetails.typeLogement}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Images du logement
            </Typography>
            <Box sx={{ position: 'relative', width: '100%', height: 400 }}>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }}
                onClick={handlePrev}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <Box
                component="img"
                src={housingDetails.images[currentIndex]}
                alt={`Logement ${currentIndex + 1}`}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }}
                onClick={handleNext}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HousingDetailPage;
