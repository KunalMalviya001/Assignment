import { Container, Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const testimonials = [
  {
    text: `Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`,
    name: 'John Doe',
    title: 'CEO, Design Corp',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    text: `Placeholder text is commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`,
    name: 'Jane Smith',
    title: 'Marketing Head, Bright Media',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    text: `Without relying on meaningful content, placeholder text shows the form of a document or a typeface.`,
    name: 'Alex Johnson',
    title: 'Product Designer, UI Studio',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
];

const TestimonialsSection = () => (
  <Container sx={{ py: { xs: 4, sm: 6 } }}>
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      fontWeight="bold"
      fontSize={{ xs: '1.8rem', sm: '2.25rem' }}
    >
      Testimonials
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              height: '100%',
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: { xs: 64, sm: 80 }, height: { xs: 64, sm: 80 } }}
              />
            </Box>
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }}
              >
                {testimonial.text}
              </Typography>
              <Typography variant="h6" fontWeight="medium">
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {testimonial.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default TestimonialsSection;
