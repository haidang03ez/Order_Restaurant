import api from "../api/axiosClients";

export const login = async (credentials) => {
    return api.post("/auth/login", credentials);
}

export const refreshToken = () => {
  return api.post("/auth/refresh", {
    refreshToken: localStorage.getItem("refreshToken"),
  });
};

export const logout = () => {
  localStorage.clear();
};