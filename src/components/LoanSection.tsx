
'use client';
import { Box, Grid, Typography } from '@mui/material';
import TransactionTabs from './TransactionTabs';
import LoanStatusCard from './LoanStatusCard';
import LoanAmountCard from './LoanAmountCard';
import PendingLoanCard from './PendingLoanCard';
import ClosedLoanCard from './ClosedLoanCard';
import TransactionTableContract from './TransactionTableContract';
import TransactionTableDetails from './TransactionTableDetails';

export default function LoanSection() {
    return (
        <Box mb={4}>
            <Typography variant="h6" fontWeight={600} mb={2}>Transactions</Typography>
            <TransactionTabs />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}><LoanStatusCard /></Grid>
                <Grid item xs={12} sm={6} md={3}><LoanAmountCard /></Grid>
                <Grid item xs={12} sm={6} md={3}><PendingLoanCard /></Grid>
                <Grid item xs={12} sm={6} md={3}><ClosedLoanCard /></Grid>
                <Grid item xs={12} md={6}><TransactionTableContract /></Grid>
                <Grid item xs={12} md={6}><TransactionTableDetails /></Grid>
            </Grid>
        </Box>
    );
}
