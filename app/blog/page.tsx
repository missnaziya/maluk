"use client"
import React, { useState } from 'react';
import { Box, Container, Typography, Link, Grid, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Banner from '@/components/Banner';

const BlogContent = () => {
  // Data arrays directly in the component
  const categories = ['Skin Care', 'Personal Care', 'Hair Accessories'];
  const blogPosts = [
    {
      // id: 'skin-care',
      title: 'Skin Care Has No Gender: Everyone Deserves Healthy Skin',
      date: 'October 12, 2024',
      author: 'Malukforever',
      category: 'Skin Care',
      excerpt: 'Skincare isn’t about gender—it’s about caring for your skin. In this glowguide, we explore how everyone, regardless of gender, deserves a healthy, glowing complexion by focusing on essential skin care practices...',
      image: 'blogs/blog-1.jpg',
      id: 'glowguide-post-1',
    },
    {
      // id: 'personal-care',
      title: 'How Seasonal Changes Affect Your Skin and How to Adapt Your Routine',
      date: 'October 10, 2024',
      author: 'Malukforever',
      category: 'Personal Care',
      excerpt: 'Each season brings unique challenges to your skin. This glowguide explains how to adjust your routine to keep your skin looking its best, whether it\'s winter dryness or summer oiliness...',
      image: 'blogs/blog-2.jpg',
      id: 'glowguide-post-2',
    },
    {
      // id: 'hair-accessories',
      title: 'The Link Between Gut Health and Skin: How Your Diet Affects Your Complexion',
      date: 'October 5, 2024',
      author: 'Malukforever',
      category: 'Hair Accessories',
      excerpt: 'Did you know what you eat affects your skin? Discover how probiotics, antioxidants, and healthy fats contribute to a radiant complexion, and how sugar and dairy can impact it...',
      image: 'blogs/blog-3.jpg',
      id: 'glowguide-post-3',
    },
    {
      // id: 'hormonal-changes',
      title: 'The Role of Hormones in Skin Health: How Your Cycle Affects Your Complexion',
      date: 'October 15, 2024',
      author: 'Malukforever',
      category: 'Skin Care',
      excerpt: 'Hormonal fluctuations throughout the month affect your skin’s health and appearance. Learn how to adapt your skincare routine to manage breakouts, dryness, and oiliness...',
      image: 'blogs/blog-4.jpg',
      id: 'glowguide-post-4',
    },
  ];

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter the posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Banner bg="url('/bread-blog.jpg')" />
    
      <Card sx={{ margin: 5, mb: 3, boxShadow: 3 }}>
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
          {/* Category Navigation */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <Link 
                  href="#" 
                  onClick={() => setSelectedCategory('All')}
                  sx={{ fontSize: '1.2rem', color: '#b09614', textDecoration: 'none', '&:hover': { color: '#333' } }}
                >
                  All Categories
                </Link>
              </Grid>
              {categories.map((category) => (
                <Grid item key={category}>
                  <Link 
                    href="#" 
                    onClick={() => setSelectedCategory(category)}
                    sx={{ fontSize: '1.2rem', color: '#b09614', textDecoration: 'none', '&:hover': { color: '#333' } }}
                  >
                    {category}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Blog Posts in Cards */}
          {filteredPosts.map((post) => (
            <Card key={post.id} sx={{ display: 'flex', mb: 3, boxShadow: 3 }}>
              <CardMedia
                component="img"
                sx={{ width: 250, objectFit: 'cover', borderRadius: '8px', margin: 2 }}
                image={post.image}
                alt={post.title}
              />
              <Box sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#b09614', mb: 1 }}>
                    <Link href={`/blog/${post.id}`} sx={{ color: '#b09614', textDecoration: 'none', '&:hover': { color: '#333' } }}>
                      {post.title}
                    </Link>
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#777', mb: 1 }}>
                    <span>Posted on {post.date}</span> | <span>By {post.author}</span> | <span>Category: {post.category}</span>
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6, mb: 1 }}>
                    {post.excerpt}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/blog/${post.id}`} sx={{ fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none', '&:hover': { color: '#333' } }}>
                    Read More
                  </Link>
                </CardActions>
              </Box>
            </Card>
          ))}

          {/* Pagination */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="text" sx={{ mr: 2, fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>&laquo; Previous</Button>
            <Button variant="text" sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>Next &raquo;</Button>
          </Box>
        </Container>
      </Card>
    </>
  );
};

export default BlogContent;
