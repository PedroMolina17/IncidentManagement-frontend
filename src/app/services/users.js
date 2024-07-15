import axiosInstance from "../config/api";

export const getCountUsers = async (id) => {
  const res = await axiosInstance.get(`/users/count?type_user_id=${id}`);
  console.log(res.data);
  return res.data;
};
