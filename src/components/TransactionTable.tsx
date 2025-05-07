import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function TransactionTable() {
  const rows = [
    { name: 'Société', montant: '39 234€', statut: 'Validé' },
    { name: 'HotDoggs', montant: '12 300€', statut: 'En attente' }
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6">Mes factures</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Montant</TableCell>
            <TableCell>Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.montant}</TableCell>
              <TableCell>{row.statut}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}