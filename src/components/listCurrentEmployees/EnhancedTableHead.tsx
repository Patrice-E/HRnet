import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { MouseEvent } from 'react';
import { headCells } from '../../constants/headCells';

type Props = {
  order: 'asc' | 'desc';
  orderBy: string;
  onRequestSort: (event: MouseEvent, property: keyof typeof headCells) => void;
};

export default function EnhancedTableHead({
  order,
  orderBy,
  onRequestSort,
}: Props) {
  return (
    <TableHead>
      <TableRow>
        {Object.keys(headCells).map((key) => (
          <TableCell key={key} sortDirection={orderBy === key ? order : false}>
            <TableSortLabel
              active={orderBy === key}
              direction={order}
              onClick={(event) =>
                onRequestSort(event, key as keyof typeof headCells)
              }
            >
              {headCells[key as keyof typeof headCells]}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
