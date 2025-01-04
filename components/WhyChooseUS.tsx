import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircleIcon color="primary" fontSize="large" />,
      title: 'Affordable Prices',
      description: 'We believe that high-quality skincare products should be accessible to everyone without breaking the bank.',
    },
    {
      icon: <CheckCircleIcon color="primary" fontSize="large" />,
      title: 'Natural Ingredients',
      description: 'Our products are formulated with carefully selected natural ingredients that are safe and effective.',
    },
    {
      icon: <CheckCircleIcon color="primary" fontSize="large" />,
      title: 'Cruelty-Free',
      description: 'We are committed to ethical practices and ensure our products are cruelty-free.',
    },
    {
      icon: <CheckCircleIcon color="primary" fontSize="large" />,
      title: 'Customer Satisfaction',
      description: 'Customer happiness is our priority, and we go the extra mile to exceed their expectations.',
    },
  ];

  return (
    <Box py={5} bgcolor="#f9f9f9">
      <Container>
        <Typography variant="h4" textAlign="center" mb={4}>
          Why Choose Our Brand
        </Typography>
        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 2,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 18px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {reason.icon}
                <Typography variant="h6" mt={2} mb={1}>
                  {reason.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {reason.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
