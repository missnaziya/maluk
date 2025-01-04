import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import Image from 'next/image';

const AchievementCard = ({ icon, label, count }: { icon: string; label: string; count: number }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCount < count) setCurrentCount(currentCount + 1);
    }, 50);
    return () => clearInterval(interval);
  }, [currentCount, count]);

  return (
    <Paper
      elevation={2}
      sx={{
        p: 4,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2, // Margin below the icon
        }}
      >
        <Image src={icon} alt={label} width={60} height={60} />
      </Box>
      <Typography variant="h4" color="primary" className="text-yellow-600">
        {currentCount}+
      </Typography>
      <Typography variant="body1">{label}</Typography>
    </Paper>
  );
};

const Achievements = () => {
  return (
    <Box
      py={5}
      bgcolor="background.default"
      color="text.primary"
      sx={{
        backgroundImage: "url('/welcome2.jpg')",
        backgroundSize: 'contain', // Ensures the entire image is visible
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Our Legacy of Excellence
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={3}>
            <AchievementCard icon="/icons/costumer.png" label="Happy Customers" count={500} />
          </Grid>
          <Grid item xs={12} md={3}>
            <AchievementCard icon="/icons/star-achievement.png" label="Recognised Excellence" count={100} />
          </Grid>
          <Grid item xs={12} md={3}>
            <AchievementCard icon="/icons/employees.png" label="Qualified Employees" count={30} />
          </Grid>
          <Grid item xs={12} md={3}>
            <AchievementCard icon="/icons/graduate.png" label="Months of Experience" count={24} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;
