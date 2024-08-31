"use client";
import { useGetAllUsers, useDeleteUsers } from "../../hooks/useUsers";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Users = () => {
  const { data: users, isLoading: isLoadingDataUsers } = useGetAllUsers();
  const deleteUsers = useDeleteUsers();

  const handleEdit = (userId) => {
    console.log(`Editing user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    deleteUsers.mutate(userId);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Users Page</h1>
      {isLoadingDataUsers ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#221f4a] shadow-md rounded-lg overflow-hidden">
            <thead className="bg-[#3f3a7d] text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Username
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Email
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Type User ID
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Room ID
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr
                    key={user.user_id}
                    className="hover:bg-[#3f3a7d] border-b"
                  >
                    <td className="py-3 px-4">{user.username}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.type_user_id}</td>
                    <td className="py-3 px-4">{user.room_id}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleEdit(user.user_id)}
                        className="text-yellow-500 hover:text-yellow-700 font-semibold mr-2"
                      >
                        <p className="flex gap-2 items-center justify-center">
                          <MdEdit /> Modify
                        </p>
                      </button>
                      <button
                        onClick={() => handleDelete(user.user_id)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        <p className="flex gap-2 items-center justify-center">
                          <MdDelete /> Delete
                        </p>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
