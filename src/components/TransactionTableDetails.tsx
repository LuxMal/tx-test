
'use client';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export default function TransactionTableDetails() {
    return (
        <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Taux d'intérêt</TableCell>
                        <TableCell>Commission</TableCell>
                        <TableCell>Taux Effect Global</TableCell>
                        <TableCell>Date de la demande</TableCell>
                        <TableCell>Date dernière échéance</TableCell>
                        <TableCell>Statut de la demande</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>3%</TableCell>
                        <TableCell>Lorem Ipsum</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>01/11/2019</TableCell>
                        <TableCell>01/04/2022</TableCell>
                        <TableCell style={{ color: '#22C55E' }}>Validé</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>8%</TableCell>
                        <TableCell>Lorem Ipsum</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>04/09/2021</TableCell>
                        <TableCell>En attente</TableCell>
                        <TableCell>En attente</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}
