import { login } from "./../../services/authService";

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });

    const res = await login(userData);

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem("userInfo", JSON.stringify(res.data));

    return res.data;
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILURE",
      payload: error.response?.data?.message || error.message,
    });
    throw error;
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: "USER_LOGOUT" });
  localStorage.removeItem("userInfo");
};
