const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  loading: false,
  user: userInfoFromStorage,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };

    case "USER_LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    case "USER_LOGOUT":
      return {
        ...state,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};
