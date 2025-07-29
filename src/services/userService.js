import api from "../api/axiosClients";

export const getUserDetails = async () => {
  return api.get("/auth/me");
};
