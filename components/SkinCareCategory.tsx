import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import Image from "next/image";

const SkinCareCategory: React.FC = () => {
  const products = [
    {
      name: "Sheet Mask",
      image: "/categories/skin-care/Face-sheet.jpg",
      price: "₹ 199.00",
      link: "/shop/skin-care",
    },
    {
      name: "Shower Oil",
      image: "/categories/skin-care/Shower-Oil.jpg",
      price: "₹ 899.00",
      link: "/shop/skin-care",
    },
    {
      name: "Sunscreen",
      image: "/categories/skin-care/Sunscreen.jpg",
      price: "₹ 799.00",
      link: "/shop/skin-care",
    },
    {
      name: "Serum",
      image: "/categories/skin-care/Serum.jpg",
      price: "₹ 1200.00",
      link: "/shop/skin-care",
    },
  ];

  return (
    <Box component="section" sx={{ py: 5 }} className="beauty-care">
      <Container>
        {/* Section Heading */}
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ pb: 5 }}
        >
          Skin Care Products Category
        </Typography>

        {/* Products Grid */}
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: 1,
                  overflow: "hidden",
                  backgroundColor: "background.paper",
                  boxShadow: 3,
                  p: 2,
                }}
                className="skin"
              >
                {/* Product Image and Details */}
                <Link href={product.link}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ pt: 2, color: "text.primary" }}
                    component="h4"
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    sx={{ display: "block", pt: 1, color: "text.secondary" }}
                  >
                    {product.price}
                  </Typography>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkinCareCategory;
