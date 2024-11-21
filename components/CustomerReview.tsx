import React from "react";
import { Box, Container, Paper, Typography, Avatar } from "@mui/material";

const reviews = [
  {
    name: "John Doe",
    review: "Amazing product! It exceeded my expectations. Highly recommended!",
    image: "/assets/images/users/user1.jpg", // Replace with the actual path
  },
  {
    name: "Jane Smith",
    review: "Fantastic quality and quick delivery. Will definitely buy again!",
    image: "/assets/images/users/user2.jpg", // Replace with the actual path
  },
  {
    name: "Emily Johnson",
    review: "Absolutely love it! The customer service was outstanding.",
    image: "/assets/images/users/user3.jpg", // Replace with the actual path
  },
  {
    name: "Michael Brown",
    review: "Great value for money. The product works perfectly.",
    image: "/assets/images/users/user4.jpg", // Replace with the actual path
  },
  {
    name: "Sarah Davis",
    review: "Very satisfied with my purchase. Excellent experience overall.",
    image: "/assets/images/users/user5.jpg", // Replace with the actual path
  },
  {
    name: "Chris Wilson",
    review: "Highly recommended. The design is elegant and beautiful.",
    image: "/assets/images/users/user6.jpg", // Replace with the actual path
  },
];

const CustomerReview = () => {
  return (
    <Box component="section" py={5} sx={{ backgroundColor: "#f4f2e4" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: 4, color: "#b09614" }}
        >
          Customer Reviews
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "16px", // Fixed spacing between cards
            paddingBottom: "16px",
          }}
        >
          {reviews.map((review, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                borderRadius:"25px",
                minWidth: "30%",
                maxWidth: "30%",
                padding: "16px",
                flexShrink: 0,
                textAlign: "center",
              }}
            >
              <Avatar
                src={review.image}
                alt={review.name}
                sx={{
                  width: 80,
                  height: 80,
                  margin: "0 auto 16px auto",
                  border: "2px solid #b09614", // Optional border for styling
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
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerReview;
