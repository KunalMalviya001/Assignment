import { Container, Typography, Box, Button, Link, useTheme, useMediaQuery } from '@mui/material';
import DestinationList from '../components/Destinations/DestinationList';
import TopSellingPackages from '../components/TourPackages/TopSellingPackages';
import OurAdvantages from '../components/Advantages/Advantage';
import TestimonialsSection from '../components/Footer/Testimonials';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {/* Hero Section */}
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
          justifyContent: 'center',
          px: 2,
          py: { xs: 10, sm: 0 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '100%', sm: '60%' },
            color: '#fff',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '3rem' },
              mb: 2,
            }}
          >
            Discover Your Next
            <br />
            Adventure
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Choose from our curated experiences, customized for every kind of traveler.
          </Typography>

          <Button
            variant="contained"
            size="large"
            fullWidth={isMobile}
            sx={{
              backgroundColor: '#fbc02d',
              color: '#000',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#f9a825',
              },
            }}
          >
            Book Now
          </Button>
        </Box>

        {/* Quick Links */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
            backgroundColor: 'rgba(0,0,0,0.5)',
            p: 2,
            borderRadius: 2,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: { sm: 'flex-start' },
            gap: 1,
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
        >
          <Link href="/booking" underline="hover" color="inherit" sx={{ fontWeight: 500 }}>
            Easy Booking
          </Link>
          <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>|</Typography>
          <Link href="/destinations" underline="hover" color="inherit" sx={{ fontWeight: 500 }}>
            Curated Destinations
          </Link>
          <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>|</Typography>
          <Link href="/support" underline="hover" color="inherit" sx={{ fontWeight: 500 }}>
            Trusted Support
          </Link>
        </Box>
      </Box>

      {/* Destinations Section */}
      <Container sx={{ mt: 10, mb: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color="#36898c" fontWeight="bold" fontSize={{ xs: '1.5rem', sm: '2rem' }}>
          Explore Most Popular Destinations
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, fontSize: '0.9rem', maxWidth: 400, mx: 'auto' }}
        >
          Plan your perfect trip with our most loved and best-selling tour packages.
        </Typography>
        <DestinationList />
      </Container>

      {/* Advantages Section */}
      <Box sx={{ backgroundColor: '#479090', mt: 10, py: 6, px: 2 }}>
        <OurAdvantages />
      </Box>

      {/* Top Selling Packages Section */}
      <Container sx={{ mt: 10, mb: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color="#36898c" fontWeight="bold" fontSize={{ xs: '1.5rem', sm: '2rem' }}>
          Top Selling Tour Packages of India
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, fontSize: '0.9rem', maxWidth: 400, mx: 'auto' }}
        >
          Stay updated with our latest news and happenings through Informe.
        </Typography>
        <TopSellingPackages />
      </Container>

      {/* Testimonials Section */}
      <Container sx={{ mt: 10, mb: 10 }}>
        <TestimonialsSection />
      </Container>
    </>
  );
};

export default HomePage;
