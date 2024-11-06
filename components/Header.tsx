// 'use client'
// import { usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import HeaderTop from './HeaderTop'
// import Image from 'next/image'
// import Link from 'next/link'
// import { FaBell } from 'react-icons/fa6'

// import CartElement from './CartElement'
// import HeartElement from './HeartElement'
// import { signOut, useSession } from 'next-auth/react'
// import toast from 'react-hot-toast'
// import { useWishlistStore } from '@/app/_zustand/wishlistStore'
// import ENDPOINT from '../config/appConfig'

// // MUI Components
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Avatar,
//   Menu,
//   MenuItem,
//   Grid,
//   Button
// } from '@mui/material'
// import CategoryMenu from './CategoryMenu' // assuming this component lists the products

// const Header = () => {
//   const { data: session } = useSession()
//   const pathname = usePathname()
//   const { setWishlist, wishQuantity } = useWishlistStore()
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
//   const [showCategoryList, setShowCategoryList] = useState(false)

//   const handleLogout = () => {
//     setTimeout(() => signOut(), 1000)
//     toast.success('Logout successful!')
//   }

//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleMenuClose = () => {
//     setAnchorEl(null)
//   }

//   // Getting all wishlist items by user id
//   const getWishlistByUserId = async (id: string) => {
//     try {
//       const response = await fetch(`${ENDPOINT.BASE_URL}/api/wishlist/${id}`, {
//         cache: 'no-store'
//       })
//       const wishlist = await response.json()
//       const productArray = wishlist.map((item: any) => ({
//         id: item?.product?.id,
//         title: item?.product?.title,
//         price: item?.product?.price,
//         image: item?.product?.mainImage,
//         slug: item?.product?.slug,
//         stockAvailabillity: item?.product?.inStock
//       }))

//       setWishlist(productArray)
//     } catch (error) {
//       console.error('Error fetching wishlist:', error)
//     }
//   }

//   // Getting user by email to get user id
//   const getUserByEmail = async () => {
//     if (session?.user?.email) {
//       try {
//         const response = await fetch(
//           `${ENDPOINT.BASE_URL}/api/users/email/${session.user.email}`,
//           {
//             cache: 'no-store'
//           }
//         )
//         const data = await response.json()
//         getWishlistByUserId(data?.id)
//       } catch (error) {
//         console.error('Error fetching user:', error)
//       }
//     }
//   }

//   useEffect(() => {
//     getUserByEmail()
//   }, [session?.user?.email])

//   // Toggle product list visibility
//   const handleMouseEnter = () => {
//     setShowCategoryList(true) // Show category list on hover
//   }

//   const handleMouseLeave = () => {
//     setShowCategoryList(false) // Hide category list when not hovering
//   }

//   // Hide category list when product is selected
//   const handleProductSelection = () => {
//     setShowCategoryList(false) // hide the category list
//   }

//   const Header = () => {
//     // Define the state for controlling dropdown visibility
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     // Functions to handle hover state for dropdown
//     const handleMouseEnter = () => {
//       setDropdownOpen(true); // Show the dropdown
//     };

//     const handleMouseLeave = () => {
//       setDropdownOpen(false); // Hide the dropdown
//     };

//   return (
//     <AppBar position='static' color='default'>
//       <HeaderTop />

//       {!pathname.startsWith('/admin') ? (
//         <>
//           <Toolbar sx={{ minHeight: '40px' }}>
//             <Grid container alignItems='center' justifyContent='space-between'>
//               <Grid item xs={12} md={3}>
//                 <Link href='/' passHref>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       cursor: 'pointer'
//                     }}
//                   >
//                     <Image
//                       src='/logo.png'
//                       width={100}
//                       height={100}
//                       alt='Maluk logo'
//                     />
//                   </Box>
//                 </Link>
//               </Grid>

//               <Grid item>
//                 <Box display='flex' alignItems='center'>
//                   <Button
//                     component={Link}
//                     href='/'
//                     sx={{
//                       fontSize: '18px',
//                       padding: '5px 8px',
//                       color: '#ab6a49'
//                     }}
//                   >
//                     Home
//                   </Button>

