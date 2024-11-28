import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  Button,
  Pagination,
} from "@mui/material";

const BlogContent: React.FC = () => {
  return (
    <>
      <div className="h-[250px] border-b pt-16 border-white bg-gradient-to-r from-[#b49b20] to-white mb-2 max-sm:h-[300px] max-sm:pt-16 bg-[url('/path-to-image.jpg')] bg-cover bg-center">
        <h1 className="section-title-title text-5xl text-center mb-7 max-md:text-5xl max-sm:text-3xl text-black max-sm:mb-2">
          {/* {title} */}
        </h1>
        <p className="section-title-path text-xl text-center max-sm:text-xl text-white">
          {/* {path} */}
        </p>
      </div>

      <Box
        sx={{
          maxWidth: "1000px",
          margin: "40px auto",
          padding: "40px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Category Navigation */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
            {["Skin Care", "Personal Care", "Hair Accessories"].map(
              (category) => (
                <Box
                  component="li"
                  sx={{ display: "inline-block", mx: 2 }}
                  key={category}
                >
                  <Link
                    href={`#${category.toLowerCase().replace(" ", "-")}`}
                    sx={{
                      fontSize: "1.2rem",
                      textDecoration: "none",
                      color: "#b09614",
                      "&:hover": { color: "#333", textDecoration: "underline" },
                    }}
                  >
                    {category}
                  </Link>
                </Box>
              )
            )}
          </Box>
        </Box>

        {/* Blog Posts */}
        <Grid container spacing={4}>
          {[
            {
              id: "skin-care",
              title: "Skin Care Has No Gender: Everyone Deserves Healthy Skin",
              meta: "Posted on October 12, 2024 | By Malukforever | Category: Skin Care",
              excerpt:
                "Skincare isn’t about gender—it’s about caring for your skin. In this blog, we explore how everyone, regardless of gender, deserves a healthy, glowing complexion by focusing on essential skin care practices...",
              image: "assets/images/blog/blog1.jpg",
              link: "blog-post-1.html",
            },
            {
              id: "personal-care",
              title:
                "How Seasonal Changes Affect Your Skin and How to Adapt Your Routine",
              meta: "Posted on October 10, 2024 | By Malukforever | Category: Personal Care",
              excerpt:
                "Each season brings unique challenges to your skin. This blog explains how to adjust your routine to keep your skin looking its best, whether it's winter dryness or summer oiliness...",
              image: "assets/images/blog/blog2.jpg",
              link: "blog-post-2.html",
            },
            {
              id: "hair-accessories",
              title:
                "The Link Between Gut Health and Skin: How Your Diet Affects Your Complexion",
              meta: "Posted on October 5, 2024 | By Malukforever | Category: Hair Accessories",
              excerpt:
                "Did you know what you eat affects your skin? Discover how probiotics, antioxidants, and healthy fats contribute to a radiant complexion, and how sugar and dairy can impact it...",
              image: "assets/images/blog/blog3.jpg",
              link: "blog-post-3.html",
            },
          ].map((post) => (
            <Grid item xs={12} md={12} key={post.id}>
              <Card
                id={post.id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "20px",
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                <CardMedia
                  component="img"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    width: { xs: "100%", md: "250px" },
                    height: "auto",
                    borderRadius: "8px",
                    marginRight: { md: "20px" },
                    marginBottom: { xs: "15px", md: 0 },
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#b09614",
                      "&:hover a": { color: "#333" },
                    }}
                  >
                    <Link
                      href={post.link}
                      sx={{
                        color: "#b09614",
                        textDecoration: "none",
                        "&:hover": {
                          color: "#333",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {post.title}
                    </Link>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: "10px" }}
                  >
                    {post.meta}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.6,
                      color: "#333",
                      marginBottom: "15px",
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                  <Button
                    href={post.link}
                    variant="contained"
                    color="secondary"
                    sx={{
                      fontWeight: "bold",
                      textTransform: "none",
                      backgroundColor: "#b09614",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box
          sx={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <Pagination count={10} color="primary" />
        </Box>
      </Box>
    </>
  );
};

export default BlogContent;
