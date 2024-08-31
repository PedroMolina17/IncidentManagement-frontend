import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getCountUsers, getAllUsers, deleteUsers } from "../services/users";

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
    },
  });
};

export { useGetCountUsers, useGetAllUsers, useDeleteUsers };
