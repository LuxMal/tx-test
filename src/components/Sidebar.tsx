'use client';

import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Avatar,
    IconButton,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Person';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PeopleIcon from '@mui/icons-material/People';
import HelpIcon from '@mui/icons-material/HelpOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useEffect } from 'react';

const drawerWidth = 300;
const drawerHeight = 720;
const miniWidth = 56;

const mainItems = [
    { label: 'Tableau de Bord', icon: <DashboardIcon />, active: true },
    { label: 'Mes transactions', icon: <SwapHorizIcon /> },
    { label: 'Mes clients', icon: <PeopleIcon /> },
    { label: 'Assistance', icon: <HelpIcon /> },
];

const lowerItems = [
    { label: 'Mes notifications (1)', icon: <NotificationsIcon />, dot: true },
    { label: 'Réglages', icon: <SettingsIcon /> },
];

export default function Sidebar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        setCollapsed(isMobile);
    }, [isMobile]);

    const toggleSidebar = () => setCollapsed(!collapsed);

    const renderNavItem = (item: any, index: number) => (
        <ListItemButton
            key={index}
            selected={item.active}
            sx={{
                borderRadius: 1,
                mb: 1,
                px: 2,
                py: 1.2,
                justifyContent: collapsed ? 'center' : 'flex-start',
                color: item.active ? '#1F2D7A' : '#9CA3AF',
                backgroundColor: item.active ? '#EEF0FC' : 'transparent',
                '&:hover': { backgroundColor: '#F6F7FB' },
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: collapsed ? 0 : 2,
                    color: item.active ? '#1F2D7A' : '#D1D5DB',
                }}
            >
                {item.icon}
            </ListItemIcon>
            {!collapsed && (
                <ListItemText
                    primary={<Typography fontSize="0.95rem" fontWeight={500}>{item.label}</Typography>}
                />
            )}
        </ListItemButton>
    );

    return (
        <Box
            sx={{
                width: collapsed ? miniWidth : drawerWidth,
                height: drawerHeight,
                bgcolor: '#fff',
                borderRight: '1px solid #F3F4F6',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
                transition: 'width 0.3s ease',
            }}
        >
            <Box>
                <Box
                    display="flex"
                    justifyContent={collapsed ? 'center' : 'space-between'}
                    alignItems="center"
                    mb={4}
                >
                    {collapsed ? (
                        <img src="/logo-mini.svg" alt="Logo" style={{ height: 28 }} />
                    ) : (
                        <img src="/logo.svg" alt="Logo" style={{ height: 28 }} />
                    )}
                    <IconButton
                        onClick={toggleSidebar}
                        sx={{
                            ml: collapsed ? 0 : 1,
                            display: isMobile ? 'inline-flex' : 'none',
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                {mainItems.map(renderNavItem)}
            </Box>

            <Box mt="auto">
                <Box mt={2}>{lowerItems.map(renderNavItem)}</Box>
                <Box display="flex" alignItems="center" gap={1.5} mt={4} px={1}>
                    <Avatar src="/avatar.jpg" alt="Paul Dumartin" sx={{ width: 40, height: 40 }} />
                    {!collapsed && (
                        <Box>
                            <Typography fontWeight={700} fontSize="0.95rem">Paul Dumartin</Typography>
                            <Typography variant="caption" color="text.secondary">
                                Statut Vérification KYC :{' '}
                                <Typography component="span" variant="caption" color="#22C55E" fontWeight={600}>
                                    Valide
                                </Typography>
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
