"use client";

import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Button, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';
import Slider from "react-slick";
import Banner from '@/components/Banner';

interface FormData {
  firstName: string;
  email: string;
  mobile: string;
  experience: string;
  jobPosition: string;
  resume: File | null;
  subject: string;
}

// Styled components for custom styles
const Icon = styled(Box)({
  width: '80px',
  height: '80px',
  padding: '10px',
  border: '4px double #b09615',
  borderRadius: '50%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderColor: '#b09615',
    ButtonckgroundColor: '#f4f2e4',
  },
});

const Career: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    mobile: "",
    experience: "",
    jobPosition: "",
    resume: null,
    subject: "",
  });

  const positions = [
    
    

    { title: "Software Developer", description: "Developing and maintaining software applications.", image: "/assets/images/icons/developer.png" },
    { title: "UI/UX Designer", description: "Designing user interfaces and improving user experience.", image: "/assets/images/icons/designer.png" },
    { title: "Project Manager", description: "Managing projects and teams to ensure timely delivery.", image: "/assets/images/icons/manager.png" },

    { title: "Software Developer", description: "Developing and maintaining software applications.", image: "/assets/images/icons/developer.png" },
    { title: "UI/UX Designer", description: "Designing user interfaces and improving user experience.", image: "/assets/images/icons/designer.png" },
    { title: "Project Manager", description: "Managing projects and teams to ensure timely delivery.", image: "/assets/images/icons/manager.png" },
  ];

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setFormData({
      ...formData,
      jobPosition: e.target.value as string,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: Check for file size (max 4MB)
    if (formData.resume && formData.resume.size > 4 * 1024 * 1024) {
      alert("Resume file is too large. Please upload a file smaller than 4MB.");
      return;
    }

    // Handle the form submission (Here you can send the data to a Buttonckend or email)
    setOpen(true); // Open the modal after successful form submission
    setFormData({
      firstName: "",
      email: "",
      mobile: "",
      experience: "",
      jobPosition: "",
      resume: null,
      subject: "",
    });
  };
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable auto sliding
        autoplaySpeed: 3000, // Set the speed of auto slide (3 seconds)
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    

  return (
    <section className="career"     style={{
      backgroundImage: "url('/welcome2.jpg')",
  backgroundSize: 'contain', // Ensures the entire image is visible
  backgroundRepeat:'no-repeat'
}}>
      
      <Banner bg="url('/bread-career.jpg')" />
          <Container maxWidth="lg" sx={{ py: 5 }}  
          style={{
            backgroundImage: "url('/welcome2.jpg')",
        backgroundSize: 'contain', // Ensures the entire image is visible
        backgroundRepeat:'no-repeat'
      }}
      >
        <Typography variant="h3" align="center" gutterBottom sx={{ color: "#b09614", textAlign: 'center', mb: 3 }}  >
          Why Join Us?
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          At Maluk Forever, were not just about skincare — were about enhancing lives.
          Join us and be part of a team dedicated to innovation, quality, and making a
          lasting impact in the beauty and wellness industry.
        </Typography>
        <Grid container spacing={4} alignItems="center">
          {/* Left column - Content */}
          <Grid item md={8} xs={12}>
            <Box sx={{ p: 2 }}>
              <div className="side">
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Icon>
                    <Image src="/icons/team.png" alt="Team" width={80} height={80} />
                  </Icon>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h4">Impactful Work</Typography>
                    <Typography variant="body2">
                      Help us create skincare solutions that empower and inspire confidence in people worldwide.
                    </Typography>
                  </Box>
                </Box>
                <hr />
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Icon>
                    <Image src="/icons/career.png" alt="Career" width={80} height={80} />
                  </Icon>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h4">Professional Growth</Typography>
                    <Typography variant="body2">
                      We provide ample opportunities for learning and career advancement in a dynamic, fast-growing industry.
                    </Typography>
                  </Box>
                </Box>
                <hr />
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Icon>
                    <Image src="/icons/excellent.png" alt="Excellence" width={80} height={80} />
                  </Icon>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h4">Commitment to Excellence</Typography>
                    <Typography variant="body2">
                      Join a team where teamwork, respect, and idea-sharing are valued and celebrated.
                    </Typography>
                  </Box>
                </Box>
                <hr />
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Icon>
                    <Image src="/icons/project-management.png" alt="Innovative Culture" width={80} height={80} />
                  </Icon>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h4">Innovative Culture</Typography>
                    <Typography variant="body2">
                      Work alongside creative minds who are passionate about crafting the future of skincare.
                    </Typography>
                  </Box>
                </Box>
                <hr />
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Icon>
                    <Image src="/icons/badge.png" alt="Rewarding Benefits" width={80} height={80} />
                  </Icon>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h4">Rewarding Benefits</Typography>
                    <Typography variant="body2">
                      Competitive salaries, health benefits, and opportunities for personal development are just some of the perks we offer.
                    </Typography>
                  </Box>
                </Box>
                <hr />
              </div>
            </Box>
          </Grid>

          {/* Right column - Contact and apply form */}
          <Grid item md={4}>
            <Box sx={{ padding: 3, borderRadius: 1, border: '4px double #b09614', boxShadow: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
                <Image src="/logo.png" alt="Maluk Logo" width={150} height={150} />
              </Box>

              <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                For Any Query
              </Typography>
              <Typography sx={{ mb: 2, textAlign: 'center' }}>
                Wed love to hear from you! Whether you have a question, feedButtonck, or need assistance, feel free to reach out to us.
              </Typography>

              {/* Contact Information with Icons */}
              <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
                <Box component="li" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                  <Typography>
                    <a href="https://maps.app.goo.gl/JdfaCXvXaFX8GR2N7" target="_blank" rel="noopener noreferrer">
                      E-169 Lower Ground Part 1, Sector 63, G B Nagar, Noida, Uttar Pradesh, 201301.
                    </a>
                  </Typography>
                </Box>
                <Box component="li" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                  <Typography>
                    <a href="mailto:operations@malukforever.com">operations@malukforever.com</a>
                  </Typography>
                </Box>
                <Box component="li" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                  <Typography>
                    &#9742; <a href="tel:+918588801711">+91 85888 01711</a>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body1">
            If youre ready to take your career to the next level and make a real difference, Maluk Forever is the place for you.
            Explore our open positions below and apply today!
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ py: 5 }}     style={{
            backgroundImage: "url('/welcome2.jpg')",
        backgroundSize: 'contain', // Ensures the entire image is visible
        backgroundRepeat:'no-repeat'
      }}>
       

        {/* Open Positions Section */}
        <Box sx={{ padding: "50px 15px" }}>
          <Typography variant="h3" sx={{ color: "#b09614", textAlign: 'center', mb: 3 }}>Open Positions</Typography>
          {/* <Grid container spacing={4} justifyContent="center">
            {positions.map((position, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ height: '100%' }}>
               
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ color: '#b09614' }}>
                      {position.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {position.description}
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, Buttonckground:"#b09614 !important"}} onClick={handleOpenForm}>
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid> */}
         <Slider {...settings}>
         {positions.map((position, index) => (
  <Grid item xs={12} sm={4} key={index} sx={{ marginBottom: 4 }}> {/* Add marginBottom to each Grid item */}
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", margin: 2 }}> {/* Add margin to Card for spacing */}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" component="div" sx={{ color: "#b09614" }}>
          {position.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {position.description}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "100%",
            background: "#b09614 !important",
            "&:hover": {
              background: "#8f7412",
            },
          }}
          onClick={handleOpenForm}
        >
          Apply Now
        </Button>
      </Box>
    </Card>
  </Grid>
))}

        </Slider>
        </Box>
      </Container>

      {/* Job Application Form Modal */}
      <Dialog open={showForm} onClose={handleCloseForm}>
        <DialogTitle>Apply for Job</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {/* <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            /> */}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Mobile"
              variant="outlined"
              fullWidth
              margin="normal"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
            <TextField
              label="Experience"
              variant="outlined"
              fullWidth
              margin="normal"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
            />
            <InputLabel>Job Position</InputLabel>
            <Select
              fullWidth
              value={formData.jobPosition}
              onChange={(e:any)=>handleSelectChange}
              name="jobPosition"
            >
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="designer">Designer</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
            </Select>
            <Button variant="contained" component="label" sx={{ mt: 2 }}>
              Upload Resume
              <input type="file" hidden onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })} />
            </Button>
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              margin="normal"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
            <Box sx={{ textAlign: 'center', mt: 3, }}>
              <Button variant="contained" sx={{ background:"#b09615 !important"}} type="submit">Submit</Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Application Submitted</DialogTitle>
        <DialogContent>
          <Typography>Your application has been submitted successfully.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default Career;
