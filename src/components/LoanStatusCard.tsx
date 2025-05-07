'use client';

import { Box, Typography, Paper, LinearProgress, useMediaQuery, useTheme, Button } from '@mui/material';

export default function StatusCard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: '#fff',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <Typography variant="subtitle1" fontWeight={700}>
                État
            </Typography>

            <Box>
                <Typography variant="body2" color="text.secondary">
                    Prêt Société – <Typography component="span" fontWeight={600} color="#22C55E">Validé</Typography>
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={100}
                    sx={{
                        mt: 1,
                        height: 8,
                        borderRadius: 4,
                        bgcolor: '#D1FAE5',
                        '& .MuiLinearProgress-bar': {
                            bgcolor: '#22C55E',
                        },
                    }}
                />
            </Box>

            <Box>
                <Typography variant="body2" color="text.secondary">
                    Prêt HotDoggs – <Typography component="span" fontWeight={600} color="#3B82F6">En attente</Typography>
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={40}
                    sx={{
                        mt: 1,
                        height: 8,
                        borderRadius: 4,
                        bgcolor: '#DBEAFE',
                        '& .MuiLinearProgress-bar': {
                            bgcolor: '#3B82F6',
                        },
                    }}
                />
            </Box>

            {!isMobile && (
                <Box mt={1}>
                    <Button
                        variant="text"
                        sx={{
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: '#1F2D7A',
                            textTransform: 'none',
                            p: 0,
                        }}
                    >
                        Créer un nouveau dossier
                    </Button>
                </Box>
            )}
        </Paper>
    );
}
