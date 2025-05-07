'use client';

import { Paper, Typography, Box } from '@mui/material';

export default function TransactionAmountCard() {
    return (
        <Paper
            sx={{
        p: 3,
            borderRadius: 3,
            backgroundColor: '#ffffff',
            textAlign: 'center',
            height: '100%',
    }}
>
    <Typography variant="body2" color="text.secondary">
        Montant dernière transaction
    </Typography>
    <Typography variant="h4" fontWeight={700} color="primary.main">
        80K
    </Typography>
    <Box mt={1}>
    <img src="/coin.svg" alt="Pièce" width={30} />
    </Box>
    </Paper>
);
}
