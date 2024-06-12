import { TablePagination } from '@mui/material';
import { useAppStore } from '../../store';

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
};

export default function EnhancedPagination({
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}: Props) {
  const { users } = useAppStore();

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
