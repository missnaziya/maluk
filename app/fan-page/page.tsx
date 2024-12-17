// import React from "react";
// import { Box, Grid } from "@mui/material";
// import Banner from "@/components/Banner";

// const Glimpese = () => {
//   const images = [
//     "https://via.placeholder.com/300",
//     "https://via.placeholder.com/300",
//     "https://via.placeholder.com/300",
//     "https://via.placeholder.com/300",
//     "https://via.placeholder.com/300",
//     "https://via.placeholder.com/300",
//     "https://via.placeholder.com/300",
//     "https://via.placeholder.com/300",
//     "https://via.placeholder.com/300",
//   ];

//   return (
//     <>
//     {/* <Banner /> */}
//     <Box sx={{ padding: 4 }}>
//       <Grid container spacing={2}>
//         {images.map((src, index) => (
//           <Grid item xs={12} sm={4} key={index}>
//             <Box
//               component="img"
//               src={src}
//               alt={`Gallery image ${index + 1}`}
//               sx={{
//                 margin:"20px",
//                 width: "100%",
//                 height: "220px",
//                 borderRadius: 2,
//                 boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
//                 transition: "transform 0.3s",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                 },
//               }}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//     </>
//   );
// };

// export default Glimpese;

"use client"

import React, { useState } from "react";
import { Box, Tabs, Tab, Grid, Card, CardMedia, Typography, CardContent } from "@mui/material";
import Banner from "@/components/Banner";

const tabData = [
  {
    label: "All",
    images: [
      "/home-banner1.jpg",
      "/home-banner1.jpg",
      "/home-banner1.jpg",
      "/home-banner1.jpg",
      "/home-banner1.jpg",
    ],
  },
  {
    label: "Customer Reviews",
    images: [
      "/home-banner1.jpg",
      "/home-banner1.jpg",
      "/home-banner1.jpg",
      "/home-banner1.jpg",

    ],
  },
  {
    label: "Customer Love",
    images: [
      "/home-banner1.jpg",
      "/home-banner1.jpg",
      "/home-banner1.jpg",
      "/home-banner1.jpg",
    ],
  },
  {
    label: "Before & After",
    images: [
      "/home-banner2.jpg",
      "/home-banner2.jpg",
      "/home-banner2.jpg",
    ],
  },
  {
    label: "Add Your Review",
    images: [
    
      "/home-banner3.jpg",
      "/home-banner3.jpg",
      "/home-banner3.jpg",
      "/home-banner3.jpg",
    ],
  },
];

const FanPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
   <Banner bg="url('/slider image 1.webp')" />
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4, px: 2 }}>
      <Card
        sx={{
          p: 4,
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 4, color: "#333" }}
          >
            Explore Our Moments
          </Typography>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              mb: 3,
              mx: 3, // Horizontal margin for spacing
              "& .MuiTabs-flexContainer": {
                justifyContent: "center",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: "bold",
                px: 3,
                py: 1,
                borderRadius: "25px",
                border: "2px solid #ddd",
                color: "#555",
                background: "#fff",
                transition: "all 0.3s ease",
                "&.Mui-selected": {
                  background: "#b09614",
                  color: "#fff",
                  borderColor: "#b09614",
                },
              },
              "& .MuiTabs-indicator": {
                display: "none", // Remove the blue border indicator
              },
            }}
          >
            {tabData.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>

          <Grid container spacing={3}>
            {tabData[currentTab].images.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)",
                    },
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  }}
                >
                  <CardMedia component="img" image={image} alt={`Image ${index}`} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
    </>

  );
};

export default FanPage;





