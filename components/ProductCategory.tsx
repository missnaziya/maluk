import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const HotCategories: React.FC = () => {

  const categories = [
    {
      title: 'Skin Care',
      description:
        'Achieve radiant, healthy skin with our expertly crafted skincare essentials. Designed to nourish, hydrate, and protect, each product supports your skin\'s natural beauty, helping you glow with confidence.',
      image: 'category1.jpg',
      link: 'single-product.html',
    },
    {
      title: 'Personal Care',
      description:
        'Elevate your daily routine with our personal care essentials, keep you feeling fresh and confident. From soothing body washes to nourishing lotions, each product offers quality ingredients that work gently to cleanse, moisturize, and protect.',
      image: 'category2.jpg',
      link: 'single-product.html',
    },
    {
      title: 'Hair Accessories',
      description:
        'Uplift your style with our curated collection of hair accessories. Designed to add a touch of elegance or a pop of color, these accessories offer versatility for every look and occasion.',
      image: 'category3.webp',
      link: 'single-product.html',
    },
  ];

  return (
    <Box sx={{ padding: 5, backgroundColor: '#f9f9f9' }}>
      <Container>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4, color: '#b09614' }}>
  Hot <span>Categories</span> on Today
</Typography>

        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 4 }}>
          The passionate team behind Maluk Forever brings together expertise in skincare, innovation, and customer care. Driven by a shared commitment to quality and sustainability, we work tirelessly to create products that truly make a difference. Every member of our team is dedicated to empowering you on your skincare journey, ensuring that Maluk Forever is a brand you can trust.
        </Typography>

        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: 25, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  alt={category.title}
                  image={category.image}
                  sx={{

                    height: 200, // Fixed height for the image
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom sx={{textAlign:"center" , color:"#b09614"}}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {category.description}
                  </Typography>
                </CardContent>
                <Box sx={{ padding: 2, textAlign: 'center' , marginBottom:5 }}>
                  <Button
                    href={category.link}
                    variant="contained"
                    sx={{
                      backgroundColor: '#b09614',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#e56200',
                      },
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HotCategories;
