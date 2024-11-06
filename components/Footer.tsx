// // // *********************
// // // Role of the component: Footer component
// // // Name of the component: Footer.tsx
// // // Developer: Aleksandar Kuzmanovic
// // // Version: 1.0
// // // Component call: <Footer />
// // // Input parameters: no input parameters
// // // Output: Footer component
// // // *********************

// // import { navigation } from "@/lib/utils";
// // import Image from "next/image";
// // import React from "react";

// // const Footer = () => {
// //   return (
// //     <footer className="bg-white" aria-labelledby="footer-heading">
// //       <div>
// //         <h2 id="footer-heading" className="sr-only">
// //           Footer
// //         </h2>
// //         <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 pt-24 pb-14">
// //           <div className="xl:grid xl:grid-cols-3 xl:gap-8">
// //             <Image
// //               src="/myzk logo.png"
// //               alt="Myzk logo"
// //               width={250}
// //               height={250}
// //               className="h-auto w-auto"
// //             />
// //             <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
// //               <div className="md:grid md:grid-cols-2 md:gap-8">
// //                 <div>
// //                   <h3 className="text-lg font-bold leading-6 text-orange-600">
// //                     Sale
// //                   </h3>
// //                   <ul role="list" className="mt-6 space-y-4">
// //                     {navigation.sale.map((item) => (
// //                       <li key={item.name}>
// //                         <Link
// //                           href={item.href}
// //                           className="text-sm leading-6 text-black hover:text-gray-700"
// //                         >
// //                           {item.name}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //                 <div className="mt-10 md:mt-0">
// //                   <h3 className="text-base font-bold leading-6 text-orange-600">
// //                     About Us
// //                   </h3>
// //                   <ul role="list" className="mt-6 space-y-4">
// //                     {navigation.about.map((item) => (
// //                       <li key={item.name}>
// //                         <Link
// //                           href={item.href}
// //                           className="text-sm leading-6 text-black hover:text-gray-700"
// //                         >
// //                           {item.name}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //               <div className="md:grid md:grid-cols-2 md:gap-8">
// //                 <div>
// //                   <h3 className="text-base font-bold leading-6 text-orange-600">
// //                     Buying
// //                   </h3>
// //                   <ul role="list" className="mt-6 space-y-4">
// //                     {navigation.buy.map((item) => (
// //                       <li key={item.name}>
// //                         <Link
// //                           href={item.href}
// //                           className="text-sm leading-6 text-black hover:text-gray-700"
// //                         >
// //                           {item.name}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //                 <div className="mt-10 md:mt-0">
// //                   <h3 className="text-base font-bold leading-6 text-orange-600">
// //                     Support
// //                   </h3>
// //                   <ul role="list" className="mt-6 space-y-4">
// //                     {navigation.help.map((item) => (
// //                       <li key={item.name}>
// //                         <Link
// //                           href={item.href}
// //                           className="text-sm leading-6 text-black hover:text-gray-700"
// //                         >
// //                           {item.name}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

