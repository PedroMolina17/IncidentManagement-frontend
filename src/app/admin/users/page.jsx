"use client";

import { useGetAllUsers } from "../../hooks/useUsers";
const Users = () => {
  const { data: users, isLoading: isLoadingDataUsers } = useGetAllUsers();

  return (
    <div>
      {users &&
        users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
    </div>
  );
};

export default Users;
