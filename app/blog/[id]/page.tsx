// // pages/blog/[id].tsx
// "use client"
// // pages/blog/[id].tsx

// import { usePathname } from 'next/navigation'; // Import usePathname hook from next/navigation
// import React, { useEffect, useState } from 'react';

// // Define the structure of a blog post
// interface BlogPost {
//   title: string;
//   date: string;
//   author: string;
//   category: string;
//   excerpt: string;
//   image: string;
//   id: string;
// }

// // Static blog posts data
// const blogPosts: BlogPost[] = [
//     {
//       // id: 'skin-care',
//       title: 'Skin Care Has No Gender: Everyone Deserves Healthy Skin',
//       date: 'October 12, 2024',
//       author: 'Malukforever',
//       category: 'Skin Care',
//       excerpt: 'Skincare isn’t about gender—it’s about caring for your skin. In this glowguide, we explore how everyone, regardless of gender, deserves a healthy, glowing complexion by focusing on essential skin care practices...',
//       image: 'img/engineer.png',
//       id: 'glowguide-post-1',
//     },
//     {
//       // id: 'personal-care',
//       title: 'How Seasonal Changes Affect Your Skin and How to Adapt Your Routine',
//       date: 'October 10, 2024',
//       author: 'Malukforever',
//       category: 'Personal Care',
//       excerpt: 'Each season brings unique challenges to your skin. This glowguide explains how to adjust your routine to keep your skin looking its best, whether it\'s winter dryness or summer oiliness...',
//       image: 'assets/images/blog/blog2.jpg',
//       id: 'glowguide-post-2',
//     },
//     {
//       // id: 'hair-accessories',
//       title: 'The Link Between Gut Health and Skin: How Your Diet Affects Your Complexion',
//       date: 'October 5, 2024',
//       author: 'Malukforever',
//       category: 'Hair Accessories',
//       excerpt: 'Did you know what you eat affects your skin? Discover how probiotics, antioxidants, and healthy fats contribute to a radiant complexion, and how sugar and dairy can impact it...',
//       image: 'assets/images/blog/blog3.jpg',
//       id: 'glowguide-post-3',
//     },
//     {
//       // id: 'hormonal-changes',
//       title: 'The Role of Hormones in Skin Health: How Your Cycle Affects Your Complexion',
//       date: 'October 15, 2024',
//       author: 'Malukforever',
//       category: 'Skin Care',
//       excerpt: 'Hormonal fluctuations throughout the month affect your skin’s health and appearance. Learn how to adapt your skincare routine to manage breakouts, dryness, and oiliness...',
//       image: 'assets/images/blog/blog4.jpg',
//       id: 'glowguide-post-4',
//     },
//   ];

// const BlogDetail: React.FC = () => {
//   const pathname = usePathname(); // Use usePathname to get the current pathname
//   const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

//   useEffect(() => {
//     const match = pathname.split('/').pop(); // Extract the ID from the URL
//     if (match) {
//       // Fetch the blog post corresponding to the 'id' from the static data
//       const post = blogPosts.find((post) => post.id === match);
//       setBlogPost(post || null); // Set the post if found, otherwise null
//     }
//   }, [pathname]); // Re-run the effect when the pathname changes

//   if (!blogPost) {
//     return <div>Loading...</div>; // Show loading state while the post is being fetched
//   }

//   return (
//     <div>
//       <h1>{blogPost.title}</h1>
//       <p>{blogPost.date} - {blogPost.author}</p>
//       <p><strong>Category:</strong> {blogPost.category}</p>
//       <img src={blogPost.image} alt={blogPost.title} />
//       <p>{blogPost.excerpt}</p>
//       {/* You can add more detailed content here */}
//       <div>
//         <p>Full content of the blog post goes here...</p>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;


// pages/blog/[id].tsx
"use client";

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, Link, Card, CardContent, CardMedia } from '@mui/material';

// Define the structure of a blog post
interface BlogPost {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  id: string;
}

// Static blog posts data


