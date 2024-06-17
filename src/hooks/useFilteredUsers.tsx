import { useEffect, useState } from 'react';
import { useAppStore } from '../store';
import { Schema } from '../components/createEmployeeForm/schema';

const useFilteredUsers = (filter: string) => {
  const { users } = useAppStore();

  const [filteredUsersRef, setFilteredUsersRef] = useState<Schema[]>(users);

  useEffect(() => {
    if (filter !== '') {
      const temp = users.filter((f) => f.lastName.includes(filter));
      setFilteredUsersRef(temp);
    } else {
      setFilteredUsersRef(users);
    }
  }, [filter, users]);

  return filteredUsersRef;
};

export { useFilteredUsers };
