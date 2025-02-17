"use client"
// import ENDPOINT from '@/config/appConfig';
import ENDPOINT from '@/config/appConfig';

import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import SectionTitle from './SectionTitle';
import Banner from './Banner';

// Move the Contact definition here
const Contact = () => (
  <>
   
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 3,
        p:2,
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <i className="ti-home" style={{ fontSize: '2rem', color: 'hsl(23.43deg 89.74% 54.12%)', marginRight: '15px' }} />
      <div>
        <Typography variant="h6" sx={{ color: 'hsl(23.43deg 89.74% 54.12%)' }}>Address</Typography>
        <Typography variant="body1">E-169, E Block, Sector 63, Noida, Uttar Pradesh 201301</Typography>
      </div>
    </Box>

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 3,
        p: 2,
        borderRadius: 2,
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <i className="ti-tablet" style={{ fontSize: '2rem', color: 'hsl(23.43deg 89.74% 54.12%)', marginRight: '15px' }} />
      <div>
        <Typography variant="h6" sx={{ color: 'hsl(23.43deg 89.74% 54.12%)' }}>Telephone</Typography>
        <Typography variant="body1">
          <a href="tel:+919958039775">+91 9958039775</a>, <a href="tel:+919650745556">+91 9650745556</a>
        </Typography>
      </div>
    </Box>

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 3,
        p: 2,
        borderRadius: 2,
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <i className="ti-email" style={{ fontSize: '2rem', color: 'hsl(23.43deg 89.74% 54.12%)', marginRight: '15px' }} />
      <div>
        <Typography variant="h6" sx={{ color: 'hsl(23.43deg 89.74% 54.12%)' }}>Email Us</Typography>
        <Typography variant="body1">
          <a href="mailto:operations@maluk.in">operations@myzk.in</a>
        </Typography>
      </div>
    </Box>
  </>
);

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
// {name: 'dsfd', email: 'fdsfsdfsdf@fsf.fdsf', subject: 'sdffdsfsdf', message: 'hgjh'}
  // const handleSubmit = async (e:any) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   const url = `${ENDPOINT.BASE_URL}/api/contact`;
  //   const data = formData
  //   const response = await axios.post(url,data);
  //   toast.success(response.data.message);


  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    try {
  
      // Construct the URL for the contact form submission API
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`;
      // const url = `${ENDPOINT.BASE_URL}/api/contact`;
      // Data to be sent in the request body
      const data = formData;
      // Make a POST request to the server
      const response = await axios.post(url, data);
      // Display a success message using a toast notification
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      toast.success(response.data.message);      
    } catch (error: any) {
      // Handle error and display a toast notification for failure
      toast.error(error.response?.data?.message || "Error...");
    }
  };
  

  return (
    <>
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        {/* Left Section - Contact Info */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#fff',
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
              height: '100%',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: '#b09615',
                mb: 2,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#333',
                fontSize: '16px',
                marginBottom: '20px',
              }}
            >
              We&apos;d love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us.
            </Typography>

            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li className="py-1" style={{ marginBottom: '10px' }}>
                <i className="fas fa-map-marker-alt" style={{ 
                  // marginRight: '10px',
                   color: '#f37321' }} />
                <a
                  href="https://maps.app.goo.gl/JdfaCXvXaFX8GR2N7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#333' }}
                >
                  E-169 Lower Ground Part 1, Sector 63, G B Nagar, Noida, Uttar Pradesh, 201301.
                </a>
              </li>
              <li className="py-1" style={{ marginBottom: '10px' }}>
                <i className="fas fa-envelope" style={{ 
                  // marginRight: '10px',
                   color: '#f37321' }} />
                <a href="mailto:operations@malukforever.com" style={{ textDecoration: 'none', color: '#333' }}>
                  operations@malukforever.com
                </a>
              </li>
              <li className="py-1" style={{ marginBottom: '10px' }}>
                <i className="fas fa-phone-alt" style={{
                  //  marginRight: '10px',
                    color: '#f37321' }} />
                <a href="tel:+918588801711" style={{ textDecoration: 'none', color: '#333' }}>
                  +91 85888 01711
                </a>
              </li>
            </ul>
          </Box>
        </Grid>

        {/* Right Section - Contact Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: '#fff',
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: '#b09615',
                mb: 3,
              }}
            >
              Contact Form
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Phone Number"
                  name="phone"
                  // value={formData.}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    padding:2,
                    backgroundColor: '#b09615 !important',
                    color: 'white',
                    '&:hover': {
                      color: 'Black',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>

    <Box className="maps" py={5}>
      <Container>
        <Box display="flex" justifyContent="center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.225047270469!2d77.3867099!3d28.6230165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff1773dc645%3A0xa422cb35f324c9fd!2sGround%20E%2C%20E-169%2C%20E%20Block%2C%20Sector%2063%2C%20Noida%2C%20Hazratpur%20Wajidpur%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1731649382147!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Container>
    </Box>

    </>
  );
}
export default  ContactUs