// 'use client'
// import React, { useState } from 'react'
// import {
//   Container,
//   Grid,
//   Typography,
//   Button,
//   TextField,
//   Box,
//   IconButton
// } from '@mui/material'
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   YouTube,
//   Pinterest
// } from '@mui/icons-material'
// import Link from 'next/link'
// import Image from 'next/image'

// const Footer = () => {
//   const [email, setEmail] = useState('')

//   const handleSubscribe = () => {
//     console.log(`Subscribed with: ${email}`)
//   }

//   return (
//     <>
//       <footer>
//         <Box sx={{ backgroundColor: '#f3edd6', width: '100%', padding: '50px' }}>
//           <Container maxWidth={false} sx={{ width: '100%', padding: 0 }}>
//             <Grid container spacing={4}>
//               {/* Quick Links Section */}
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography
//                   variant='h6'
//                   sx={{
//                     color: '#00000',
//                     marginBottom: '20px',
//                     borderBottom: '2px solid #e0e0e0',
//                     display: 'inline-block' // Ensures the border only spans the text
//                   }}
//                 >
//                   Quick Links
//                 </Typography>
//                 <Box component='ul' sx={{ listStyleType: 'none', padding: 0 }}>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/shop' passHref>
//                       <Typography
//                         sx={{
//                           color: '#00000',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Category
//                       </Typography>
//                     </Link>
//                   </Box>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/policy/privacy-policy' passHref>
//                       <Typography
//                         sx={{
//                           color: '#00000',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Privacy Policy
//                       </Typography>
//                     </Link>
//                   </Box>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/policy/refund-return' passHref>
//                       <Typography
//                         sx={{
//                           color: '#00000',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Returns & Refund Policies
//                       </Typography>
//                     </Link>
//                   </Box>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/policy/shipping-delivery' passHref>
//                       <Typography
//                         sx={{
//                           color: '#9a9b9c',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Shipping and Delivery Policies
//                       </Typography>
//                     </Link>
//                   </Box>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/policy/term-condition' passHref>
//                       <Typography
//                         sx={{
//                           color: '#9a9b9c',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Terms of Service
//                       </Typography>
//                     </Link>
//                   </Box>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/faq' passHref>
//                       <Typography
//                         sx={{
//                           color: '#9a9b9c',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Help & FAQ
//                       </Typography>
//                     </Link>
//                   </Box>
//                 </Box>
//               </Grid>

//               {/* Support Links Section */}
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography
//                   variant='h6'
//                   sx={{
//                     color: '#ffffff',
//                     marginBottom: '20px',
//                     borderBottom: '2px solid #e0e0e0',
//                     display: 'inline-block' // Ensures the border only spans the text
//                   }}
//                 >
//                   Support Links
//                 </Typography>
//                 <Box component='ul' sx={{ listStyleType: 'none', padding: 0 }}>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/support/track-order' passHref>
//                       <Typography
//                         sx={{
//                           color: '#9a9b9c',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Track Order
//                       </Typography>
//                     </Link>
//                   </Box>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/support/support-ticket' passHref>
//                       <Typography
//                         sx={{
//                           color: '#9a9b9c',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Ticket Raise
//                       </Typography>
//                     </Link>
//                   </Box>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/return' passHref>
//                       <Typography
//                         sx={{
//                           color: '#9a9b9c',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Return
//                       </Typography>
//                     </Link>
//                   </Box>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/support/warranty-registration' passHref>
//                       <Typography
//                         sx={{
//                           color: '#9a9b9c',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Warranty Registration
//                       </Typography>
//                     </Link>
//                   </Box>
//                   <Box component='li' sx={{ marginBottom: '10px' }}>
//                     <Link href='/support/contact-us' passHref>
//                       <Typography
//                         sx={{
//                           color: '#9a9b9c',
//                           '&:hover': { color: '#f37321' },
//                           textDecoration: 'none',
//                           fontSize: '0.875rem'
//                         }}
//                       >
//                         Contact
//                       </Typography>
//                     </Link>
//                   </Box>
//                   {/* <Box component="li" sx={{ marginBottom: "10px" }}>
//                     <Link href="/about" passHref>
//                       <Typography
//                         sx={{
//                           color: "#9a9b9c",
//                           "&:hover": { color: "#f37321" },
//                           textDecoration: "none",
//                           fontSize: "0.875rem",
//                         }}
//                       >
//                         About
//                       </Typography>
//                     </Link>
//                   </Box> */}
//                 </Box>
//               </Grid>

