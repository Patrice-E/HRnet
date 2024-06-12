import { TableBody, TableCell, TableRow } from '@mui/material';
import { useAppStore } from '../../store';
import { format } from 'date-fns';

type Props = {
  page: number;
  rowsPerPage: number;
};

export default function EnhancedTableBody({ page, rowsPerPage }: Props) {
  const { users } = useAppStore();

  return (
    <TableBody>
      {!users.length ? (
        <TableRow>
          <TableCell colSpan={9} align='center'>
            No data available in table
          </TableCell>
        </TableRow>
      ) : (
        (rowsPerPage > 0
          ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : users
        ).map((user, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{format(user.startDate, 'PPPP')}</TableCell>
              <TableCell>{user.department}</TableCell>
              <TableCell>{format(user.dateOfBirth, 'PPPP')}</TableCell>
              <TableCell>{user.street}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.state}</TableCell>
              <TableCell>{user.zipCode}</TableCell>
            </TableRow>
          );
        })
      )}
    </TableBody>
  );
}
