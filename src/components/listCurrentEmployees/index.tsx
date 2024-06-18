import { Box, Paper, Table, TableContainer } from '@mui/material';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableBody from './EnhancedTableBody';
import EnhancedPagination from './EnhancedPagination';
import { MouseEvent, useState } from 'react';
import SearchBar from './SearchBar';
import { useFilteredUsers } from '../../hooks/useFilteredUsers';
import { headCells } from '../../constants/headCells';

export default function ListCurrentEmployees() {
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [orderBy, setOrderBy] = useState('firstName');
  const handleRequestSort = (
    _event: MouseEvent,
    property: keyof typeof headCells
  ) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [filter, setFilter] = useState('');
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
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <EnhancedTableBody
                page={page}
                rowsPerPage={rowsPerPage}
                filter={filter}
                order={order}
                orderBy={orderBy}
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
