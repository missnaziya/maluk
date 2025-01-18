

// import Image from 'next/image'
// import React from 'react'
// import Link from 'next/link'
// import ProductItemRating from './ProductItemRating'

// // MUI Components
// import {
//   Box,
//   Typography,
//   IconButton,import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ProductItemRating from './ProductItemRating';

// MUI Components
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  useTheme
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import AddToWishlistIcon from './AddToWishlistIcon';

const ProductItem = ({
  product,
  color
}: {
  product: Product;
  color: string;
}) => {
  const theme = useTheme(); // Access MUI theme for breakpoints

  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          borderRadius: 3,
          marginLeft: 1,
          marginRight: 1,
          boxShadow: 2,
          height: '400px', // Fixed height for each product
          display: 'flex' // Ensures proper alignment of content
        }}
      >
        <Card sx={{ maxWidth: '100%', position: 'relative' }}>
          <Link href={`/product/${product.slug}`} passHref>
            {/* Product images */}
            <Box sx={{ position: 'relative' }}>
              {/* Primary product image */}
              <CardMedia
                component="img"
                image={
                  product.mainImage
                    ? `/categories/${product.mainImage}`
                    : '/product_placeholder.jpg'
                }
                alt="not found"
                sx={{
                  objectFit: 'cover',
                  height: '300px', // Default height
                  [theme.breakpoints.down('sm')]: {
                    height: '300px' // Smaller height for mobile
                  }
                }}
              />
              {/* Hover image */}
              <CardMedia
                component="img"
                image={
                  product.alternateImage1
                    ? `/${product.alternateImage1}`
                    : '/product_placeholder.jpg'
                }
                alt="Secondary Image 1"
                sx={{
                  background:"#d6cdcd",
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '300px', // Default height
                  objectFit: 'cover',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 1
                  },
                  [theme.breakpoints.down('sm')]: {
                    height: '300px' // Smaller height for mobile
                  }
                }}
              />
            </Box>
          </Link>

          <CardContent sx={{ backgroundColor: '#eee7f2' }}>
            <Link href={`/product/${product.slug}`} passHref>
              <Typography
                variant="body1"
                component="a"
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              >
                {product.title}
              </Typography>
            </Link>

            {/* Flex container for price and icons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between', // Space between price and icons
                alignItems: 'center' // Vertically align them
              }}
            >
              {/* Price Section */}
              <Box>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="del"
                  sx={{ marginRight: 2 }}
                >
                  ₹{product.price}
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="span"
                >
                  ₹{product.salePrice}
                </Typography>
              </Box>

              {/* Icons Section */}
              <Box>
                <IconButton
                  aria-label="add to wishlist"
                  sx={{
                    backgroundColor: '#f37321',
                    color: 'black',
                    borderRadius: '50%',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: 'black'
                    },
                    mr: 1 // Margin-right for spacing between icons
                  }}
                >
                  <AddToWishlistIcon product={product} slug={product.slug} />
                </IconButton>

                <IconButton
                  aria-label="add to cart"
                  sx={{
                    backgroundColor: '#f37321',
                    color: 'black',
                    borderRadius: '50%',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: 'black'
                    }
                  }}
                >
                  <ShoppingCart />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ProductItem;

//   Card,
//   CardContent,
//   CardMedia
// } from '@mui/material'
// import { ShoppingCart } from '@mui/icons-material'
// import AddToWishlistIcon from './AddToWishlistIcon'

// const ProductItem = ({
//   product,
//   color
// }: {
//   product: Product
//   color: string
// }) => {
//   return (
//     <>
//       <Box
//         sx={{
//           marginTop: 5,
//           borderRadius: 3,
//           marginLeft: 1,
//           marginRight: 1,
//           boxShadow: 2,
//           height: '400px', // Fixed height for each product
//           display: 'flex', // Ensures proper alignment of content
//         }}
//       >
//         <Card sx={{ maxWidth: '100%', position: 'relative' }}>
//           <Link href={`/product/${product.slug}`} passHref>
//             {/* Primary product image */}
//             <Box sx={{ position: 'relative' }}>
//               <CardMedia
//                 component='img'
//                 height='200' // Reduced height
//                 image={
//                   product.mainImage
//                     ? `/categories/${product.mainImage}`
//                     : '/product_placeholder.jpg'
//                 }
//                 alt='not found'
//                 sx={{ objectFit: 'cover' }}
//               />
//               {/* Hover image */}
//               <CardMedia
//                 component='img'
//                 height='200' // Reduced height for hover image
//                 image={
//                   product.alternateImage1
//                     ? `/${product.alternateImage1}`
//                     : '/product_placeholder.jpg'
//                 }
//                 alt='Secondary Image 1'
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   opacity: 0,
//                   transition: 'opacity 0.3s ease',
//                   '&:hover': {
//                     opacity: 1
//                   }
//                 }}
//               />
//             </Box>
//           </Link>

//           <CardContent
//             sx={{
//               backgroundColor: '#eee7f2'
//             }}
//           >
//             <Link href={`/product/${product.slug}`} passHref>
//               <Typography
//                 variant='body1'
//                 component='a'
//                 sx={{
//                   textDecoration: 'none',
//                   color: 'black',
//                   textAlign: 'center',
//                   fontWeight: 'bold'
//                 }}
//               >
//                 {product.title}
//               </Typography>
//             </Link>

//             {/* Flex container for price and icons */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between', // Space between price and icons
//                 alignItems: 'center' // Vertically align them
//               }}
//             >
//               {/* Price Section */}
//               <Box>
//                 <Typography
//                   variant='body2'
//                   color='textSecondary'
//                   component='del'
//                   sx={{ marginRight: 2 }}
//                 >
//                   ₹{product.price}
//                 </Typography>
//                 <Typography
//                   variant='body1'
//                   color='textPrimary'
//                   component='span'
//                 >
//                   ₹{product.salePrice}
//                 </Typography>
//               </Box>

//               {/* Icons Section */}
//               <Box>
//                 <IconButton
//                   aria-label='add to wishlist'
//                   sx={{
//                     backgroundColor: '#f37321',
//                     color: 'black',
//                     borderRadius: '50%',
//                     '&:hover': {
//                       color: 'white',
//                       backgroundColor: 'black'
//                     },
//                     mr: 1 // Margin-right for spacing between icons
//                   }}
//                 >
//                   <AddToWishlistIcon product={product} slug={product.slug} />
//                 </IconButton>

//                 <IconButton
//                   aria-label='add to cart'
//                   sx={{
//                     backgroundColor: '#f37321',
//                     color: 'black',
//                     borderRadius: '50%',
//                     '&:hover': {
//                       color: 'white',
//                       backgroundColor: 'black'
//                     }
//                   }}
//                 >
//                   <ShoppingCart />
//                 </IconButton>
//               </Box>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>
//     </>
//   )
// }

// export default ProductItem
