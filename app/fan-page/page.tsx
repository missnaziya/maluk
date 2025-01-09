

// "use client"

// import React, { useState } from "react";
// import { Box, Tabs, Tab, Grid, Card, CardMedia, Typography, CardContent } from "@mui/material";
// import Banner from "@/components/Banner";
// import { SectionTitle } from "@/components";

// const tabData = [
//   // {
//   //   label: "All",
//   //   images: [
//   //     "/home-banner1.jpg",
//   //     "/home-banner1.jpg",
//   //     "/home-banner1.jpg",
//   //     "/home-banner1.jpg",
//   //     "/home-banner1.jpg",
//   //   ],
//   // },
//   {
//     label: "Customer Reviews",
//     images: [
//       "/home-banner1.jpg",
//       "/home-banner1.jpg",
//       "/home-banner1.jpg",
//       "/home-banner1.jpg",

//     ],
//   },
//   {
//     label: "Customer Love",
//     images: [
//       "/home-banner1.jpg",
//       "/home-banner1.jpg",
//       "/home-banner1.jpg",
//       "/home-banner1.jpg",
//     ],
//   },
//   {
//     label: "Before & After",
//     images: [
//       "/home-banner2.jpg",
//       "/home-banner2.jpg",
//       "/home-banner2.jpg",
//     ],
//   },
//   {
//     label: "Add Your Review",
//     images: [
    
//       "/home-banner3.jpg",
//       "/home-banner3.jpg",
//       "/home-banner3.jpg",
//       "/home-banner3.jpg",
//     ],
//   },
// ];

// const FanPage: React.FC = () => {
//   const [currentTab, setCurrentTab] = useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setCurrentTab(newValue);
//   };

//   return (
//     <>
//    {/* <Banner bg="url('/slider image 1.webp')" /> */}
//    <SectionTitle title="Fan Page" path="Home | Fan Page" />
//     <Box sx={{ display: "flex", justifyContent: "center", mt: 4, px: 2 }}>
//       <Card
//         sx={{
//           p: 4,
//           borderRadius: 2,
//           boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
//           maxWidth: "1200px",
//           width: "100%",
//         }}
//       >
//         <CardContent>
//           {/* <Typography
//             variant="h4"
//             align="center"
//             gutterBottom
//             sx={{ fontWeight: "bold", mb: 4, color: "#333" }}
//           >
//             Explore Our Moments
//           </Typography> */}
//           <Tabs
//             value={currentTab}
//             onChange={handleChange}
//             variant="scrollable"
//             scrollButtons="auto"
//             sx={{
//               mb: 3,
//               mx: 3, // Horizontal margin for spacing
//               "& .MuiTabs-flexContainer": {
//                 justifyContent: "center",
//               },
//               "& .MuiTab-root": {
//                 textTransform: "none",
//                 fontWeight: "bold",
//                 px: 3,
//                 py: 1,
//                 borderRadius: "25px",
//                 border: "2px solid #ddd",
//                 color: "#555",
//                 background: "#fff",
//                 transition: "all 0.3s ease",
//                 "&.Mui-selected": {
//                   background: "#b09614",
//                   color: "#fff",
//                   borderColor: "#b09614",
//                 },
//               },
//               "& .MuiTabs-indicator": {
//                 display: "none", // Remove the blue border indicator
//               },
//             }}
//           >
//             {tabData.map((tab, index) => (
//               <Tab key={index} label={tab.label} />
//             ))}
//           </Tabs>

//           <Grid container spacing={3}>
//             {tabData[currentTab].images.map((image, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card
//                   sx={{
//                     borderRadius: 2,
//                     overflow: "hidden",
//                     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                       boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)",
//                     },
//                     transition: "transform 0.4s ease, box-shadow 0.4s ease",
//                   }}
//                 >
//                   <CardMedia component="img" image={image} alt={`Image ${index}`} />
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </CardContent>
//       </Card>
//     </Box>
//     </>

//   );
// };

// export default FanPage;

"use client";

import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { SectionTitle } from "@/components";

interface Review {
  name?: string;
  text: string;
  profileLink?: string;
  image: string;
}

interface TabData {
  label: string;
  reviews: Review[];
}

const tabData: TabData[] = [
  {
    label: "Customer Reviews ❤️",
    reviews: [
      {
        name: "Shilpa",
        text: `Fantastic product! Highly recommended.`,
        profileLink: "https://instagram.com/shilpakhawaj",
        image: "/home-banner1.jpg",
      },
      {
        name: "Arjun",
        text: `Exceeded my expectations. Great value!`,
        profileLink: "https://twitter.com/arjun",
        image: "/home-banner2.jpg",
      },
    ],
  },
  {
    label: "Customer Love ❤️",
    reviews: [
      {
        name: "Sonam",
        text: `Absolutely amazing! Highly recommend to everyone.`,
        profileLink: "https://facebook.com/sonam",
        image: "/home-banner3.jpg",
      },
    ],
  },
  {
    label: "Before & After",
    reviews: [
      {
        text: "Before",
        image: "/before-image.jpg",
      },
      {
        text: "After",
        image: "/after-image.jpg",
      },
    ],
  },
  {
    label: "Add Your Review",
    reviews: [
      {
        name: "Your Name",
        text: "Share your experience!",
        profileLink: "#",
        image: "/home-banner4.jpg",
      },
    ],
  },
];

const FanPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <SectionTitle title="Fan Page" path="Home | Fan Page" />
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
            <Tabs
              value={currentTab}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                mb: 3,
                mx: 3,
                "& .MuiTabs-flexContainer": { justifyContent: "center" },
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
                "& .MuiTabs-indicator": { display: "none" },
              }}
            >
              {tabData.map((tab, index) => (
                <Tab key={index} label={tab.label} />
              ))}
            </Tabs>

            <Grid container spacing={4}>
              {tabData[currentTab].reviews.map((review, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid #ddd",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                      "&:hover": {
                        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                        transform: "translateY(-5px)",
                      },
                      transition: "all 0.3s ease",
                      textAlign: "center",
                    }}
                  >
                    {review.image && (
                      <CardMedia
                        component="img"
                        image={review.image}
                        alt={`Review Image ${index}`}
                        sx={{
                          height: 180,
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <CardContent>
                      {review.name && (
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{
                            fontWeight: "bold",
                            color: "#444",
                            textDecoration: "underline",
                          }}
                        >
                          <a
                            href={review.profileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {review.name}
                          </a>
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          lineHeight: 1.6,
                        }}
                      >
                        {review.text}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        justifyContent: "center",
                        pb: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{
                          backgroundColor: "#b09614",
                          textTransform: "none",
                          "&:hover": {
                            backgroundColor: "#9c7d12",
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </CardActions>
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
