'use client';

import { Box, Container, useMediaQuery, useTheme, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import DashboardHeader from '@/components/DashboardHeader';
import LoanSection from '@/components/LoanSection';
import DashboardCharts from '@/components/DashboardCharts';

export default function DashboardLayout() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const drawerHeight = 720;

    return (
        <Box display="flex" justifyContent="center" sx={{ bgcolor: 'background.default' }}>
            <Box
                display="flex"
                width="100%"
                maxWidth="1440px"
                height={drawerHeight}
                overflow="hidden"
            >
                <Sidebar
                    mobile={isMobile}
                    open={sidebarOpen}
                    onToggle={() => setSidebarOpen(!sidebarOpen)}
                />

                <Box
                    component="main"
                    flexGrow={1}
                    sx={{
                        p: { xs: 2, md: 4 },
                        position: 'relative',
                        overflowY: 'auto',
                    }}
                >

                    <TopBar />
                    <DashboardHeader />
                    <LoanSection />
                    <DashboardCharts />
                </Box>
            </Box>
        </Box>
    );
}
