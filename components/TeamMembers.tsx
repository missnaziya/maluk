import { Box, Container, Typography, Grid, Paper } from '@mui/material';


interface member {
    name: string;
    role: string;
    image: string;
  }


const TeamCard: React.FC<member> = ({ name , role, image }) => (
    
  <Paper
    elevation={3}
    sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}
  >
    <img
      src={image}
      alt={name}
      style={{
        width: '100%',
        borderRadius: '10px',
        marginBottom: '1rem',
      }}
    />
    <Typography variant="h6" gutterBottom>
      {name}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {role}
    </Typography>
  </Paper>
);

const TeamMembers = () => {
  const team = [
    { name: 'Rajat Thakur', role: 'Graphic Designer', image: '/assets/images/about/.jpeg' },
    { name: 'Vishal Tyagi', role: 'SEO', image: '/assets/images/about/.jpg' },
    { name: 'Naziya Begum', role: 'Backend Developer', image: '/assets/images/about/.jpg' },
    { name: 'Devyani Verma', role: 'Frontend Developer', image: '/assets/images/about/.jpg' },
  ];

  return (
    <Box py={5}>
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TeamCard {...member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamMembers;
