"use client"; // Ensure this directive is present for Client-Side functionality

import React from "react";
import { Box, Container, Typography, TextField, Button, Icon } from "@mui/material";
import "./style.css"
import { keyframes } from "@mui/system";

// Keyframes for single car animation
const singleCarAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;


const TrackOrder = () => {
  const imageURL =
    "https://via.placeholder.com/150x55.png?text=Your+Image"; 
  return (
    <Box component="section" sx={{ pt: 5 }}>
   <Box sx={{ backgroundColor: "#f1f1f1", overflow: "hidden", width: "100%" }}>
      {/* Estimated Delivery Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 3,
          backgroundColor: "#fff",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h6" gutterBottom>
            Estimated Delivery Date
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#b59c23",
              fontWeight: "bold",
            }}
          >
            To be updated post pick up
          </Typography>
        </Box>
      </Box>

      {/* Single Car Animation Section */}
      <Box
        sx={{
          position: "relative",
          height: 55,
          overflow: "hidden",
          background: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Animated Car */}
        <Box
          sx={{
            fontSize: "2rem",
            position: "absolute",
            animation: `${singleCarAnimation} 5s linear infinite`,
          }}
        >
          🚙
        </Box>
      </Box>
    </Box>



      <Container maxWidth="sm">
        <Box
          sx={{
            background: "#ffffff",
            borderRadius: 2,
            padding: 3,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
            marginBottom: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#b09614", display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}
          >
            <Icon className="bi bi-box-seam" sx={{ fontSize: 30, mr: 1 }} />
            Track status of your shipment.
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            action="/track_order.php"
            method="post"
          >
            <TextField
              fullWidth
              label="Enter tracking number"
              name="tracking_number"
              required
              sx={{ mb: 2, maxWidth: 400 }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#b09614 !important" ,
                color: "white",
                padding: "10px 20px",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              Track Order
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TrackOrder;