import { Box, Button, Typography, Container } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Typography variant="h3" fontWeight={700} color="primary" gutterBottom>
        Notre intérêt, c’est le vôtre.
      </Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 600, mb: 4 }}>
        Simple, efficace et rapide...
      </Typography>
      <Box mt={4}>
        <Link href="/dashboard">
          <Button variant="contained" color="primary">
            Se connecter
          </Button>
        </Link>
      </Box>
    </Container>
  );
}