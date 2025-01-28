// import React from 'react';
// import { Box, Container, Typography, Button } from '@mui/material';

// const OfferBanner = () => {
//   return (
//     <section
//       style={{
//         backgroundImage: "url('/Discount-Banner.jpg')",
//         // backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '10rem 0',
//         backgroundRepeat:"no-repeat",
//         width:"100%",
//         height:"600px",
//         backgroundSize:"cover"
//       }}
//     >
//       <Container>
//         <Box display="flex" justifyContent="center" alignItems="center">
//           <Box textAlign="center">
//             <Typography variant="h5" sx={{ textTransform: 'uppercase', mb: 4 }}>
//               {/* All Products */}

// {/* 
//               <Button
//               variant="contained"
//               color="warning"
//               sx={{
//                 mb: 2,
//                 mt: 2,
//                 backgroundColor: '#f37321 !important', // Set background color to #f37321
//                 color: 'white', // Set text color to white
//                 '&:hover': {
//                   backgroundColor: '#f37321 !important', // Keep the background color #f37321 on hover
//                   color: 'black', // Change text color to black on hover
//                 },
//               }}
//             >
//               Discover Now
//             </Button> */}
//             </Typography>
//             <Typography
//               variant="h2"
//               sx={{
//                 textTransform: 'uppercase', // Ensure text is uppercase
//                 fontWeight: 600, // Adjust font weight as needed
//               }}
//             >
//               {/* 60% Off */}
//             </Typography>
//             {/* <Button
//               variant="contained"
//               color="warning"
//               sx={{
//                 mb: 2,
//                 mt: 2,
//                 backgroundColor: '#f37321 !important', // Set background color to #f37321
//                 color: 'white', // Set text color to white
//                 '&:hover': {
//                   backgroundColor: '#f37321 !important', // Keep the background color #f37321 on hover
//                   color: 'black', // Change text color to black on hover
//                 },
//               }}
//             >
//               Discover Now
//             </Button>
//             <Typography sx={{ color: 'black' }}>Limited Time Offer</Typography> */}
//           </Box>
//         </Box>
//       </Container>
//     </section>
//   );
// };

// export default OfferBanner;

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const OfferBanner = () => {
  return (
    <section style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <img
        src="/Discount-Banner.jpg"
        alt="Discount Banner"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover', // Ensure the full image is visible
        }}
      />
      <Container
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box textAlign="center" color="white">
          <Typography variant="h5" sx={{ textTransform: 'uppercase', mb: 4 }}>
            {/* Optional heading */}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            {/* 60% Off */}
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default OfferBanner;
