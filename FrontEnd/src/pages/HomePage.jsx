// HomePage component serves as the main landing page for the travel website.
// It features an introductory hero section, popular destinations, advantages of booking,
// top-selling tour packages, and customer testimonials. Material UI components are used
// for layout and styling, and custom components are imported for each section.

import { Container, Typography, Box, Button, Link } from '@mui/material';
import DestinationList from '../components/Destinations/DestinationList';
import TopSellingPackages from '../components/TourPackages/TopSellingPackages';
import OurAdvantages from '../components/Advantages/Advantage';
import TestimonialsSection from '../components/Footer/Testimonials';

const HomePage = () => {
  return (
    <>
    <Box>
      {/* Image / Intro section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)
          ), url(https://imgs.search.brave.com/T8V9TEpuwy7BpnaSBeuj9H39MbVJ2ivFOs5LEpIQ-P8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAy/MDIxNzA1MC9waG90/by90cmF2ZWwtdG8t/ZXVyb3BlLXRvdXJp/c3QtbG9va2luZy1h/dC1tYXAtb24tdGhl/LXN0cmVldC1zdW1t/ZXItaG9saWRheXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWdQQWZCbVdGWmpV/QmJpbkd5VEh6aWc3/a3RWN3hrcjlfeVMw/U3RmZ1g1REU9)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
          px: 2,
        }}
      >
        <Box sx={{ marginLeft: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
            Discover Your Next
            <br />
            Adventure
          </Typography>

          <Typography variant="h6" sx={{ mb: 4 }}>
            Choose from our curated experiences, customized for every kind of traveler.
          </Typography>

          <Button variant="contained"
            sx={{
              backgroundColor: '#fbc02d', // custom yellow color
              '&:hover': {
                backgroundColor: '#f9a825', // darker on hover
              },
              color: '#000', // black text
              fontWeight: 'bold',
            }} size="large">
            Book Now
          </Button>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,  // spacing from bottom
            left: 16,    // spacing from left
            backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent bg for readability
            padding: '8px 16px',
            borderRadius: 2,
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            maxWidth: 'calc(100% - 32px)',
            fontWeight: 'medium',
            fontSize: '1rem',
          }}
        >
          <Link href="/booking" underline="hover" color="inherit" sx={{ cursor: 'pointer', fontWeight: 'medium' }}>
            Easy Booking
          </Link>
          <Typography sx={{ mx: 1 }}>|</Typography>
          <Link href="/destinations" underline="hover" color="inherit" sx={{ cursor: 'pointer', fontWeight: 'medium' }}>
            Curated Destinations
          </Link>
          <Typography sx={{ mx: 1 }}>|</Typography>
          <Link href="/support" underline="hover" color="inherit" sx={{ cursor: 'pointer', fontWeight: 'medium' }}>
            Trusted Support
          </Link>
        </Box>
      </Box>

      {/* Content Sections */}
      <Container sx={{ mt: 10, mb: 10 , textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color='#36898c' fontWeight='bold'>
          Explore Most Popular Destinations
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize:'small', maxWidth: 400, mx: 'auto' }}>
          Plan your perfect trip with our most loved and best-selling tour packages.
        </Typography>
        <DestinationList />
      </Container>
    </Box >

    <Box  sx={{ backgroundColor:'#479090', mt: 10, mb: 10 , textAlign: 'center' }}>
        <OurAdvantages />
      </Box>

      <Container sx={{ mt: 10, mb: 10 , textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color='#36898c' fontWeight='bold'>
          Top Selling Tour Packages of India
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize:'small', maxWidth: 400, mx: 'auto' }}>
          Stay updated with our latest news and happenings through Informe.
        </Typography>
        <TopSellingPackages />
      </Container>

      <Container sx={{ mt: 10, mb: 10 , textAlign: 'center' }}>
        <TestimonialsSection />
      </Container>
    </>
  );
};

export default HomePage;
