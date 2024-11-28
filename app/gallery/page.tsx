import React from "react";
import { Box, Grid } from "@mui/material";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        {images.map((src, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              component="img"
              src={src}
              alt={`Gallery image ${index + 1}`}
              sx={{
                margin:"20px",
                width: "100%",
                height: "220px",
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
