import React from 'react';
import { Box, Container, Typography, Paper, Card } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CertificateCardProps {
  image: string;
  title: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ image, title }) => (
  <Paper
    elevation={3}
    sx={{
        m:1,
      p: 1,
      textAlign: 'center',
      border:"1px solid #b09614",
    //   borderRadius: 2,
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 18px rgba(0, 0, 0, 0.2)',
      },
    }}
  >
    <img
      src={image}
      alt={title}
      style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
    />
    {/* <Typography variant="h6" mt={2}>
      {title}
    </Typography> */}
  </Paper>
);

const OurCertificate: React.FC = () => {
  const certificates: CertificateCardProps[] = [
    { image: '/certificates/certificate1.jpg', title: 'ISO 9001 Certified' },
    { image: '/certificates/certificate2.jpg', title: 'Dermatological Tested' },
    { image: '/certificates/certificate3.jpg', title: 'FDA Approved' },
    { image: '/certificates/certificate4.jpg', title: 'Organic Certification' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 1000, // Slide every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box py={5}>
      <Container>
        <Typography variant="h4" textAlign="center" mb={4}>
          Our Certificates
        </Typography>
        <Card className="p-8 m-4">
          <Slider {...settings}>
            {certificates.map((cert, index) => (
              <Box key={index} px={2}>
                <CertificateCard image={cert.image} title={cert.title} />
              </Box>
            ))}
          </Slider>
        </Card>
      </Container>
    </Box>
  );
};

export default OurCertificate;
