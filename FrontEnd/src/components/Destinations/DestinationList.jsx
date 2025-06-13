import { useDestinations } from '../../api/homeApi';
import { Grid, Card, CardContent, CardMedia, Typography, Skeleton, Box } from '@mui/material';

const DestinationList = () => {
  const { data, isLoading } = useDestinations();

  if (isLoading) {
    return (
      <Grid container spacing={4} justifyContent="center">
        {[...Array(6)].map((_, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
            <Skeleton width="60%" sx={{ mt: 1 }} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={4} justifyContent="center">
      {data.map((dest) => (
        <Grid item xs={12} sm={6} md={4} key={dest._id}>
          <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image={dest.imageUrl}
              alt={dest.name}
              sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            />
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography variant="subtitle1" fontWeight="bold" color="#2596be">
                  {dest.name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    Starting at
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color="#2596be">
                    ₹{dest.price}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DestinationList;
