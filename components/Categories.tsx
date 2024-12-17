import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import Image from "next/image";

const Categories: React.FC = () => {
  const categories = [
    {
      title: "Skin Care",
      image: "/categories/Skin-Care.jpg",
      alt: "Skin Care",
      link: "/shop/skin-care",
    },
    {
      title: "Personal Care",
      image: "/categories/Personal-Care.jpg",
      alt: "Personal Care",
      link: "/shop/personal-care",
    },
    {
      title: "Hair Accessories",
      image: "/categories/Hair-Accessories.jpg",
      alt: "Hair Accessories",
      link: "/shop/hair-accessories",
    },
  ];

  return (
    <Box component="section" sx={{ py: 5 }} className="shop">
      <Container>
        {/* Section Heading */}
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ pb: 5 }}
        >
          Explore Our Product Categories
        </Typography>

        {/* Categories Grid */}
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: 1,
                  overflow: "hidden",
                  backgroundColor: "background.paper",
                  boxShadow: 3,
                  p: 2,
                }}
                className="category-card"
              >
                {/* Category Image */}
                <Link href={category.link}>
                  <Image
                    src={category.image}
                    alt={category.alt}
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
                {/* Category Title */}
                <Typography
                  variant="h6"
                  sx={{ pt: 2, color: "text.primary" }}
                  component="h4"
                >
                  {category.title}
                </Typography>
                {/* Shop Link */}
                <Typography
                  component="span"
                  sx={{ display: "block", pt: 1, color: "primary.main" }}
                >
                  <Link
                    href={category.link}
                    sx={{
                      textDecoration: "none",
                      color: "primary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Shop
                  </Link>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