//               {/* Get in Touch Section */}
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography
//                   variant='h6'
//                   sx={{
//                     color: '#ffffff',
//                     marginBottom: '20px',
//                     borderBottom: '2px solid #e0e0e0',
//                     display: 'inline-block' // Ensures the border only spans the text
//                   }}
//                 >
//                   Get In Touch
//                 </Typography>

//                 <Typography variant='body2' sx={{ color: '#9a9b9c', paddingRight:'10px' }}>
//                   Have questions? Visit at:
//                   <Link
//                     href='https://maps.app.goo.gl/hZgUhCbYwkugGsHx8'
//                     passHref
//                   >
//                     Digital Telemedia Technology Pvt. Ltd., 
//                     E-169, E Block,
//                     Sector 63, Noida,
//                     Uttar Pradesh 201301.
//                   </Link>
//                 </Typography>
//               </Grid>

//               {/* Newsletter Section */}
//               <Grid item xs={12} sm={6} md={3}>
//                 <Box
//                   mt={1}
//                   sx={{
//                     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Light shadow effect
//                     borderRadius: '8px', // Keep border radius for a smooth look
//                     overflow: 'hidden' // Ensures rounded corners are applied to iframe
//                   }}
//                 >
//                   <iframe
//                     src='https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7004.450094540938!2d77.3867099!3d28.6230165!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce5539e0d42b7%3A0x682b86960f5749cc!2sDigital%20Telemedia%20Technology%20Pvt.%20Ltd.%20E-169%20E%20Block%2C%20Sector%2063%20Noida%2C%20Hazratpur%20Wajidpur%2C%20Uttar%20Pradesh%20201301!3m2!1d28.623015199999998!2d77.3867281!5e0!3m2!1sen!2sin!4v1723628516193!5m2!1sen!2sin'
//                     width='100%'
//                     height='auto'
//                     style={{ border: 0 }}
//                     loading='lazy'
//                   ></iframe>
//                 </Box>
//               </Grid>
//             </Grid>

//             {/* Footer Bottom Section */}
//             <Grid
//               container
//               justifyContent='center'
//               sx={{ marginTop: '30px', paddingTop: '20px', color: 'white' }}
//             >
//               <Grid item xs={12} textAlign='center'>
//                 <Typography variant='body2'>
//                   Contact us at:{' '}
//                   <Link
//                     href='mailto:operations@myzk.in'
//                     style={{ color: '#9a9b9c', textDecoration: 'none' }}
//                   >
//                     operations@myzk.in
//                   </Link>
//                 </Typography>

//                 {/* Social Media Icons */}
//                 <Box sx={{ marginTop: '10px' }}>
//                   <IconButton href='https://www.facebook.com/profile.php?id=61558117619997' color='inherit'>
//                     <Facebook />
//                   </IconButton>
//                   {/* <IconButton href='#' color='inherit'>
//                     <Twitter />
//                   </IconButton> */}
//                   <IconButton href='https://www.instagram.com/myzk.india/' color='inherit'>
//                     <Instagram />
//                   </IconButton>
//                   <IconButton href='https://youtube.com/@digitaltelemedia?si=FiQuIkBPbpcbhxVI' color='inherit'>
//                     <YouTube />
//                   </IconButton>
//                   <IconButton href='https://pin.it/21nc7Xf1a' color='inherit'>
//                     <Pinterest />
//                   </IconButton>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>

//         {/* Copyright Section */}
//         <Grid
//           container
//           justifyContent='center'
//           sx={{ backgroundColor: 'black', padding: '20px 0', width: '100%' }}
//         >
//           <Grid item xs={12} textAlign='center'>
//             <Typography variant='body2' component='div' sx={{color:"#b09614"}}>
//               Copyright &copy; {new Date().getFullYear()} All rights reserved by{' '}
//               <Box
//                 component='span'
//                 sx={{ display: 'inline-block', verticalAlign: 'middle' }}
//               >
//                 <img src='/logo.png' width='50px' alt='Myzk' />
//               </Box>
//             </Typography>
//           </Grid>
//           {/* <Grid item xs={12} textAlign="center">
//             <Typography variant="body2">
//               Copyright &copy; {new Date().getFullYear()} All rights reserved by{" "}
//               <span>
//                 <image src="/img/myzklogo.png" width="100px" alt="Myzk" />
//               </span>
//             </Typography>
//           </Grid> */}
//         </Grid>
//       </footer>
//     </>
//   )
// }

// export default Footer


