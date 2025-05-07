'use client';

import {
    Box,
    Grid,
    Paper,
    Typography,
    useTheme,
    useMediaQuery,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
} from '@mui/material';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';

const chartData = [
    { name: '1', val1: 10000, val2: 9000, val3: 4000 },
    { name: '5', val1: 20000, val2: 15000, val3: 10000 },
    { name: '10', val1: 28000, val2: 23000, val3: 18000 },
    { name: '15', val1: 31000, val2: 27000, val3: 20000 },
    { name: '20', val1: 39000, val2: 33000, val3: 30000 },
    { name: '25', val1: 50000, val2: 43000, val3: 31000 },
];

const euriborData = [
    { tenor: '7 DAYS', marketPlace: '0.0000', riskFree: '0', premium: '0.0000', change: '0.0000', variation: '1' },
    { tenor: '30 DAYS', marketPlace: '0.0000', riskFree: '0', premium: '0.0000', change: '0.0000', variation: '9' },
    { tenor: '90 DAYS', marketPlace: '0.0300', riskFree: '0.02345', premium: '0.0300', change: '0.0300', variation: '0.02345' },
    { tenor: '180 DAYS', marketPlace: '0.03500', riskFree: '0.03500', premium: '0.03500', change: '0.03500', variation: '0.03500' },
    { tenor: '360 DAYS', marketPlace: '0.004400', riskFree: '0.004400', premium: '0.004400', change: '0.004400', variation: '0.004400' },
];

export default function DashboardCharts() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [selectedFilter, setSelectedFilter] = useState('Euribor1w');

    return (
        <Box mb={4}>
            <Typography variant="h6" fontWeight={600} mb={2}>
                Informations financières
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            p: 2,
                            borderRadius: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="subtitle1" fontWeight={600} mb={1}>
                            Évolution des taux
                        </Typography>
                        <Box sx={{ width: '100%', minHeight: 300 }}>
                            <ResponsiveContainer width="100%" height={300} minWidth={300}>
                                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="name" stroke="#6B7280" />
                                    <YAxis stroke="#6B7280" />
                                    <Tooltip formatter={(value) => `${value}€`} />
                                    <Legend />
                                    <Line type="monotone" dataKey="val1" stroke="#22C55E" strokeWidth={2} dot={{ r: 4 }} />
                                    <Line type="monotone" dataKey="val2" stroke="#0EA5E9" strokeWidth={2} dot={{ r: 4 }} />
                                    <Line type="monotone" dataKey="val3" stroke="#F97316" strokeWidth={2} dot={{ r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            p: 2,
                            borderRadius: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Box display="flex" gap={1} flexWrap="wrap">
                            {['Euribor1w', 'Euribor2w', 'Euribor3w', 'Average Sector Spread'].map((label) => (
                                <Button
                                    key={label}
                                    onClick={() => setSelectedFilter(label)}
                                    variant={selectedFilter === label ? 'contained' : 'outlined'}
                                    size="small"
                                    sx={{
                                        borderRadius: 1,
                                        textTransform: 'none',
                                        fontWeight: 500,
                                        fontSize: '0.85rem',
                                        bgcolor: selectedFilter === label ? '#E0E7FF' : '#F9FAFB',
                                        color: selectedFilter === label ? '#1E3A8A' : '#6B7280',
                                        borderColor: '#E5E7EB',
                                        '&:hover': { bgcolor: '#E5E7EB' },
                                    }}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>

                        <TableContainer sx={{ overflowX: 'auto' }}>
                            <Table size="small" sx={{ minWidth: 720 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 600, color: '#6B7280' }}>Tenor</TableCell>
                                        <TableCell sx={{ fontWeight: 600, color: '#6B7280' }}>Market Place</TableCell>
                                        <TableCell sx={{ fontWeight: 600, color: '#6B7280' }}>Market Risk Free<br /><small>Date</small></TableCell>
                                        <TableCell sx={{ fontWeight: 600, color: '#6B7280' }}>Market Risk Free<br /><small>Premium</small></TableCell>
                                        <TableCell sx={{ fontWeight: 600, color: '#6B7280' }}>Change %</TableCell>
                                        <TableCell sx={{ fontWeight: 600, color: '#6B7280' }}>Variation</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {euriborData.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{row.tenor}</TableCell>
                                            <TableCell>{row.marketPlace}</TableCell>
                                            <TableCell>{row.riskFree}</TableCell>
                                            <TableCell>{row.premium}</TableCell>
                                            <TableCell>{row.change}</TableCell>
                                            <TableCell>{row.variation}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
