'use client';

import { Paper, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function DashboardHeader() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const cardStyle = {
        width: { xs: '100%', sm: '100%', md: 190 },
        flexShrink: 0,
        p: 3,
        borderRadius: 3,
        minHeight: 180,
        bgcolor: '#fff',
        boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    return (
        <Box mb={4}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                Mon compte
            </Typography>

            <Box
                display="flex"
                flexWrap="wrap"
                gap={5}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
                <Paper sx={cardStyle}>
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Typography fontWeight={600}>Paul Dumartin</Typography>
                            <Typography variant="body2" color="text.secondary">
                                14 rue du Louvre<br />PARIS 75001
                            </Typography>
                        </Box>
                        <EditIcon sx={{ color: '#5C5C5C' }} />
                    </Box>
                </Paper>

                <Paper sx={{ ...cardStyle, alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">Segment</Typography>
                    <Typography fontWeight={700} fontSize="1.25rem" color="#1F2D7A">RET</Typography>
                </Paper>

                <Paper sx={{ ...cardStyle, alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">Évaluation des risques</Typography>
                    <Typography fontWeight={600} color="#22C55E">Risques faible</Typography>
                    <Typography fontWeight={700} fontSize="1.5rem" color="#22C55E">B</Typography>
                </Paper>

                <Paper sx={cardStyle}>
                    <Typography variant="subtitle1" fontWeight={600}>Évaluation des risques</Typography>
                    <Typography variant="body2" fontWeight={600} color="#22C55E" mt={1}>
                        Risques faible
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                        <Typography variant="body2" color="text.secondary">Score risque</Typography>
                        <Typography fontWeight={700} sx={{ ml: 'auto', color: '#10B981' }}>B</Typography>
                    </Box>
                    <Box mt={2} sx={{
                        height: 12,
                        borderRadius: 6,
                        background: 'linear-gradient(to right, #22C55E 0%, #FACC15 50%, #F87171 100%)',
                        position: 'relative',
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            left: '35%',
                            top: -4,
                            width: 8,
                            height: 20,
                            backgroundColor: '#1E3A8A',
                            borderRadius: 2,
                        }} />
                    </Box>
                </Paper>

                <Paper sx={{ ...cardStyle, alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        Montant dernière transaction
                    </Typography>
                    <Typography variant="h4" fontWeight={700} color="#1F2D7A">80K</Typography>
                    <Box mt={1}><img src="/coin.svg" alt="Pièce" width={30} /></Box>
                </Paper>
            </Box>
        </Box>
    );
}
