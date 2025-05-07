import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1F267E',
        },
        secondary: {
            main: '#E6E6FA',
        },
        success: {
            main: '#26A65B',
        },
        warning: {
            main: '#D6A34B',
        },
        background: {
            default: '#FAFAFB',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#1E1E1E',
            secondary: '#A3A3A3',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            color: '#1E1E1E',
        },
        body2: {
            fontSize: '0.875rem',
            color: '#A3A3A3',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 500,
                },
            },
        },
    },
});

export default theme;
