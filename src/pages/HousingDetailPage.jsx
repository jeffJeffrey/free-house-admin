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
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "https://via.placeholder.com/800x400?text=Image+10",
      "https://via.placeholder.com/800x400?text=Image+11",
      "https://via.placeholder.com/800x400?text=Image+12"
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
