import { TableCell, TableHead, TableRow } from '@mui/material';

export default function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Start Date</TableCell>
        <TableCell>Department</TableCell>
        <TableCell>Date of Birth</TableCell>
        <TableCell>Street</TableCell>
        <TableCell>City</TableCell>
        <TableCell>State</TableCell>
        <TableCell>Zip Code</TableCell>
      </TableRow>
    </TableHead>
  );
}