const blogPosts: BlogPost[] = [
    {
      // id: 'skin-care',
      title: 'Skin Care Has No Gender: Everyone Deserves Healthy Skin',
      date: 'October 12, 2024',
      author: 'Malukforever',
      category: 'Skin Care',
      excerpt: 'Skincare isn’t about gender—it’s about caring for your skin. In this glowguide, we explore how everyone, regardless of gender, deserves a healthy, glowing complexion by focusing on essential skin care practices...',
      image: '/blogs/blog-1.jpg',
      id: 'glowguide-post-1',
    },
    {
      // id: 'personal-care',
      title: 'How Seasonal Changes Affect Your Skin and How to Adapt Your Routine',
      date: 'October 10, 2024',
      author: 'Malukforever',
      category: 'Personal Care',
      excerpt: 'Each season brings unique challenges to your skin. This glowguide explains how to adjust your routine to keep your skin looking its best, whether it\'s winter dryness or summer oiliness...',
      image: '/blogs/blog-2.jpg',
      id: 'glowguide-post-2',
    },
    {
      // id: 'hair-accessories',
      title: 'The Link Between Gut Health and Skin: How Your Diet Affects Your Complexion',
      date: 'October 5, 2024',
      author: 'Malukforever',
      category: 'Hair Accessories',
      excerpt: 'Did you know what you eat affects your skin? Discover how probiotics, antioxidants, and healthy fats contribute to a radiant complexion, and how sugar and dairy can impact it...',
      image: '/blogs/blog-3.jpg',
      id: 'glowguide-post-3',
    },
    {
      // id: 'hormonal-changes',
      title: 'The Role of Hormones in Skin Health: How Your Cycle Affects Your Complexion',
      date: 'October 15, 2024',
      author: 'Malukforever',
      category: 'Skin Care',
      excerpt: 'Hormonal fluctuations throughout the month affect your skin’s health and appearance. Learn how to adapt your skincare routine to manage breakouts, dryness, and oiliness...',
      image: 'img/engineer.png',
      id: 'glowguide-post-4',
    },
  ];

const BlogDetail: React.FC = () => {
  const pathname = usePathname(); // Use usePathname to get the current pathname
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const match = pathname.split('/').pop(); // Extract the ID from the URL
    if (match) {
      // Fetch the blog post corresponding to the 'id' from the static data
      const post = blogPosts.find((post) => post.id === match);
      setBlogPost(post || null); // Set the post if found, otherwise null
    }
  }, [pathname]); // Re-run the effect when the pathname changes

  if (!blogPost) {
    return <div>Loading...</div>; // Show loading state while the post is being fetched
  }

  return (
    <Box sx={{ maxWidth: '900px', margin: '0 auto', padding: 3 }}>
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        {/* Image at the top */}
        <CardMedia
          component="img"
          sx={{
            width: '100%',
            height: 400,
            objectFit: 'cover',
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
          }}
          image={blogPost.image}
          alt={blogPost.title}
        />

        {/* Content section */}
        <Box sx={{ padding: 2 }}>
          <CardContent>
            <Typography variant="h4" sx={{ color: '#b09614', marginBottom: 2 }}>
              {blogPost.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#777', marginBottom: 2 }}>
              <span>Posted on {blogPost.date}</span> | <span>By {blogPost.author}</span> | <span>Category: {blogPost.category}</span>
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }}>
              {blogPost.excerpt}

            </Typography>

            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              How Your Cycle Affects Your Skin:
            </Typography>
            <ul>
              <li>
                <strong>Menstrual Phase (Days 1–5):</strong> Hormone levels are low, which can make skin appear dull or dry.
              </li>
              <li>
                <strong>Follicular Phase (Days 6–14):</strong> Estrogen rises, boosting collagen production and giving your skin a healthy glow.
              </li>
              <li>
                <strong>Ovulation (Day 14):</strong> High estrogen levels can lead to clearer, plump skin, but the surge in testosterone may trigger oil production, causing occasional breakouts.
              </li>
              <li>
                <strong>Luteal Phase (Days 15–28):</strong> Progesterone increases, which can lead to skin becoming oilier and more prone to acne, especially around the chin and jawline.
              </li>
            </ul>

            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              The Takeaway:
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }}>
              Understanding how your hormones affect your skin can help you adjust your skincare routine throughout the month. With a little attention to your cycle, you can better manage breakouts and enjoy a clearer complexion.
            </Typography>

            {/* Navigation for related posts */}
            <Box sx={{ marginTop: 3 }}>
              {/* <Link href={`/blog/${blogPosts[1].id}`} passHref>
                <Button variant="text" sx={{ color: '#b09614' }}>
                  Previous Post: {blogPosts[1].title}
                </Button>
              </Link> */}
            </Box>

            {/* Social Share Buttons */}
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Share This Post:
              </Typography>
              <Button variant="outlined" sx={{ marginRight: 2 }}>Facebook</Button>
              <Button variant="outlined" sx={{ marginRight: 2 }}>Twitter</Button>
              <Button variant="outlined">LinkedIn</Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default BlogDetail;
