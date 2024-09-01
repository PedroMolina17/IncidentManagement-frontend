import axiosInstance from "../config/api";

export const getCountUsers = async (id) => {
  const endpoint = id ? `/users/count?type_user_id=${id}` : `/users/count`;
  const res = await axiosInstance.get(endpoint);
  return res.data;
};

export const CreateUsers = async (data) => {
  const res = await axiosInstance.post("/users", data);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axiosInstance.get("/users");
  return res.data;
};

export const deleteUsers = async (id) => {
  const res = await axiosInstance.delete(`/users/${id}`);
  return res.data;
};

export const updateUsers = async (id, data) => {
  const res = await axiosInstance.put(`/users/${id}`, data);
  return res.data;
};
