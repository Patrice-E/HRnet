import { TextField } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type Props = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

export default function SearchBar({ filter, setFilter }: Props) {
  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className='searchbar'>
      Search :{' '}
      <TextField size='small' value={filter} onChange={handleFilterChange} />
    </div>
  );
}
