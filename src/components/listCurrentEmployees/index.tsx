import { Box, Paper, Table, TableContainer } from '@mui/material';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableBody from './EnhancedTableBody';
import EnhancedPagination from './EnhancedPagination';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { useFilteredUsers } from '../../hooks/useFilteredUsers';

export default function ListCurrentEmployees() {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredUsers = useFilteredUsers(filter);

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <SearchBar filter={filter} setFilter={setFilter} />
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table>
              <EnhancedTableHead />
              <EnhancedTableBody
                page={page}
                rowsPerPage={rowsPerPage}
                filter={filter}
              />
            </Table>
          </TableContainer>
          {filteredUsers.length > 0 && (
            <EnhancedPagination
              page={page}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              filter={filter}
            />
          )}
        </Paper>
      </Box>
    </>
  );
}
