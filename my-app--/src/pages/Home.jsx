import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Homepage
      </Typography>
      <Typography variant="body1">
        Savor Every Story,Taste Every Bite.
      </Typography>
    </Container>
  );
};

export default Home;
