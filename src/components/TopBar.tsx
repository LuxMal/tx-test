'use client';

import {
    Box,
    Button,
    Avatar,
    Tabs,
    Tab,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

export default function TopBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            flexWrap="wrap"
            sx={{ mb: 4 }}
        >
            {/* Partie gauche : Titre + tabs */}
            <Box>
                <Typography variant="h4" fontWeight={800} gutterBottom>
                    Bonjour Paul !
                </Typography>

                <Tabs
                    value={0}
                    TabIndicatorProps={{ style: { display: 'none' } }}
                    sx={{
                        backgroundColor: '#F8F9FB',
                        borderRadius: '8px',
                        minHeight: 'auto',
                        '& .MuiTabs-flexContainer': {
                            gap: 1,
                        },
                        '& .MuiTab-root': {
                            textTransform: 'none',
                            fontWeight: 600,
                            borderRadius: '6px',
                            minHeight: 'auto',
                            px: 2,
                            py: 1,
                            fontSize: '0.95rem',
                            backgroundColor: '#fff',
                            color: '#9CA3AF',
                        },
                        '& .Mui-selected': {
                            backgroundColor: '#E8E9FC',
                            color: '#1F2D7A',
                        },
                    }}
                >
                    <Tab label="Mes prêts" />
                    <Tab label="Mes factures" />
                </Tabs>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1.5}
                sx={{ mt: { xs: 2, md: 0 } }}
            >
                <Avatar
                    alt="Paul Dumartin"
                    src="/avatar.jpg"
                    sx={{ width: 40, height: 40 }}
                />
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: '#1F2D7A',
                        color: 'white',
                        fontWeight: 700,
                        textTransform: 'none',
                        fontSize: '0.9rem',
                        px: 2.5,
                        py: 1,
                        borderRadius: 1,
                        boxShadow: 'none',
                        '&:hover': {
                            bgcolor: '#1F2D7A',
                            boxShadow: 'none',
                        },
                    }}
                >
                    Demander un financement
                </Button>
            </Box>
        </Box>
    );
}
