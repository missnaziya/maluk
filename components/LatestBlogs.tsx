// components/LatestBlogs.tsx
'use client';

import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Link } from '@mui/material';

const blogs = [
  {
    imgSrc: '/blogs/blog-1.jpg',
    title: 'Skin Care Has No Gender',
    excerpt: 'Skin Care Has No Gender: Everyone Deserves Healthy Skin...',
    link: '/blog/glowguide-post-1',
  },
  {
    imgSrc: '/blogs/blog-2.jpg',
    title: 'How Seasonal Changes Affect',
    excerpt: 'How Seasonal Changes Affect Your Skin and How to Adapt Your Routine...',
    link: '/blog/glowguide-post-2',
  },
  {
    imgSrc: '/blogs/blog-3.jpg',
    title: 'The Link Between Gut Health',
    excerpt: 'The Link Between Gut Health and Skin: How Your Diet Affects Your Complexion...',
    link: '/blog/glowguide-post-3',
  },
  // Add more blog objects as needed
];

const LatestBlogs = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ pb: 4 }}>
          Our Latest Blogs
        </Typography>
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  image={blog.imgSrc}
                  alt={blog.title}
                  sx={{ height: 200, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {blog.excerpt}
                  </Typography>
                  <Link href={blog.link} variant="body2" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                    Read More
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LatestBlogs;
