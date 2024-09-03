import axiosInstance from "../config/api";
export const getAllIncidents = async () => {
  const res = await axiosInstance.get("/incidents");
  return res.data;
};
