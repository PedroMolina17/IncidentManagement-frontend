import axiosInstance from "../config/api";

export const getCountUsers = async (id) => {
  const endpoint = id ? `/users/count?type_user_id=${id}` : `/users/count`;
  const res = await axiosInstance.get(endpoint);
  return res.data;
};
