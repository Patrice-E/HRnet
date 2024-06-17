import { TableBody, TableCell, TableRow } from '@mui/material';
import { format } from 'date-fns';
import { useFilteredUsers } from '../../hooks/useFilteredUsers';

type Props = {
  page: number;
  rowsPerPage: number;
  filter: string;
};

export default function EnhancedTableBody({
  page,
  rowsPerPage,
  filter,
}: Props) {
  const filteredUsers = useFilteredUsers(filter);

  return (
    <TableBody>
      {!filteredUsers.length ? (
        <TableRow>
          <TableCell colSpan={9} align='center'>
            No data available in table
          </TableCell>
        </TableRow>
      ) : (
        (rowsPerPage > 0
          ? filteredUsers.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )
          : filteredUsers
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
