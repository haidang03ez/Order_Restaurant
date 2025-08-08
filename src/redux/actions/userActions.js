import { login } from "./../../services/authService";
import { getUserDetails as getUserDetailsApi } from "../../services/userService";

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });

    const res = await login(userData);

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem("userInfo", JSON.stringify(res.data));
    
    if (res.data.accessToken) {
      localStorage.setItem("accessToken", res.data.accessToken);
    }

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
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({ type: "USER_DETAILS_REQUEST" });

    const res = await getUserDetailsApi();

    dispatch({ type: "USER_DETAILS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({
      type: "USER_DETAILS_FAILURE",
      payload: error.response?.data?.message || error.message,
    });
  }
};
