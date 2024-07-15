import { useQuery } from "@tanstack/react-query";
import { getCountUsers } from "../services/users";

const useGetCountUsers = (id) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => (id ? getCountUsers(id) : Promise.resolve(null)),
    enabled: !!id,
  });
};

export { useGetCountUsers };
