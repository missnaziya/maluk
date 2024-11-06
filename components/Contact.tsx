// 'use client'
// // import ENDPOINT from '@/config/appConfig';
// import ENDPOINT from '@/config/appConfig'

// import {
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Box
// } from '@mui/material'
// import axios from 'axios'
// import { useState } from 'react'
// import toast from 'react-hot-toast'

// // Move the Contact definition here
// const Contact = () => (
//   <>
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         mb: 3,
//         p: 2,
//         backgroundColor: '#fff',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         '&:hover': {
//           boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
//         }
//       }}
//     >
//       <i
//         className='ti-home'
//         style={{
//           fontSize: '2rem',
//           color: 'hsl(23.43deg 89.74% 54.12%)',
//           marginRight: '15px'
//         }}
//       />
//       <div>
//         <Typography variant='h6' sx={{ color: 'hsl(23.43deg 89.74% 54.12%)' }}>
//           Address
//         </Typography>
//         <Typography variant='body1'>
//           {' '}
//           E-169 Lower Ground Part 1, Sector 63 G B Nagar, Noida, Gautam Buddha
//           Nagar, Noida, Uttar Pradesh, India, 201301
//         </Typography>
//       </div>
//     </Box>

//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         mb: 3,
//         p: 2,
//         borderRadius: 2,
//         backgroundColor: '#fff',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         '&:hover': {
//           boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
//         }
//       }}
//     >
//       <i
//         className='ti-tablet'
//         style={{
//           fontSize: '2rem',
//           color: 'hsl(23.43deg 89.74% 54.12%)',
//           marginRight: '15px'
//         }}
//       />
//       <div>
//         <Typography variant='h6' sx={{ color: 'hsl(23.43deg 89.74% 54.12%)' }}>
//           Telephone
//         </Typography>
//         <Typography variant='body1'>
//           <a href='tel:+91 8588801711'>+91 8588801711</a>
//         </Typography>
//       </div>
//     </Box>

//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         mb: 3,
//         p: 2,
//         borderRadius: 2,
//         backgroundColor: '#fff',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         '&:hover': {
//           boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
//         }
//       }}
//     >
//       <i
//         className='ti-email'
//         style={{
//           fontSize: '2rem',
//           color: 'hsl(23.43deg 89.74% 54.12%)',
//           marginRight: '15px'
//         }}
//       />
//       <div>
//         <Typography variant='h6' sx={{ color: 'hsl(23.43deg 89.74% 54.12%)' }}>
//           Email Us
//         </Typography>
//         <Typography variant='body1'>
//           <a href='mailto:operations@malukforever.com'>
//             operations@malukforever.com
//           </a>
//         </Typography>
//       </div>
//     </Box>
//   </>
// )

// function ContactUs () {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   })

//   const handleChange = (e: any) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   // {name: 'dsfd', email: 'fdsfsdfsdf@fsf.fdsf', subject: 'sdffdsfsdf', message: 'hgjh'}
//   // const handleSubmit = async (e:any) => {
//   //   e.preventDefault();
//   //   console.log(formData);
//   //   const url = `${ENDPOINT.BASE_URL}/api/contact`;
//   //   const data = formData
//   //   const response = await axios.post(url,data);
//   //   toast.success(response.data.message);

//   // };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault()

//     try {
//       console.log(formData)

//       // Construct the URL for the contact form submission API
//       const url = `${ENDPOINT.BASE_URL}/api/contact`
//       // Data to be sent in the request body
//       const data = formData
//       // Make a POST request to the server
//       const response = await axios.post(url, data)
//       // Display a success message using a toast notification
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       })
//       toast.success(response.data.message)
//     } catch (error: any) {
//       // Handle error and display a toast notification for failure
//       toast.error(error.response?.data?.message || 'Error...')
//     }
//   }

//   return (
//     <Box
//       id='contact-sec'
//       sx={{
//         pt: { xs: 'var(--section-space-mobile)', md: 'var(--section-space)' },
//         pb: { xs: 'var(--section-space-mobile)', md: 'var(--section-space)' }
//       }}
//     >
//       <Container>

//         <Grid container spacing={4} mt={5}>
//           {/* Contact Information */}
//           <Grid item xs={12} md={4 } >
//             <Contact />
//           </Grid>

