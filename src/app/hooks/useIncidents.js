import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getAllIncidents } from "../services/incidents";

const useGetAllIncidents = () => {
  return useQuery({
    queryKey: ["incidents"],
    queryFn: () => getAllIncidents(),
  });
};

export { useGetAllIncidents };
