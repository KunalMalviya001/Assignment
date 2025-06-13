import { useTopSellingPackages } from '../../api/homeApi';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
  Box,
  Button
} from '@mui/material';

const TopSellingPackages = () => {
  const { data, isLoading } = useTopSellingPackages();

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
      {data.map(dest => (
        <Grid item xs={12} sm={6} md={4} key={dest._id}>
          <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image={dest.imageUrl}
              alt={dest.name}
              sx={{
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                objectFit: 'cover',
              }}
            />
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 2 }}>
                <Typography
                  variant="subtitle1"
                  color="#2596be"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
                >
                  {dest.name}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: '#479090',
                    '&:hover': {
                      backgroundColor: '#36898c',
                    },
                    fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 },
                    fontWeight: 'bold',
                    textTransform: 'none'
                  }}
                >
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
