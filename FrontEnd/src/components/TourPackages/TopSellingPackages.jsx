// This component fetches and displays the top-selling tour packages using the useTopSellingPackages hook.
// While loading, it shows skeleton placeholders. Once loaded, it displays each package in a card
// with an image, name, and a "VIEW DETAIL" button, using Material UI components for layout and styling.

import { useTopSellingPackages } from '../../api/homeApi';
import { Grid, Card, CardContent, CardMedia, Typography, Skeleton, Box, Button } from '@mui/material';

const TopSellingPackages = () => {
  const { data, isLoading } = useTopSellingPackages();

  if (isLoading) {
    return (
      <Grid container spacing={4} justifyContent="center">
        {[...Array(6)].map((_, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} width="25%" >
            <Skeleton variant="rectangular" height={200} />
            <Skeleton width="60%" />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={4} justifyContent="center">
      {data.map(dest => (
        <Grid width="31%" item xs={12} sm={6} md={4} key={dest._id}>
          <Card>
            <CardMedia sx={{ borderRadius: '12px' }} component="img" height="200" image={dest.imageUrl} alt={dest.name} />
            <CardContent>
              <Box sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h7" color='#2596be' fontWeight='bold'>{dest.name}</Typography>
              </Box>
              <Box sx={{ justifyContent: 'space-between', alignItems: 'center', justifyItems: 'center', mt: 2 }}>
                <Button variant="contained"
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: '#479090',
                    '&:hover': {
                      backgroundColor: '#36898c', // darker on hover
                    },
                    color: '#fff',
                    fontWeight: 'bold',
                  }} size="large">
                  VIEW DETAIL
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopSellingPackages;
