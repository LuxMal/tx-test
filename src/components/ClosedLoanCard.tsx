'use client';

import { Paper, Typography, Box, useTheme, useMediaQuery } from '@mui/material';

export default function ClosedLoanCard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: 2,
                width: '100%',
                maxWidth: isMobile ? '100%' : 260,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                minHeight: 240,
            }}
        >
            <Typography variant="body2" fontWeight={600} mb={1}>
                Clôturé
            </Typography>

            <Box mt={1} display="flex" alignItems="center" justifyContent="center" fontSize="2rem">
                🏆
            </Box>

            <Box mt={2}>
                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                    Prêt Société
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Estimation de clôture du dossier au : <br />
                    <Typography component="span" fontWeight={600} color="text.primary">
                        13/06/2022
                    </Typography>
                </Typography>
            </Box>
        </Paper>
    );
}
