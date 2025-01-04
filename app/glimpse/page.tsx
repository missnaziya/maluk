"use client";

import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Banner from "@/components/Banner";

const tabData = [
  {
    label: "All",
    images: [
      "/gallery/bday1.jpg",
      "/gallery/bday2.jpg",
      "/gallery/bday3.jpg",
      "/gallery/bday4.jpg",
      "/gallery/snap1.jpg",
      "/gallery/snap3.jpg",
      "/gallery/snap4.jpg",
      "/gallery/gallery1.jpg",
      "/gallery/gallery2.jpg",
      "/gallery/gallery3.jpg",
      "/gallery/gallery4.jpg",
    ],
  },
  {
    label: "Birthday Celebration",
    images: [
      "/gallery/bday1.jpg",
      "/gallery/bday2.jpg",
      "/gallery/bday3.jpg",
      "/gallery/bday4.jpg",
    ],
  },
  {
    label: "Maluk Event",
    images: [
      "/gallery/gallery1.jpg",
      "/gallery/gallery2.jpg",
      "/gallery/gallery3.jpg",

      "/gallery/gallery4.jpg",
    ],
  },
  {
    label: "Office Snap",
    images: [
      "/gallery/snap1.jpg",
      "/gallery/snap3.jpg",
      "/gallery/snap4.jpg",
    ],
  },
  {
    label: "Festival Celebration",
    images: [
      "/home-banner3.jpg",
      "/home-banner3.jpg",
      "/home-banner3.jpg",
      "/home-banner3.jpg",
    ],
  },
];

const Glimpses: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <Banner bg="url('/bread-gallery.jpg')" />
      <Box sx={{ display: "flex", justifyContent: "center", px: 2, mb: 2 }}>
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
            <Tabs
              value={currentTab}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                mb: 3,
                mx: 3,
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
                  display: "none",
                },
              }}
            >
              {tabData.map((tab, index) => (
                <Tab key={index} label={tab.label} />
              ))}
            </Tabs>

            <Grid container spacing={3}>
              {tabData[currentTab].images.map((image, index) => (
                <Grid
                  item
                  xs={12} // Full width on extra small screens
                  sm={6} // Two images per row on small screens
                  md={3} // Four images per row on medium screens and above
                  key={index}
                >
                  <Card
                    sx={{
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)",
                      },
                      transition:
                        "transform 0.4s ease, box-shadow 0.4s ease",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`Image ${index}`}
                      sx={{
                        height: 300,
                        objectFit: "contain", // Ensure the image is fully visible
                      }}
                    />
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

export default Glimpses;
