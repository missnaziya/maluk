// components/AboutUs.tsx
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <Box py={5} bgcolor="background.default" color="text.primary">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="body1">
              At <strong className=' text-yellow-600'>MalukForever</strong>, we believe skincare should be simple, effective, and accessible to
              everyone. Our mission is to provide skin-friendly products that not only nourish your skin but are also
              budget-conscious. We blend the power of nature with the precision of science to create formulations that
              are safe, effective, and affordable—because great skincare should not come with a high price tag.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              With a focus on innovation and excellence, we offer an extensive range of products across three core
              categories:
            </Typography>
            <ul>
              <li>
                <strong className=' text-yellow-600'>Skin Care:</strong> Nourish and rejuvenate your skin with our carefully crafted products,
                including sheet masks, bath oils, sunscreens, and serums.
              </li>
              <li>
                <strong className=' text-yellow-600'>Personal Care:</strong> Elevate your daily routine with our range of personal care essentials,
                designed to deliver exceptional results.
              </li>
              <li>
                <strong className=' text-yellow-600'>Hair Accessories:</strong> Add a touch of style and functionality with our high-quality hair
                accessories, perfect for any occasion.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/aboutus.png"
              alt="MalukForever - Enhance Your Beauty"
              width={400}
              height={300}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              At MalukForever, we are dedicated to combining beauty with care, ensuring each product meets the highest
              standards of quality, safety, and efficacy. Discover the difference and let us help you shine, inside and
              out.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
