'use client';

import { Box, Container } from '@mui/material';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardCharts from '@/components/DashboardCharts';
import LoanSection from '@/components/LoanSection';

export default function DashboardPage() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F9FAFB' }}>
            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: '100%',
                    overflowX: 'hidden',
                    pt: 2,
                    pb: 6,
                }}
            >
                <Container maxWidth="lg">
                    <TopBar />
                    <DashboardHeader />
                    <DashboardCharts />
                    <LoanSection />
                </Container>
            </Box>
        </Box>
    );
}
