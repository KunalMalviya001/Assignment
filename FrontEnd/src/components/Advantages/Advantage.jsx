// This component displays a list of advantages for booking tours with Treat Holidays.
// It uses Material UI components for layout and styling, and maps over a list of advantages
// to render each one with an icon, title, and description.

import { Container, Typography, Grid, Box } from '@mui/material';

const advantages = [
  {
    title: 'Save Time',
    description: 'No more switching for packages or plans.',
    image:'https://img.icons8.com/?size=100&id=423&format=png&color=000000'
  },
  {
    title: 'Save Money',
    description: 'Compare, negotiate, and choose the best.',
    image: 'https://img.icons8.com/?size=100&id=209&format=png&color=000000'
  },
  {
    title: 'Trusted Network',
    description: 'A Trusted Network of 7000+ Travel Agents',
    image: 'https://img.icons8.com/?size=100&id=MzRlBb0DF1qc&format=png&color=000000'
  },
  {
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips from Trusted Agents',
    image: 'https://img.icons8.com/?size=100&id=37917&format=png&color=000000'
  },
];

const OurAdvantages = () => (
  <Container sx={{ py: 6, color:'#edf5f5' }} >
    <Typography variant="h2" gutterBottom fontWeight="bold" textAlign="center" > 
      Our Advantages
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      textAlign="center"
      sx={{ maxWidth: 600, mx: 'auto', mb: 4, color:'#edf5f5' }}

    >
      You can rely on our experience and the quality of services we provide.<br />
      Here are other reasons to book tours at Treat Holidays
    </Typography>

    <Grid container spacing={4} justifyContent="center" >
      {advantages.map(({ title, description, image }) => (
        <Grid key={title} width='20%' item xs={12} sm={6} md={4} paddingBottom="40px">
          <Box sx={{ borderRadius: 2, p: 3, height: '100%', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', mb: 2, borderRadius: '50%', backgroundColor: '#f0f0f0', width: 200, height: 200, alignItems: 'center', justifyContent: 'center' }}>
              <img src={image} alt={title} width="100" height="100" />
            </Box>
            <Typography variant="h6"  fontWeight="bold" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" whiteSpace="pre-line" sx={{ color:'#edf5f5'}}>
              {description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default OurAdvantages;
