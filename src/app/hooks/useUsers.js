import { useQuery } from "@tanstack/react-query";
import { getCountUsers } from "../services/users";

const useGetCountUsers = (id) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getCountUsers(id),
  });
};

export { useGetCountUsers };