//           {/* Google Map */}
//           <Grid item xs={12} md={8}>
//             <Box mt={1}>
//               <iframe
//                 src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.385573891785!2d77.38056227693787!3d28.626872965654872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff1773dc645%3A0xa422cb35f324c9fd!2sGround%20E%2C%20E-169%2C%20E%20Block%2C%20Sector%2063%2C%20Noida%2C%20Hazratpur%20Wajidpur%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1730873204429!5m2!1sen!2sin'
//                 width='100%'
//                 height='350'
//                 style={{ border: 0, borderRadius: '8px' }}
//                 loading='lazy'
//               ></iframe>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Contact Form */}
//          <Typography variant="h4" align="center" marginTop={4} gutterBottom>
//           Get in Touch
//         </Typography>
//         <Grid container spacing={4} mt={4} justifyContent='center'>
//           <Grid item xs={12} md={10}>
//           component="form"
//   onSubmit={handleSubmit}
//   sx={{
//     backgroundColor: 'var(--smoke-color)',
//     color: 'var(--body-color)',
//     p: 3,
//     borderRadius: 2,
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'box-shadow 0.3s ease',
//     '&:hover': {
//       boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
//     },
//   }}
// >
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label='Enter your name'
//                     name='name'
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label='Enter email address'
//                     name='email'
//                     type='email'
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label='Enter subject'
//                     name='subject'
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label='Enter your message'
//                     name='message'
//                     multiline
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Grid>

//                 <Grid item xs={12} textAlign='center'>
//                 <Button
//   variant="contained"
//   type="submit"
//   sx={{
//     backgroundColor: 'var(--theme-color)',
//     color: 'var(--white-color)',
//     '&:hover': {
//       backgroundColor: 'var(--theme-color2)',
//     },
//   }}
// >
//   Send Message
// </Button>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default ContactUs

// devyani

'use client'

import ENDPOINT from '@/config/appConfig'
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'

const contactInfo = [
  {
    icon: 'ti-home',
    title: 'Address',
    content:
      'E-169 Lower Ground Part 1, Sector 63 G B Nagar, Noida, Gautam Buddha Nagar, Noida, Uttar Pradesh, India, 201301'
  },
  {
    icon: 'ti-tablet',
    title: 'Telephone',
    content: <a href='tel:+91 8588801711'>+91 8588801711</a>
  },
  {
    icon: 'ti-email',
    title: 'Email Us',
    content: (
      <a href='mailto:operations@malukforever.com'>
        operations@malukforever.com
      </a>
    )
  }
]

const Contact = () => (
  <>
    {contactInfo.map((item, index) => (
      <Box
        key={index}
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 3,
          p: 2,
          borderRadius: '8px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
          }
        }}
      >
        <i
          className={item.icon}
          style={{
            fontSize: '2rem',
            color: 'var(--theme-color2)',
            marginRight: '15px'
          }}
        />
        <div>
          <Typography variant='h6' sx={{ color: 'var(--theme-color2)' }}>
            {item.title}
          </Typography>
          <Typography variant='body1'>{item.content}</Typography>
        </div>
      </Box>
    ))}
  </>
)

function ContactUs () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const url = `${ENDPOINT.BASE_URL}/api/contact`
      const response = await axios.post(url, formData)
      setFormData({ name: '', email: '', subject: '', message: '' })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error...')
    }
  }

  return (
    <Box
      id='contact-sec'
      sx={{
        pt: { xs: 'var(--section-space-mobile)', md: 'var(--section-space)' },
        pb: { xs: 'var(--section-space-mobile)', md: 'var(--section-space)' }
      }}
    >
      <Container>
      <Typography
              variant='h4'
              marginTop={4}
             align='center'
              fontWeight={700}
              gutterBottom
              sx={{
                color: 'var(--theme-color2)'
              }}
            >
              Our Contact Information
            </Typography>
        <Grid
          container
          spacing={4}
          mt={5}
          sx={{ backgroundColor: '#f9f3f0', padding: '10px' }}
        >
          
          <Grid item xs={12} md={5}>
           
            <Typography
              gutterBottom
              sx={{
                color: 'var(--theme-color2)'
              }}
            >
              Have an inquiry or some feedback for us? Fill out the form below
              to contact our team.
            </Typography>
            <Contact />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box mt={4}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2250472704695!2d77.3867099!3d28.623016499999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff1773dc645%3A0xa422cb35f324c9fd!2sGround%20E%2C%20E-169%2C%20E%20Block%2C%20Sector%2063%2C%20Noida%2C%20Hazratpur%20Wajidpur%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1730878078457!5m2!1sen!2sin'
                width='100%'
                height='400'
                style={{ border: 0, borderRadius: '8px' }}
                loading='lazy'
              ></iframe>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant='h4'
          align='center'
          marginTop={4}
          fontWeight={700}
          gutterBottom
          sx={{
            color: 'var(--theme-color2)'
          }}
        >
          Get in Touch
        </Typography>

        <Grid container spacing={4} mt={2} justifyContent='center'>
          <Grid item xs={12} md={10}>
            <Box
              component='form'
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: 'var(--smoke-color)',
                color: 'var(--body-color)',
                p: 5,
                borderRadius: 2,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Enter your name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Enter email address'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Enter subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Enter your message'
                    name='message'
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} textAlign='center'>
                  <Button
                    variant='contained'
                    type='submit'
                    sx={{
                      backgroundColor: 'var(--theme-color2) !important',
                      color: 'var(--white-color)',
                      '&:hover': {
                        backgroundColor: 'var(--theme-color2)'
                      }
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
    </Box>
  )
}

export default ContactUs
