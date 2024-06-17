import { TablePagination } from '@mui/material';
import { useFilteredUsers } from '../../hooks/useFilteredUsers';

type Props = {
  page: number;
  rowsPerPage: number;
  handleChangePage: (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  filter: string;
};

export default function EnhancedPagination({
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  filter,
}: Props) {
  const filteredUsers = useFilteredUsers(filter);

  return (
    <TablePagination
      component='div'
      count={filteredUsers.length}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[5, 10, 25]}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
