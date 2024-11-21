"use client"
import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

const BrandSection = () => {
  const features = [
    {
      title: 'Fast Delivery',
      description: 'Lorem ipsum dolor sit amet consectetur Minima.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="60"
          height="60"
          fill="#f37321"
        >
          <path d="M20.44,13.57l-1.19-4A3,3,0,0,0,16.34,8H6.21L5.81,6.44A3,3,0,0,0,2.88,4H1V6H2.88a1,1,0,0,1,.95.68L6.79,17H7a3,3,0,1,0,3,3h4a3,3,0,1,0,3-3h.76a3,3,0,0,0,2.92-3.73ZM7,20a1,1,0,1,1,1-1A1,1,0,0,1,7,20ZM17,20a1,1,0,1,1,1-1A1,1,0,0,1,17,20ZM19.68,14a1,1,0,0,1-.92.68H9.79l-1-3H16.34a1,1,0,0,1,.95.68l1.19,4A1,1,0,0,1,19.68,14Z" />
        </svg>
      )
    },
    {
      title: '100% Organic',
      description: 'Lorem ipsum dolor sit amet consectetur Minima.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="60"
          height="60"
          fill="#4caf50"
        >
          <path d="M21.83,10.1a1,1,0,0,0-.93-.68h-7.6V2a1,1,0,0,0-1.41-1L2.26,10a1,1,0,0,0-.26.65A1,1,0,0,0,3,11h7.3v6a1,1,0,0,0,.66.93,1.05,1.05,0,0,0,.35.07,1,1,0,0,0,.66-.26L21.58,11A1,1,0,0,0,21.83,10.1Z" />
        </svg>
      )
    },
    {
      title: 'No Side Effect',
      description: 'Lorem ipsum dolor sit amet consectetur Minima.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="60"
          height="60"
          fill="#f44336"
        >
          <path d="M13.66,2.92,3.18,13.38a2,2,0,0,0-.58,1.41v4.79a2,2,0,0,0,2,2H9a2,2,0,0,0,1.41-.59L21.08,10.34a2,2,0,0,0,0-2.83L16.49,2.92a2,2,0,0,0-2.83,0ZM5,16.19l8.74-8.73,2.83,2.83L7.83,19H5Zm16.15-7.31L18.32,11.72,15.49,8.9l2.83-2.83,2.83,2.83a1,1,0,0,1,0,1.42Z" />
        </svg>
      )
    }
  ]

  return (
    <Box component='section' sx={{ py: 5, backgroundColor: '#bfae59' }}>
      <Container>
        <Typography
          variant='h4'
          component='h2'
          textAlign='center'
          sx={{ pb: 5, color: 'black' }}
        >
          Why Choose Our Brand
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{ mt: (index + 1) * 5 }} 
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f3edd6',
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 3
                }}
              >
                <Box sx={{ flexShrink: 0, mr: 2 }}>{feature.icon}</Box>
                <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default BrandSection