//                   <Box
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     sx={{ position: 'relative' }}
//                   >
//                     <Button
//                       sx={{
//                         fontSize: '18px',
//                         padding: '5px 8px',
//                         color: '#ab6a49',
//                         '&:hover': { backgroundColor: '#f4f1e1' }
//                       }}
//                     >
//                       Category
//                     </Button>

//                     {dropdownOpen && (
//                       <Box
//                         sx={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: 0,
//                           backgroundColor: 'white',
//                           boxShadow: 2,
//                           borderRadius: '8px',
//                           width: '200px',
//                           zIndex: 10
//                         }}
//                       >
//                         {/* Add your category options here */}
//                         <Button
//                           sx={{
//                             width: '100%',
//                             padding: '10px',
//                             textAlign: 'left'
//                           }}
//                           component={Link}
//                           href='/category/1'
//                         >
//                           Skin Care
//                         </Button>
//                         <Button
//                           sx={{
//                             width: '100%',
//                             padding: '10px',
//                             textAlign: 'left'
//                           }}
//                           component={Link}
//                           href='/category/2'
//                         >
//                           Personal Care
//                         </Button>
//                         <Button
//                           sx={{
//                             width: '100%',
//                             padding: '10px',
//                             textAlign: 'left'
//                           }}
//                           component={Link}
//                           href='/category/3'
//                         >
//                           Hair Care
//                         </Button>
//                         <Button
//                           sx={{
//                             width: '100%',
//                             padding: '10px',
//                             textAlign: 'left'
//                           }}
//                           component={Link}
//                           href='/category/4'
//                         >
//                           Hair Accessories
//                         </Button>
//                       </Box>
//                     )}
//                   </Box>

//                   <Button
//                     component={Link}
//                     href='/shop/new-arrivals'
//                     sx={{
//                       fontSize: '18px',
//                       padding: '5px 8px',
//                       color: '#ab6a49'
//                     }}
//                   >
//                     Shop
//                   </Button>

//                   <Button
//                     component={Link}
//                     href='/support/contact-us'
//                     sx={{
//                       fontSize: '18px',
//                       padding: '5px 8px',
//                       color: '#ab6a49'
//                     }}
//                   >
//                     Contact Us
//                   </Button>
//                 </Box>
//               </Grid>

//               <Grid
//                 item
//                 xs={12}
//                 md={3}
//                 display='flex'
//                 justifyContent='flex-end'
//                 gap={3}
//               >
//                 <HeartElement wishQuantity={wishQuantity} />
//                 <CartElement />
//               </Grid>
//             </Grid>
//           </Toolbar>
//           {showCategoryList && (
//             <Box
//               sx={{
//                 position: 'absolute',
//                 zIndex: 2,
//                 marginTop: '90px',
//                 width: '100%'
//               }} // Position and stacking
//             >
//               <CategoryMenu
//                 onProductSelect={handleProductSelection}
//                 handleMouseEnter={handleMouseEnter}
//                 handleMouseLeave={handleMouseLeave}
//               />
//             </Box>
//           )}
//         </>
//       ) : (
//         <Toolbar>
//           <Grid container alignItems='center' justifyContent='space-between'>
//             <Grid item>
//               <Link href='/' passHref>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   <Image
//                     src='/logo.png'
//                     width={130}
//                     height={130}
//                     alt='maluk logo'
//                   />
//                 </Box>
//               </Link>
//             </Grid>

//             <Grid item display='flex' alignItems='center'>
//               <IconButton>
//                 <FaBell className='text-xl' />
//               </IconButton>

//               <IconButton onClick={handleMenuOpen}>
//                 <Avatar src='/logo.png' alt=' profile photo' />
//               </IconButton>

//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 <MenuItem component={Link} href='/admin'>
//                   Dashboard
//                 </MenuItem>
//                 <MenuItem component={Link} href='/profile'>
//                   Profile
//                 </MenuItem>
//                 <MenuItem onClick={handleLogout}>Logout</MenuItem>
//               </Menu>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       )}
//     </AppBar>
//   );
// };

