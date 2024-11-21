import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const OurStory = () => {
  return (
    <Box component="section" className="story" py={5} sx={{ background:"#aaa25596"}}>
      <Container>
        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={6} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >
                <Image

                  src="/category/hyaluronic-facemask.png"
                  alt="Product 1"
                  width={250}
                  height={250}
                  style={{ objectFit: "cover",  borderRadius:25}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Image
                  src="/category/snailmucin-facemask.png"
                  alt="Product 2"
                  width={250}
                  height={270}
                  style={{ objectFit: "cover",  borderRadius:25 }}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6} display="flex" alignItems="center">
            <Box>
              <Typography variant="h3" gutterBottom>
                Our Story
              </Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                libero voluptatem ullam quos facilis?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#b09614 !important",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#a38412",
                  },
                }}
              >
                Discover Our Journey
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurStory;
