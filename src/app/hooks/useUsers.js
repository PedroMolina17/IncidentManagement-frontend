import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  getCountUsers,
  getAllUsers,
  deleteUsers,
  updateUsers,
} from "../services/users";
import Swal from "sweetalert2";
const useGetCountUsers = (id) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getCountUsers(id),
  });
};

const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });
};

const useDeleteUsers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteUsers(id),
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
  });
};

const useUpdateUsers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id, data) => updateUsers(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      Swal.fire({
        title: "Update!",
        text: "Your file has been update.",
        icon: "success",
      });
    },
  });
};

export { useGetCountUsers, useGetAllUsers, useDeleteUsers, useUpdateUsers };
