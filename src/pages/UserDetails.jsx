import { Avatar, Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = ({ users }) => {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return <Typography variant="h6">Utilisateur non trouvé</Typography>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ width: 60, height: 60, mr: 2 }}>{user.nom[0]}</Avatar>
        <Typography variant="h4" color="primary">
          {user.nom}
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Adresse : {user.adresse}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" color="primary" gutterBottom>
        Annonces
      </Typography>
      <List>
        {user.annonces.map(annonce => (
          <ListItem key={annonce.idAnnonce}>
            <ListItemText primary={annonce.titre} secondary={annonce.description} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserDetails;
