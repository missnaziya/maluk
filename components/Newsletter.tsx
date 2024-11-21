import React from 'react';
import { Box, Container, Grid, TextField, Button, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Newsletter = () => {
  return (
    <Box component="section" sx={{ py: 5, backgroundColor: '#f4f2e4' }}>
      <Container>
        <Grid container alignItems="center" spacing={3}>
          {/* Left Section */}
          <Grid item xs={12} md={7}>
            <Box px={5}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  pb: 2,
                  color: '#b09614',
                  fontWeight: 600,
                  fontFamily: 'Cursive',
                }}
              >
                Subscribe to Our Exclusive Newsletter
              </Typography>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems={{ xs: 'stretch', md: 'center' }}
                gap={2}
                mb={2}
              >
                <TextField
                  type="email"
                  placeholder="Enter your email address"
                  fullWidth
                  required
                  sx={{ flex: 1 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
              <Box pt={3}>
                <Box display="flex" alignItems="center" mb={1}>
                  <CheckIcon sx={{ color: '#4caf50', mr: 1 }} />
                  <Typography variant="body1">
                    Discover cutting-edge beauty trends and exclusive tips!
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: '#4caf50', mr: 1 }} />
                  <Typography variant="body1">
                    Gain early access to our newest innovations and deals.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={5}>
            <Box px={2}>
              <img
                src="assets/images/banner/news.png"
                alt="Newsletter Banner"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Newsletter;
