import React from "react";
import { Box, Card, Container, Grid, Typography } from "@mui/material";

const TrendingProduct: React.FC = () => {
  return (
        <Card>
    <Box component="section" sx={{ py: 5 }} className="TrendingProduct">

      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Video */}
          <Grid item xs={12} md={4}>
            <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
              <video
                width="100%"
                height="auto"
                loop
                autoPlay
                muted
                style={{ borderRadius: "8px" }}
              >
                <source src="/videos/video_1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>

          {/* Right Side: Content */}
          <Grid item xs={12} md={8}>
            <Box sx={{ px: { xs: 2, md: 4 }, pt: { xs: 2, md: 0 } }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#b09614",
                  fontWeight: 700,
                  mb: 2,
                  animation: "fadeIn 1s ease-in-out",
                }}
                className="animate-text"
              >
                Our Trending Product
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  animation: "fadeIn 1s ease-in-out",
                }}
                className="animate-text"
              >
                At <strong>Maluk Forever</strong>, we believe in the timeless beauty of nature. Our
                journey began with a simple mission: to create skincare that’s pure, effective, and
                kind to your skin. Rooted in tradition and powered by nature’s finest ingredients,
                we craft products that nurture and enhance your natural beauty—forever.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
   
    </Box>
      </Card>
  );
};

export default TrendingProduct;
