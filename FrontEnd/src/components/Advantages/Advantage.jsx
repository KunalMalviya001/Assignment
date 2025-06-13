import { Container, Typography, Grid, Box, useTheme, useMediaQuery } from '@mui/material';

const advantages = [
  {
    title: 'Save Time',
    description: 'No more switching for packages or plans.',
    image: 'https://img.icons8.com/?size=100&id=423&format=png&color=000000',
  },
  {
    title: 'Save Money',
    description: 'Compare, negotiate, and choose the best.',
    image: 'https://img.icons8.com/?size=100&id=209&format=png&color=000000',
  },
  {
    title: 'Trusted Network',
    description: 'A Trusted Network of 7000+ Travel Agents',
    image: 'https://img.icons8.com/?size=100&id=MzRlBb0DF1qc&format=png&color=000000',
  },
  {
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips from Trusted Agents',
    image: 'https://img.icons8.com/?size=100&id=37917&format=png&color=000000',
  },
];

const OurAdvantages = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ py: { xs: 4, sm: 6 }, color: '#edf5f5' }}>
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        fontSize={{ xs: '1.8rem', sm: '2.5rem' }}
      >
        Our Advantages
      </Typography>

      <Typography
        variant="body1"
        textAlign="center"
        sx={{
          maxWidth: 600,
          mx: 'auto',
          mb: 4,
          color: '#edf5f5',
          fontSize: { xs: '0.9rem', sm: '1rem' },
          px: { xs: 2, sm: 0 },
        }}
      >
        You can rely on our experience and the quality of services we provide.
        <br />
        Here are other reasons to book tours at Treat Holidays
      </Typography>

      <Grid container spacing={isMobile ? 3 : 4} justifyContent="center">
        {advantages.map(({ title, description, image }) => (
          <Grid item xs={12} sm={6} md={3} key={title}>
            <Box
              sx={{
                borderRadius: 2,
                p: { xs: 2, sm: 3 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: 'rgba(255,255,255,0.05)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  mb: 2,
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  width: { xs: 100, sm: 130, md: 160 },
                  height: { xs: 100, sm: 130, md: 160 },
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={image}
                  alt={title}
                  style={{
                    width: isMobile ? '60px' : '80px',
                    height: isMobile ? '60px' : '80px',
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                fontSize={{ xs: '1rem', sm: '1.1rem' }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#edf5f5',
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                }}
              >
                {description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurAdvantages;
