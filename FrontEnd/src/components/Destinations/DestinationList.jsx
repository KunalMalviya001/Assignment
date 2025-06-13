// This component fetches and displays a list of travel destinations using the useDestinations hook.
// While loading, it shows skeleton placeholders. Once loaded, it displays each destination in a card
// with an image, name, and starting price, using Material UI components for layout and styling.

import { useDestinations } from '../../api/homeApi';
import { Grid, Card, CardContent, CardMedia, Typography, Skeleton, Box } from '@mui/material';

const DestinationList = () => {
  const { data, isLoading } = useDestinations();

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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h7" color='#2596be' fontWeight='bold'>{dest.name}</Typography>
                <Typography variant="body2" sx={{ ml: 5 }}> Starting at</Typography>
                <Typography variant="body2" fontWeight='bold' color='#2596be'>₹{dest.price}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DestinationList;