import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { LocationOn, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <>
    <Box
      component="footer"
      sx={{
        py: 5,
        background: 'linear-gradient(#f4f2e3, #fdf7e0, #f3edd6, #faf7e0, #faf6da)',
        color: 'black',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {/* Logo and Payment Section */}
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{marginLeft:"20px"}}>
              <Link href="index.html">
                <img
                  src="logo.png"
                  alt="Maluk Forever Logo"
                  style={{ width: '40%' }}
                />
              </Link>
              <Typography variant="body1" sx={{ fontStyle: "italic", fontWeight: 'bold' }}>
                Enhance Your Beauty
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Follow Us
                </Typography>
                <Box display="flex" gap={1}>
                  <Link href="https://pin.it/28GVwGnI3" target="_blank">
                    <img src="/social/pinterest.png" width="27" alt="Pinterest" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/maluk-forever-900818339/" target="_blank">
                    <img src="/social/linkedin.png" width="28" alt="LinkedIn" />
                  </Link>
                  <Link href="https://www.youtube.com/@maluk.forever" target="_blank">
                    <img src="/social/youtube.png" width="28" alt="YouTube" />
                  </Link>
                  <Link href="https://x.com/malukforever" target="_blank">
                    <img src="/social/twitter.png" width="28" alt="Twitter" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/maluk.forever/?igsh=bDJtdW80aWVlYjFr#"
                    target="_blank"
                  >
                    <img src="/social/insta.png" width="31" alt="Instagram" />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={6} lg={2}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {[
                  { name: 'Home', link: 'index.html' },
                  { name: 'About Us', link: 'about.html' },
                  { name: 'Blogs', link: 'blog.html' },
                  { name: 'Category', link: 'shop.html' },
                  { name: 'Gallery', link: 'gallery.html' },
                  { name: 'Contact Us', link: 'contact.html' },
                  { name: "FAQ's", link: 'faq.html' },
                ].map((item) => (
                  <Box component="li" key={item.name} >
                    <Link href={item.link} sx={{  textDecoration: 'none' , color:"black"}}>
                      {item.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Useful Links Section */}
          <Grid item xs={12} md={6} lg={3}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Useful Links
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {[
                  { name: 'Our Policy', link: 'ourprivacy.html' },
                  { name: 'Terms And Conditions', link: 'termsandconditions.html' },
                  { name: 'How We Make', link: 'wemake.html' },
                  { name: 'Fan Page', link: 'fanpage.html' },
                  { name: 'Media', link: 'media.html' },
                  { name: 'Become an Affiliate', link: 'affiliate.html' },
                  { name: 'Feedback Form', link: 'feedback.html' },
                  { name: 'Track Order', link: 'trackingpage.html' },
                ].map((item) => (
                  <Box component="li" key={item.name} sx={{  }}>
                    <Link href={item.link} sx={{ color:"black", textDecoration: 'none' }}>
                      {item.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{marginRight:"20px"}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Contact Us
              </Typography>
              <Box component="address" sx={{ fontStyle: 'normal' }}>
                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                  <LocationOn sx={{ mr: 1 }} />
                  <Link
                    href="https://maps.app.goo.gl/xsiUC3c2nagspFnn7"
                    sx={{ textDecoration: 'none', color: 'inherit',  }}
                  >
                    E-169, Lower Ground Part 1, Sector 63, Noida, Uttar Pradesh, India, 201301
                  </Link>
                </Box>
                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                  <Email sx={{ mr: 1 }} />
                  <Link
                    href="mailto:operations@malukforever.com"
                    sx={{ textDecoration: 'none', color: 'inherit',  }}
                  >
                    operations@malukforever.com
                  </Link>
                </Box>
                <Box display="flex" alignItems="center">
                  <Phone sx={{ mr: 1 }} />
                  <Link
                    href="tel:+918588801711"
                    sx={{ textDecoration: 'none', color: 'inherit',  }}
                  >
                    +91 85888 01711
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
             {/* Copyright Section */}
       <Grid
          container
          justifyContent='center'
          sx={{ backgroundColor: 'black', padding: '10px 0', width: '100%' }}
        >
          <Grid item xs={12} textAlign='center'>
            <Typography variant='body2' component='div' sx={{color:"#b09614"}}>
              Copyright &copy; {new Date().getFullYear()} All rights reserved by{' '}
              <Box
                component='span'
                sx={{ display: 'inline-block', verticalAlign: 'middle' }}
              >
                <img src='/logo.png' width='50px' alt='Myzk' />
              </Box>
            </Typography>
          </Grid>

        </Grid>
    </>

  );
};

export default Footer
