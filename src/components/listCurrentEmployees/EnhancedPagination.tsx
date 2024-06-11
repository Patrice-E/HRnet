import { TablePagination } from '@mui/material';
import { useState } from 'react';
import { useAppStore } from '../../store';

export default function EnhancedPagination() {
  const { users } = useAppStore();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component='div'
      count={users.length}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[5, 10, 25]}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
