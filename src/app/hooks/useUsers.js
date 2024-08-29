import { useQuery } from "@tanstack/react-query";
import { getCountUsers, getAllUsers } from "../services/users";

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

export { useGetCountUsers, useGetAllUsers };
