// This component displays a testimonials section with user feedback cards.
// Each card shows the user's avatar, testimonial text, name, and title.
// Material UI components are used for layout and styling.

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
    <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
            Testimonials
        </Typography>

        <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
                <Grid width='31%' item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ p: 3, borderRadius: 3, height: '80%', boxShadow: 3 }}>
                        <Box sx={{ display: 'flex', mb: 2 }}>
                            <Avatar
                                src={testimonial.image}
                                alt={testimonial.name}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>
                        <CardContent>
                            <Box width='20'>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {testimonial.text}
                        </Typography>
                            </Box>
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
  </Container >
);

export default TestimonialsSection;
