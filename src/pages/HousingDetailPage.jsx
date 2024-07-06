import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BuildIcon from '@mui/icons-material/Build';
import { Avatar, Box, Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { retrieveService, retrieveServiceMedias } from '../api';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [medias, setMedias] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const service = await retrieveService(id);
        setServiceDetails(service);
        const mediaList = await retrieveServiceMedias(id);
        setMedias(mediaList);
      } catch (error) {
        console.error('Error fetching service details or medias:', error);
      }
    };

    fetchServiceDetails();
  }, [id]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? medias.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === medias.length - 1 ? 0 : prevIndex + 1));
  };

  if (!serviceDetails) {
    return <Typography variant="h6">Service non trouvé</Typography>;
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
        Détails du Service
      </Typography>

      {/* Content */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
              background: 'linear-gradient(to right, #6a11cb, #2575fc)',
              color: '#ffffff',
            }}
          >
            <Avatar sx={{ bgcolor: '#3f51b5', mb: 2 }}>
              <BuildIcon />
            </Avatar>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {serviceDetails.titre}
            </Typography>
            <Box>
              {[
                { label: 'Description', value: serviceDetails.description },
                { label: 'Publié par', value: serviceDetails.user?.nom },
                { label: 'Date de publication', value: new Date(serviceDetails.date).toLocaleDateString() },
              ].map((detail, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                    borderBottom: '1px solid #ffffff',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {detail.label}:
                  </Typography>
                  <Typography variant="body1">
                    {detail.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Médias du service
            </Typography>
            {medias.length > 0 && (
              <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
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
                    src={medias[currentIndex]?.lien}
                    alt={`Média ${currentIndex + 1}`}
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
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceDetailPage;