'use client'
import React, { useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  IconButton
} from '@mui/material'
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Pinterest
} from '@mui/icons-material'
import Link from 'next/link'
import { Phone, Email, LocationOn } from '@mui/icons-material' // Import LocationOn icon

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    console.log(`Subscribed with: ${email}`)
  }

  return (
    <>
      <footer>
        <Box
          sx={{ backgroundColor: '#f9f3f0', width: '100%', padding: '50px 0' }}
        >
          <Container maxWidth={false} sx={{ width: '100%', padding: 0 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                {/* Logo */}
                <Box sx={{ textAlign: 'center', mb: 0 }}>
                  <img
                    src='/logo.png'
                    alt='Logo'
                    style={{ maxWidth: '150px', height: 'auto' }}
                  />
                </Box>
                <Typography>
                  MalukForever International Pvt. Ltd. offers in terms of
                  front-end portals and their focus on results and value.
                </Typography>

                {/* Available Time */}
                <Typography variant='h6' sx={{ color: ' #ab6a49', m: 1 }}>
                  We Are Available:
                </Typography>
                <Typography>Mon-Sat: 9.30 am to 6.00 pm</Typography>

                {/* Social Media Icons */}
                <Box
                  sx={{
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: 'Start'
                  }}
                >
                  <IconButton href='#' color='inherit'>
                    <Facebook sx={{ color: '  #ab6a49', marginRight: 1 }} />
                  </IconButton>
                  <IconButton href='#' color='inherit'>
                    <Twitter sx={{ color: '#ab6a49', marginRight: 1 }} />
                  </IconButton>
                  <IconButton href='#' color='inherit'>
                    <Instagram sx={{ color: '#ab6a49', marginRight: 1 }} />
                  </IconButton>
                  <IconButton href='#' color='inherit'>
                    <YouTube sx={{ color: '#ab6a49', marginRight: 1 }} />
                  </IconButton>
                  <IconButton href='#' color='inherit'>
                    <Pinterest sx={{ color: '#ab6a49', marginRight: 1 }} />
                  </IconButton>
                </Box>
              </Grid>

              {/* Quick Links Section */}
              <Grid item xs={12} sm={4} md={2}>
                <Typography
                  variant='h6'
                  sx={{
                    color: '#ab6a49',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                  }}
                >
                  Quick Links
                </Typography>
                <Box component='ul' sx={{ listStyleType: 'none', padding: 0 }}>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/shop' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Category
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/policy/privacy-policy' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Privacy Policy
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/policy/refund-return' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Returns & Refund Policies
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/policy/shipping-delivery' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Shipping and Delivery Policies
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/policy/term-condition' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Terms of Service
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/faq' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Help & FAQ
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/support/contact-us' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Contact
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/about' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        About
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/support' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Support
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>

              {/* Support Links Section */}
              {/* <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant='h6'
                  sx={{ color: '#ab6a49', marginBottom: '20px' }}
                >
                  Support Links
                </Typography>
                <Box component='ul' sx={{ listStyleType: 'none', padding: 0 }}>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/tracking' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Track Order
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/ticket' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Ticket Raise
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/return' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Return
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/support/warranty-registration' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Warranty Registration
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/support/contact-us' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Contact
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/about' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        About
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/support' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Support
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid> */}
              {/* usefull Links Section */}
              {/* <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant='h6'
                  sx={{ color: '#ab6a49', marginBottom: '20px' }}
                >
                  Category Links
                </Typography>
                <Box component='ul' sx={{ listStyleType: 'none', padding: 0 }}>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/category' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Hair Care
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/category' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Skin Care
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/category' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Personal Care
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/category' passHref>
                      <Typography
                        sx={{
                          color: '#ab6a49',
                          '&:hover': { color: 'black' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Hair Accessories
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid> */}

              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant='h6'
                  sx={{
                    color: '#ab6a49',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                  }}
                >
                  Get In Touch
                </Typography>

                {/* Office Location */}

                {/* Phone */}
                <Typography sx={{ mb: 1, color: '#c28565', fontWeight: '600' }}>
                  Phone Number
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#ab6a49',
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2 // added margin-bottom
                  }}
                >
                  <Phone sx={{ marginRight: 1 }} />{' '}
                  {/* Phone icon with some margin */}
                  <Link
                    href='tel:+918588801711'
                    color='inherit'
                    underline='hover'
                  >
                    +91 85888 01711
                  </Link>
                </Typography>

                {/* Email */}
                <Typography sx={{ mb: 1, color: '#c28565', fontWeight: '600' }}>
                  Email Address
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#ab6a49',
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2 // added margin-bottom
                  }}
                >
                  <Email sx={{ marginRight: 1 }} />{' '}
                  {/* Email icon with some margin */}
                  <Link
                    href='mailto:operations@malukforever.com'
                    color='inherit'
                    underline='hover'
                  >
                    operations@malukforever.com
                  </Link>
                </Typography>
                {/* location */}
                <Typography sx={{mb:1 , color:'#c28565', fontWeight:'600'}}>
                Office Location
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#ab6a49',
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2 // added margin-bottom
                  }}
                >
                  <LocationOn sx={{ marginRight: 1 }} /> {/* Location icon */}
                  <Link
                    href='https://maps.app.goo.gl/hZgUhCbYwkugGsHx8'
                    passHref
                    color='inherit'
                    underline='hover'
                  >
                    MalukForever International Pvt. Ltd. , E-169, E Block,
                    Sector 63, Noida, Uttar Pradesh 201301
                  </Link>
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                {/* Newsletter */}
                <Typography
                  variant='h6'
                  sx={{
                    color: '#ab6a49',
                    marginBottom: '20px',
                    textAlign: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Newsletter
                </Typography>
                <Typography sx={{ mb: 2, textAlign:'justify' }}>
                Sign up to receive exclusive deals, important news,& updates from MalukForever International Pvt. Ltd.
                </Typography>
                <Box>
                  <TextField
                    fullWidth
                    variant='outlined'
                    placeholder='email@example.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    sx={{
                      backgroundColor: '#f9f3f0',
                      color: '#ab6a49',
                      borderRadius: '4px',
                      '& .MuiInputBase-input': { color: '#ab6a49' },
                      '::placeholder': { color: '#ab6a49' },
                      mb: 2
                    }}
                  />
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleSubscribe}
                    fullWidth
                    sx={{
                      marginTop: '10px',
                      backgroundColor: '#ab6a49 !important',
                      color: '#fff',
                      '&:hover': { backgroundColor: '#9a5a3e ' },
                      borderRadius: '4px'
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Copyright Section */}
        <Grid
          container
          justifyContent='center'
          sx={{
            backgroundColor: 'white',
            color: '#ab6a49',
            padding: '20px 0',
            width: '100%'
          }}
        >
          <Grid item xs={12} textAlign='center' sx={{ fontSize: '18px' }}>
            <Typography variant='body2' component='div'>
              Copyright &copy; {new Date().getFullYear()} All rights reserved by{' '}
              <Box
                component='span'
                sx={{ display: 'inline-block', verticalAlign: 'middle' }}
              >
                <img src='/logo.png' width='60px' alt='maluk' />
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </>
  )
}

export default Footer
