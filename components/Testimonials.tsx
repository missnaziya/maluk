'use client'

import { useState, useEffect } from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import Slider from 'react-slick';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

// Testimonial Data
const testimonials = [
  {
    imgSrc: "/categories/skin-care/Shower-Oil.jpg",
    name: "Shower Oil",
    text: "shower oil ka feel is just next level! Smooth and soft skin ho jati hai, aur fragrance bhi acchi hai.",
    au: "Rahul Verma"
   
  },
  {
    imgSrc: "/categories/skin-care/sheetmask/Collagen.png",
    name: "Sheet mask",
    text: "Sheet mask ka packaging bhi accha hai and travel-friendly. Skin bilkul calm and clear lagti hai after use",
    au: "Kiran Yadav"
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows for custom ones
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next);
    },
  };

  return (
    <Box sx={{ py: 3, textAlign: 'center' }}>

      <Typography variant="h4" sx={{ color: 'text.primary' , margin:5}}>
        Our Testimonial
      </Typography>
      <Box sx={{  position: 'relative' }}>
        {/* Testimonial Slider using Slick */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* Testimonial Card */}
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: '#f4f2e4',
                  color: '#333',
                  textAlign: 'center',
                  p: 4,
                  boxShadow: 3,
                  height: 300,
                  mx: { xs: 2, sm: 10,md:20 },
                //   width: 350,
                  borderRadius: 3,
                  position: 'relative',
                  zIndex: 1,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 6,
                    cursor: 'pointer',
                  },
                }}
              >
                <img
                  src={testimonial.imgSrc}
                  alt="Testimonial"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '15px',
                    border: '3px solid #fff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {testimonial.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: '#666',
                    fontStyle: 'italic',
                    background: '#ffffffc0', // Adding background to text block
                    padding: '10px',
                    borderRadius: '8px',
                  }}
                >
                  {testimonial.text}
                </Typography>
                <Typography style={{ color: '#b09614', fontWeight: 'bold' }}>
  {testimonial.au}
</Typography>

              </Paper>
            </Box>
          ))}
        </Slider>

        {/* Custom Navigation Arrows */}
        <Box sx={{ position: 'absolute', top: '50%', left: '0', right: '0', display: 'flex', justifyContent: 'space-between', zIndex: 100 }}>
          <IconButton
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            sx={{ color: '#333', ml: 2 }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            sx={{ color: '#333', mr: 2 }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
