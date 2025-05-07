
'use client';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

export default function TransactionTableContract() {
    return (
        <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Client</TableCell>
                        <TableCell>Numéro de contrat</TableCell>
                        <TableCell>Identifiant emprunteur</TableCell>
                        <TableCell>Montant demandé</TableCell>
                        <TableCell>Montant du prêt</TableCell>
                        <TableCell>Mensualité</TableCell>
                        <TableCell>Durée souhaitée</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Prêt Société</TableCell>
                        <TableCell>13452789</TableCell>
                        <TableCell>UK567UI8</TableCell>
                        <TableCell>39 234€</TableCell>
                        <TableCell>39 234€</TableCell>
                        <TableCell>700€</TableCell>
                        <TableCell>18 mois</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Prêt HotDoggs</TableCell>
                        <TableCell>67547800</TableCell>
                        <TableCell>UK567UI8</TableCell>
                        <TableCell>12 300€</TableCell>
                        <TableCell>En attente</TableCell>
                        <TableCell>En attente</TableCell>
                        <TableCell>14 mois</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}
