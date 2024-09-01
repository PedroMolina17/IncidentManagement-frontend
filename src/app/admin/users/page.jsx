"use client";
import { useEffect } from "react";
import { useGetAllUsers, useDeleteUsers } from "../../hooks/useUsers";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import CreateButton from "../components/CreateButton";
const Users = () => {
  const { data: users, isLoading: isLoadingDataUsers } = useGetAllUsers();
  const deleteUsers = useDeleteUsers();

  const handleEdit = (userId) => {
    console.log(`Editing user with ID: ${userId}`);
  };

  useEffect(() => {
    users && console.log(users);
  });
  const handleDelete = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUsers.mutate(userId);
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Users Page</h1>
        <CreateButton route={"create"} />
      </div>
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
                    <td className="py-3 px-4">{user.typeusers.description}</td>
                    <td className="py-3 px-4">{user.room.name}</td>
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
