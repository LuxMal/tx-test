'use client';

import {
    ToggleButtonGroup,
    ToggleButton,
    Box,
    useMediaQuery,
    useTheme,
} from '@mui/material';

export default function TransactionTabs() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box mb={3} display="flex" justifyContent='flex-start'>
            <ToggleButtonGroup
                exclusive
                value="actifs"
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    border: 'none',
                }}
            >
                <ToggleButton
                    value="actifs"
                    sx={{
                        px: 4,
                        py: 1,
                        minWidth: isMobile ? '100px' : '150px',
                        fontWeight: 700,
                        fontSize: isMobile ? '0.85rem' : '0.95rem',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 0.5,
                        background: 'linear-gradient(90deg, #4ADE80 0%, #22C55E 100%)',
                        '&.Mui-selected': {
                            background: 'linear-gradient(90deg, #4ADE80 0%, #22C55E 100%)',
                            color: '#fff',
                        },
                        '&:hover': {
                            background: 'linear-gradient(90deg, #34D399 0%, #16A34A 100%)',
                        },
                    }}
                >
                    Actifs
                </ToggleButton>
                <ToggleButton
                    value="attente"
                    sx={{
                        px: 4,
                        py: 1,
                        minWidth: isMobile ? '100px' : '150px',
                        fontWeight: 600,
                        fontSize: isMobile ? '0.85rem' : '0.95rem',
                        borderRadius: 0.5,
                        border: '1px solid #D1D5DB',
                        color: '#374151',
                        backgroundColor: '#fff',
                        '&.Mui-selected': {
                            backgroundColor: '#F9FAFB',
                            border: '1px solid #D1D5DB',
                        },
                    }}
                >
                    En attente (1)
                </ToggleButton>
                <ToggleButton
                    value="clos"
                    sx={{
                        px: 4,
                        py: 1,
                        minWidth: isMobile ? '100px' : '150px',
                        fontWeight: 600,
                        fontSize: isMobile ? '0.85rem' : '0.95rem',
                        borderRadius: 0.5,
                        border: '1px solid #D1D5DB',
                        color: '#374151',
                        backgroundColor: '#fff',
                        '&.Mui-selected': {
                            backgroundColor: '#F9FAFB',
                            border: '1px solid #D1D5DB',
                        },
                    }}
                >
                    Clos
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}
