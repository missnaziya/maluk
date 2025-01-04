"use client"
import React from "react";
import { Box, Container, Paper, Typography, Avatar } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "John Doe",
    review: "Amazing product! It exceeded my expectations. Highly recommended!",
    image: "/assets/images/users/user1.jpg",
  },
  {
    name: "Jane Smith",
    review: "Fantastic quality and quick delivery. Will definitely buy again!",
    image: "/assets/images/users/user2.jpg",
  },
  {
    name: "Emily Johnson",
    review: "Absolutely love it! The customer service was outstanding.",
    image: "/assets/images/users/user3.jpg",
  },
  {
    name: "Michael Brown",
    review: "Great value for money. The product works perfectly.",
    image: "/assets/images/users/user4.jpg",
  },
  {
    name: "Sarah Davis",
    review: "Very satisfied with my purchase. Excellent experience overall.",
    image: "/assets/images/users/user5.jpg",
  },
  {
    name: "Chris Wilson",
    review: "Highly recommended. The design is elegant and beautiful.",
    image: "/assets/images/users/user6.jpg",
  },
];

const CustomerReview = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 2000, // Auto-scroll speed (3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box component="section" py={5} sx={{ backgroundColor: "#f4f2e4" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: 4, color: "#b09614" }}
        >
          Customer Reviews
        </Typography>
        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <Box key={index} px={2}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: "25px",
                  padding: "16px",
                  textAlign: "center",
                  margin:"10px"
                }}
              >
                <Avatar
                  src={review.image}
                  alt={review.name}
                  sx={{
                    width: 80,
                    height: 80,
                    margin: "0 auto 16px auto",
                    border: "2px solid #b09614",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: "8px" }}
                >
                  {review.name}
                </Typography>
                <Typography variant="body2">{review.review}</Typography>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default CustomerReview;
