import { Box, Paper, Table, TableContainer } from '@mui/material';
// import { Schema } from '../createEmployeeForm/schema';
// import { useState } from 'react';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableBody from './EnhancedTableBody';
import EnhancedPagination from './EnhancedPagination';

export default function ListCurrentEmployees() {
  // const [orderBy, setOrderBy] = useState<keyof Schema>('lastName');
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table>
            <EnhancedTableHead />
            <EnhancedTableBody />
          </Table>
        </TableContainer>
        <EnhancedPagination />
      </Paper>
    </Box>
  );
}
