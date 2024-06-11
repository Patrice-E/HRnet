import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';
import { Schema } from './components/createEmployeeForm/schema';

const useAppStore = create(
  persist(
    combine(
      {
        users: [] as Schema[],
      },
      (set) => ({
        addUser: (user: Schema) =>
          set((state) => {
            state.users.push(user);
            return state;
          }),
        removeUser: (user: Schema) => {
          set((state) => {
            const newArray = state.users.filter(
              (u) => u.lastName !== user.lastName
            );
            state.users = newArray;
            return state;
          });
        },
      })
    ),
    { name: 'employees' }
  )
);

export { useAppStore };
