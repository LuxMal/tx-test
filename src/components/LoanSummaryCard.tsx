'use client';
import { Paper, Typography, Button, Box, Stack } from '@mui/material';

export default function LoanSummaryCard({
                                            amount,
                                            loans,
                                        }: {
    amount: number;
    loans: { title: string; status: string }[];
}) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                height: '100%',
            }}
        >
            <Typography variant="subtitle1" fontWeight={600}>
                Mes prêts
            </Typography>

            <Typography variant="h5" fontWeight={700}>
                {amount.toLocaleString()}€
            </Typography>

            <Typography variant="body2" color="text.secondary">
                Montant du prêt en cours
            </Typography>

            <Stack spacing={0.5}>
                {loans.map((loan, i) => (
                    <Typography key={i} variant="body2" color="text.secondary">
                        {loan.title} –{' '}
                        <strong
                            style={{
                                color:
                                    loan.status === 'validé'
                                        ? '#22C55E'
                                        : loan.status === 'attente'
                                            ? '#F59E0B'
                                            : '#6B7280',
                            }}
                        >
                            {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                        </strong>
                    </Typography>
                ))}
            </Stack>

            <Box sx={{ mt: 2 }}>
                <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: 2,
                    }}
                >
                    Créer un nouveau dossier
                </Button>
            </Box>
        </Paper>
    );
}