// export default Header;
// devyani

'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import HeaderTop from './HeaderTop'
import Image from 'next/image'
import Link from 'next/link'
import { FaBell } from 'react-icons/fa6'

import CartElement from './CartElement'
import HeartElement from './HeartElement'
import { signOut, useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useWishlistStore } from '@/app/_zustand/wishlistStore'
import ENDPOINT from '../config/appConfig'

// MUI Components
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Grid,
  Button
} from '@mui/material'
import CategoryMenu from './CategoryMenu' // assuming this component lists the products

const Header = () => {
  const { data: session } = useSession()
  const pathname = usePathname()
  const { setWishlist, wishQuantity } = useWishlistStore()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [showCategoryList, setShowCategoryList] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false) // Define dropdown state

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000)
    toast.success('Logout successful!')
  }

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  // Getting all wishlist items by user id
  const getWishlistByUserId = async (id: string) => {
    try {
      const response = await fetch(`${ENDPOINT.BASE_URL}/api/wishlist/${id}`, {
        cache: 'no-store'
      })
      const wishlist = await response.json()
      const productArray = wishlist.map((item: any) => ({
        id: item?.product?.id,
        title: item?.product?.title,
        price: item?.product?.price,
        image: item?.product?.mainImage,
        slug: item?.product?.slug,
        stockAvailabillity: item?.product?.inStock
      }))

      setWishlist(productArray)
    } catch (error) {
      console.error('Error fetching wishlist:', error)
    }
  }

  // Getting user by email to get user id
  const getUserByEmail = async () => {
    if (session?.user?.email) {
      try {
        const response = await fetch(
          `${ENDPOINT.BASE_URL}/api/users/email/${session.user.email}`,
          {
            cache: 'no-store'
          }
        )
        const data = await response.json()
        getWishlistByUserId(data?.id)
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }
  }

  useEffect(() => {
    getUserByEmail()
  }, [session?.user?.email])

  // Toggle product list visibility
  const handleMouseEnter = () => {
    setShowCategoryList(true) // Show category list on hover
  }

  const handleMouseLeave = () => {
    setShowCategoryList(false) // Hide category list when not hovering
  }

  // Hide category list when product is selected
  const handleProductSelection = () => {
    setShowCategoryList(false) // hide the category list
  }

  // Functions to handle hover state for dropdown
  const handleDropdownEnter = () => {
    setDropdownOpen(true) // Show the dropdown
  }

  const handleDropdownLeave = () => {
    setDropdownOpen(false) // Hide the dropdown
  }

  return (
    <AppBar position='static' sx={{ backgroundColor: '#f9f3f0' }}>
      <HeaderTop />

      {!pathname.startsWith('/admin') ? (
        <>
          <Toolbar sx={{ minHeight: '40px' }}>
            <Grid container alignItems='center' justifyContent='space-between'>
              <Grid item xs={12} md={3}>
                <Link href='/' passHref>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Image
                      src='/logo.png'
                      width={100}
                      height={100}
                      alt='Maluk logo'
                    />
                  </Box>
                </Link>
              </Grid>

              <Grid item>
                <Box display='flex' alignItems='center'>
                  <Button
                    component={Link}
                    href='/'
                    sx={{
                      fontSize: '18px',
                      padding: '10px',
                      color: '#ab6a49',
                      backgroundColor: '#f9f3f0'
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    component={Link}
                    href='/about-us'
                    sx={{
                      fontSize: '18px',
                      padding: '10px',
                      color: '#ab6a49',
                      backgroundColor: '#f9f3f0'
                    }}
                  >
                    About Us
                  </Button>

                  <Box
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    sx={{ position: 'relative' }}
                  >
                    <Button
                      sx={{
                        fontSize: '18px',
                        padding: '10px',
                        color: '#ab6a49',
                        '&:hover': { backgroundColor: '#f4f1e1' }
                      }}
                    >
                      Shop
                    </Button>

                    {dropdownOpen && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          backgroundColor: 'white',
                          boxShadow: 2,
                          borderRadius: '8px',
                          width: '200px',
                          zIndex: 10,
                          display: 'flex', // Use flexbox layout
                          flexDirection: 'column', // Align items vertically
                          justifyContent: 'flex-start' // Ensure items are aligned to the start
                        }}
                      >
                        <Button
                          sx={{
                            width: '100%',
                            padding: '10px',
                            textAlign: 'start', // Align text to the start
                            color: 'var(--theme-color2)', // Apply color to text
                            '&:hover': {
                              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Shadow on hover
                              backgroundColor: 'rgba(0, 0, 0, 0.05)' // Slight background change on hover
                            }
                          }}
                          component={Link}
                          href='/category/skin-care'
                        >
                          Skin Care
                        </Button>
                        <Button
                          sx={{
                            width: '100%',
                            padding: '10px',
                            textAlign: 'start', // Align text to the start
                            color: 'var(--theme-color2)', // Apply color to text
                            '&:hover': {
                              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Shadow on hover
                              backgroundColor: 'rgba(0, 0, 0, 0.05)' // Slight background change on hover
                            }
                          }}
                          component={Link}
                          href='/category/personal-care'
                        >
                          Personal Care
                        </Button>
                        <Button
                          sx={{
                            width: '100%',
                            padding: '10px',
                            textAlign: 'start', // Align text to the start
                            color: 'var(--theme-color2)', // Apply color to text
                            '&:hover': {
                              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Shadow on hover
                              backgroundColor: 'rgba(0, 0, 0, 0.05)' // Slight background change on hover
                            }
                          }}
                          component={Link}
                          href='/category/hair-care'
                        >
                          Hair Care
                        </Button>
                        <Button
                          sx={{
                            width: '100%',
                            padding: '10px',
                            textAlign: 'start', // Align text to the start
                            color: 'var(--theme-color2)', // Apply color to text
                            '&:hover': {
                              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Shadow on hover
                              backgroundColor: 'rgba(0, 0, 0, 0.05)' // Slight background change on hover
                            }
                          }}
                          component={Link}
                          href='/category/hair-accessories'
                        >
                          Hair Accessories
                        </Button>
                      </Box>
                    )}
                  </Box>

                  <Button
                    component={Link}
                    href='/blog'
                    sx={{
                      fontSize: '18px',
                      padding: '10px',
                      color: '#ab6a49'
                    }}
                  >
                    Blog
                  </Button>
                  <Button
                    component={Link}
                    href='/gallery'
                    sx={{
                      fontSize: '18px',
                      padding: '10px',
                      color: '#ab6a49'
                    }}
                  >
                    Gallery
                  </Button>

                  <Button
                    component={Link}
                    href='/support/contact-us'
                    sx={{
                      fontSize: '18px',
                      padding: '10px',
                      color: '#ab6a49'
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={3}
                display='flex'
                justifyContent='flex-end'
                gap={3}
              >
                <HeartElement wishQuantity={wishQuantity} />
                <CartElement />
              </Grid>
            </Grid>
          </Toolbar>
          {showCategoryList && (
            <Box
              sx={{
                position: 'absolute',
                zIndex: 2,
                marginTop: '90px',
                width: '100%'
              }}
            >
              <CategoryMenu
                onProductSelect={handleProductSelection}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            </Box>
          )}
        </>
      ) : (
        <Toolbar>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item>
              <Link href='/' passHref>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Image
                    src='/logo.png'
                    width={130}
                    height={130}
                    alt='maluk logo'
                  />
                </Box>
              </Link>
            </Grid>

            <Grid item display='flex' alignItems='center'>
              <IconButton>
                <FaBell className='text-xl' />
              </IconButton>

              <IconButton onClick={handleMenuOpen}>
                <Avatar src='/logo.png' alt=' profile photo' />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} href='/admin'>
                  Dashboard
                </MenuItem>
                <MenuItem component={Link} href='/profile'>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      )}
    </AppBar>
  )
}

export default Header
