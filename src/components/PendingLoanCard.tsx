'use client';

import {
    Box,
    Paper,
    Typography,
    Stack,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts';
import CheckIcon from '@mui/icons-material/Check';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const COLORS = ['#22C55E', '#F59E0B', '#0EA5E9'];

const chartData = [
    { name: 'Accord ouverture', value: 1 },
    { name: 'Accord demande', value: 1 },
    { name: 'Évaluation des risques', value: 1 },
];

export default function PendingLoanCard() {
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
                En attente <Typography component="span" variant="body2" color="text.secondary" fontWeight={500}>Prêt HotDoggs</Typography>
            </Typography>

            <Box display="flex" alignItems="center" gap={2}>
                <ResponsiveContainer width={80} height={80}>
                    <PieChart>
                        <Pie
                            data={chartData}
                            innerRadius={28}
                            outerRadius={40}
                            dataKey="value"
                            stroke="none"
                        >
                            {chartData.map((_, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <Stack spacing={0.5} fontSize="0.75rem">
                    <Typography color="#22C55E" fontSize="0.75rem">
                        <CheckIcon sx={{ fontSize: 12, mr: 0.5 }} /> Accord ouverture
                    </Typography>
                    <Typography color="#F59E0B" fontSize="0.75rem">
                        <CheckIcon sx={{ fontSize: 12, mr: 0.5 }} /> Accord demande
                    </Typography>
                    <Typography color="#0EA5E9" fontSize="0.75rem">
                        <CheckIcon sx={{ fontSize: 12, mr: 0.5 }} /> Évaluation des risques
                    </Typography>
                </Stack>
            </Box>

            <Box mt={2}>
                <Typography variant="caption" color="text.secondary">
                    Pour déclencher la prochaine étape de validation, veuillez nous joindre :
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                    <PictureAsPdfIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography fontSize="0.75rem" fontWeight={600}>
                        Dossier super important.pdf
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}
