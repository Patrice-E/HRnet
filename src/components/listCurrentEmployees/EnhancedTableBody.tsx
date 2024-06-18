import { TableBody, TableCell, TableRow } from '@mui/material';
import { format } from 'date-fns';
import { useFilteredUsers } from '../../hooks/useFilteredUsers';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return 1;
  }
  if (b[orderBy] > a[orderBy]) {
    return -1;
  }
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComparator<Key extends keyof any>(
  order: 'asc' | 'desc',
  orderBy: Key
): (
  a: { [key in Key]: number | string | Date },
  b: { [key in Key]: number | string | Date }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

type Props = {
  page: number;
  rowsPerPage: number;
  filter: string;
  order: 'asc' | 'desc';
  orderBy: string;
};

export default function EnhancedTableBody({
  page,
  rowsPerPage,
  filter,
  order,
  orderBy,
}: Props) {
  const filteredUsers = useFilteredUsers(filter);
  const sortedUsers = filteredUsers.sort(getComparator(order, orderBy));

  return (
    <TableBody>
      {!sortedUsers.length ? (
        <TableRow>
          <TableCell colSpan={9} align='center'>
            No data available in table
          </TableCell>
        </TableRow>
      ) : (
        (rowsPerPage > 0
          ? sortedUsers.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )
          : sortedUsers
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
