import { Box, Container, Grid, Typography, Divider } from '@mui/material';

const VisionMission = () => {
  return (
    <Box py={5}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img
              src="Vision.jpg"
              alt="Vision"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              <strong className='text-yellow-600'>Our Vision</strong>
            </Typography>
            <Typography variant="body1">
              To make skincare effortless, affordable, and accessible for all, by combining the best of nature and
              science for healthier, happier skin.
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" gutterBottom>
              <strong className='text-yellow-600'>Our Mission</strong>
            </Typography>
            <Typography variant="body1">
              To deliver high-quality, budget-friendly skincare solutions that cater to every skin type, using
              carefully selected ingredients that are both effective and sustainable.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VisionMission;
