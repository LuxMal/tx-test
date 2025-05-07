'use client';

import { Paper, Typography, Box } from '@mui/material';

export default function LoanAmountCard() {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                width: '100%',
            }}
        >
            <Box>
                <Typography
                    variant="subtitle2"
                    fontWeight={500}
                    color="text.secondary"
                    mb={1}
                >
                    Prêt Société
                </Typography>

                <Typography
                    variant="h4"
                    fontWeight={700}
                    color="#1F2D7A"
                    lineHeight={1.2}
                    mb={0.5}
                >
                    39 234€
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    Montant du prêt en cours
                </Typography>
            </Box>

            <Typography
                variant="body2"
                fontWeight={600}
                color="#22C55E"
                mt={2}
            >
                Validé
            </Typography>
        </Paper>
    );
}
